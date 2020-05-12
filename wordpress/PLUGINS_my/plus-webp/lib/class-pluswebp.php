<?php
/**
 * Plus WebP
 *
 * @package    Plus WebP
 * @subpackage PlusWebp Main function
/*  Copyright (c) 2019- Katsushi Kawamori (email : dodesyoswift312@gmail.com)
	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation; version 2 of the License.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */

$pluswebp = new PlusWebp();

/** ==================================================
 * Class Main function
 *
 * @since 1.00
 */
class PlusWebp {

	/** ==================================================
	 * Dir
	 *
	 * @var $upload_dir DIR.
	 */
	private $upload_dir;

	/** ==================================================
	 * URL
	 *
	 * @var $upload_url URL.
	 */
	private $upload_url;

	/** ==================================================
	 * Path
	 *
	 * @var $upload_path PATH.
	 */
	private $upload_path;

	/** ==================================================
	 * Construct
	 *
	 * @since 1.00
	 */
	public function __construct() {

		list( $this->upload_dir, $this->upload_url, $this->upload_path ) = $this->upload_dir_url_path();

		add_filter( 'wp_generate_attachment_metadata', array( $this, 'generate_webp' ), 10, 2 );
		add_filter( 'delete_attachment', array( $this, 'delete_webp' ), 10, 2 );
	}

	
	/** ==================================================
	 * Webp generate
	 *
	 * @param array $metadata  metadata.
	 * @param int   $attachment_id  ID.
	 * @return array $metadata  metadata.
	 * @since 1.00
	 */
	public function generate_webp( $metadata, $attachment_id ) {

		$pluswebp_settings = get_option( 'pluswebp' );
		$replace           = $pluswebp_settings['replace'];

		$mime_type = get_post_mime_type( $attachment_id );
		if ( in_array( $mime_type, $pluswebp_settings['types'] ) ) {
			$metadata_webp         = $metadata;
			$file_webp             = $this->change_ext( $metadata['file'], 'webp' );
			$metadata_webp['file'] = $file_webp;
			foreach ( (array) $metadata['sizes'] as $key => $value ) {
				$file_thumb      = $value['file'];
				$file_thumb_webp = $this->change_ext( $file_thumb, 'webp' );
				$path            = $this->upload_dir . '/' . dirname( $file_webp ) . '/';
				$url             = $this->upload_url . '/' . dirname( $file_webp ) . '/';
				$ret             = $this->create_webp( $path . $file_thumb, $mime_type, $path . $file_thumb_webp );
				if ( $ret ) {
					$metadata_webp['sizes'][ $key ]['file']      = $file_thumb_webp;
					$metadata_webp['sizes'][ $key ]['mime-type'] = 'image/webp';
					if ( $replace ) {
						unlink( $path . $file_thumb );
						$this->change_db( $url . $file_thumb, $url . $file_thumb_webp );
					}
				}
			}
			if ( ! empty( $metadata['original_image'] ) ) {
				$org_img_file  = wp_get_original_image_path( $attachment_id, false );
				$org_webp_file = $this->change_ext( $org_img_file, 'webp' );
				$ret = $this->create_webp( $org_img_file, $mime_type, $org_webp_file );
				if ( $ret ) {
					$metadata_webp['original_image'] = wp_basename( $org_webp_file );
				}
			}

			$ret = $this->create_webp( $this->upload_dir . '/' . $metadata['file'], $mime_type, $this->upload_dir . '/' . $file_webp );
			if ( $ret ) {
				if ( $replace ) {
					$up_post = array(
						'ID'             => $attachment_id,
						'guid'           => $this->upload_url . '/' . $file_webp,
						'post_mime_type' => 'image/webp',
					);
					wp_update_post( $up_post );
					update_post_meta( $attachment_id, '_wp_attached_file', $file_webp );
					/* for bulk generate */
					update_post_meta( $attachment_id, '_wp_attachment_metadata', $metadata_webp );
					/* delete org file */
					unlink( $this->upload_dir . '/' . $metadata['file'] );
					/* Replace */
					$this->change_db( $this->upload_url . '/' . $metadata['file'], $this->upload_url . '/' . $file_webp );
					/* for hook */
					$metadata = $metadata_webp;
					/* for mail */
					$attach_id  = $attachment_id;
				} else {
					$post       = get_post( $attachment_id );
					$title      = get_the_title( $post );
					$attachment = array(
						'guid'           => $this->upload_url . '/' . $file_webp,
						'post_mime_type' => 'image/webp',
						'post_title'     => $title,
						'post_content'   => '',
						'post_status'    => 'inherit',
					);
					$attach_id  = wp_insert_attachment( $attachment, $this->upload_dir . '/' . $file_webp );
					wp_update_attachment_metadata( $attach_id, $metadata_webp );

					$author      = get_userdata( $post->post_author );
					$userid      = $author->ID;
					$postdate    = get_the_date( 'Y-m-d H:i:s', $attachment_id );
					$postdategmt = get_gmt_from_date( $postdate );
					$up_post     = array(
						'ID'                => $attach_id,
						'post_author'       => $userid,
						'post_date'         => $postdate,
						'post_date_gmt'     => $postdategmt,
						'post_modified'     => $postdate,
						'post_modified_gmt' => $postdategmt,
					);
					wp_update_post( $up_post );
				}

				$ids = get_option( 'pluswebp_generate' );
				$ids[] = $attach_id;
				update_option( 'pluswebp_generate', $ids );

			}
		}

		return $metadata;

	}

	/** ==================================================
	 * Mail send hook
	 *
	 * @param string $to  to.
	 * @since 1.09
	 */
	public function mail_send( $to ) {

		$post_ids = get_option( 'pluswebp_generate' );
		delete_option( 'pluswebp_generate' );

		if ( function_exists( 'wp_date' ) ) {
			$now_date_time = wp_date( 'Y-m-d H:i:s' );
		} else {
			$now_date_time = date_i18n( 'Y-m-d H:i:s' );
		}
		$pluswebp_mail_send = array();
		$pluswebp_mail_send['datetime'] = $now_date_time;

		/* translators: Date and Time */
		$message = sprintf( __( 'Plus WebP : %s', 'plus-webp' ), $now_date_time ) . "\r\n\r\n";

		if ( ! empty( $post_ids ) ) {

			$message .= __( 'Generation of WebP is complete.', 'plus-webp' ) . "\r\n\r\n";
			$pluswebp_mail_send['count'] = count( $post_ids );

			$count = 0;
			foreach ( $post_ids as $attach_id ) {
				$filename  = get_attached_file( $attach_id );
				$metadata  = wp_get_attachment_metadata( $attach_id );
				/* OutputMetaData */
				list( $imagethumburls, $stamptime, $file_size ) = $this->output_metadata( $attach_id, $metadata, $this->upload_url );
				$count++;
				$message .= __( 'Count' ) . ': ' . $count . "\n";
				$message .= 'ID: ' . $attach_id . "\n";
				$message .= __( 'Title' ) . ': ' . get_the_title( $attach_id ) . "\n";
				$message .= __( 'Permalink:' ) . ' ' . get_attachment_link( $attach_id ) . "\n";
				$message .= 'URL: ' . wp_get_attachment_url( $attach_id ) . "\n";
				$message .= __( 'File name:' ) . ' ' . wp_basename( wp_get_attachment_url( $attach_id ) ) . "\n";
				if ( ! empty( $metadata['original_image'] ) ) {
					$message .= __( 'Original URL:', 'plus-webp' ) . ' ' . wp_get_original_image_url( $attach_id ) . "\n";
					$message .= __( 'Original File name:', 'plus-webp' ) . ' ' . wp_basename( wp_get_original_image_url( $attach_id ) ) . "\n";
				}
				$message .= __( 'Date/Time' ) . ': ' . $stamptime . "\n";
				if ( ! $file_size ) {
					$file_size = __( 'Could not retrieve.', 'plus-webp' );
				} else {
					$file_size = size_format( $file_size );
				}
				$message .= __( 'File size:' ) . ' ' . $file_size . "\n";
				if ( ! empty( $imagethumburls ) ) {
					foreach ( $imagethumburls as $thumbsize => $imagethumburl ) {
						$message .= $thumbsize . ': ' . $imagethumburl . "\n";
					}
				}
				$message .= "\n";
			}
		} else {
			$message .= __( 'WebP was not generated. A file with the same name already exists.', 'plus-webp' ) . "\r\n\r\n";
			$pluswebp_mail_send['count'] = 0;
		}

		update_option( 'pluswebp_generate_mail', $pluswebp_mail_send );

		/* translators: blogname for subject */
		$subject = sprintf( __( '[%s] WebP generate', 'plus-webp' ), get_option( 'blogname' ) );
		wp_mail( $to, $subject, $message );

	}

	/** ==================================================
	 * Output metadata
	 *
	 * @param int    $attach_id  attach_id.
	 * @param array  $metadata  metadata.
	 * @param string $upload_url  upload_url.
	 * @return array $imagethumburls(string), $stamptime(string), $file_size(string)
	 * @since 1.09
	 */
	private function output_metadata( $attach_id, $metadata, $upload_url ) {

		$imagethumburls = array();
		$wp_attached_file = get_post_meta( $attach_id, '_wp_attached_file', true );
		$imagethumburl_base = $upload_url . '/' . rtrim( $wp_attached_file, wp_basename( $wp_attached_file ) );
		if ( ! empty( $metadata ) ) {
			foreach ( $metadata as $key1 => $key2 ) {
				if ( 'sizes' === $key1 ) {
					foreach ( $metadata[ $key1 ] as $key2 => $key3 ) {
						$imagethumburls[ $key2 ] = $imagethumburl_base . $metadata['sizes'][ $key2 ]['file'];
					}
				}
			}
		}

		$stamptime = get_the_time( 'Y-n-j ', $attach_id ) . get_the_time( 'G:i:s', $attach_id );
		$file_size = @filesize( get_attached_file( $attach_id, false ) );

		return array( $imagethumburls, $stamptime, $file_size );

	}

	/** ==================================================
	 * Webp create
	 *
	 * @param string $filename  input filename for pictures.
	 * @param string $mime_type  mimetype.
	 * @param string $filename_webp  output filename for webp.
	 * @return bool $ret create bool.
	 * @since 1.00
	 */
	private function create_webp( $filename, $mime_type, $filename_webp ) {

		if ( ! file_exists( $filename ) ) {
			return false;
		}
		if ( file_exists( $filename_webp ) ) {
			return false;
		}

		$pluswebp_settings = get_option( 'pluswebp' );
		@set_time_limit( 60 );

		$ret = false;
		switch ( $mime_type ) {
			case 'image/jpeg':
				$src = imagecreatefromjpeg( $filename );
				$img = imagecreatetruecolor( imagesx( $src ), imagesy( $src ) );
				imagefill( $img, 0, 0, imagecolorallocate( $img, 255, 255, 255 ) );
				imagealphablending( $img, true );
				break;
			case 'image/png':
				$src = imagecreatefrompng( $filename );
				$img = imagecreatetruecolor( imagesx( $src ), imagesy( $src ) );
				imagealphablending( $img, false );
				imagesavealpha( $img, true );
				break;
			case 'image/bmp':
				$src = imagecreatefrombmp( $filename );
				$img = imagecreatetruecolor( imagesx( $src ), imagesy( $src ) );
				break;
			case 'image/gif':
				$src = imagecreatefromgif( $filename );
				$img = imagecreatetruecolor( imagesx( $src ), imagesy( $src ) );
				$bgcolor = imagecolorallocatealpha( $img, 0, 0, 0, 127 );
				imagefill( $img, 0, 0, $bgcolor );
				imagecolortransparent( $img, $bgcolor );
				break;
		}

		imagecopy( $img, $src, 0, 0, 0, 0, imagesx( $src ), imagesy( $src ) );
		imagedestroy( $src );
		$ret = imagewebp( $img, $filename_webp, $pluswebp_settings['quality'] );
		imagedestroy( $img );

		return $ret;

	}

	/** ==================================================
	 * Change ext
	 *
	 * @param string $before_file_name  before_file_name.
	 * @param string $ext  ext.
	 * @return array $after_file_name  after_file_name.
	 * @since 1.00
	 */
	private function change_ext( $before_file_name, $ext ) {

		$exts            = explode( '.', $before_file_name );
		$before_ext      = '.' . end( $exts );
		$after_ext       = '.' . $ext;
		$after_file_name = str_replace( $before_ext, $after_ext, $before_file_name );

		return $after_file_name;

	}

	/** ==================================================
	 * Change DB
	 *
	 * @param string $before_url  before_url.
	 * @param string $after_url  after_url.
	 * @since 1.00
	 */
	private function change_db( $before_url, $after_url ) {

		global $wpdb;

		/* Replace */
		$wpdb->query(
			$wpdb->prepare(
				"UPDATE `$wpdb->posts` SET post_content = replace(post_content, %s, %s)",
				$before_url,
				$after_url
			)
		);

	}

	/** ==================================================
	 * Upload Path
	 *
	 * @return array $upload_dir,$upload_url,$upload_path  uploadpath.
	 * @since 1.00
	 */
	public function upload_dir_url_path() {

		$wp_uploads = wp_upload_dir();

		$relation_path_true = strpos( $wp_uploads['baseurl'], '../' );
		if ( $relation_path_true > 0 ) {
			$relationalpath = substr( $wp_uploads['baseurl'], $relation_path_true );
			$basepath       = substr( $wp_uploads['baseurl'], 0, $relation_path_true );
			$upload_url     = $this->realurl( $basepath, $relationalpath );
			$upload_dir     = wp_normalize_path( realpath( $wp_uploads['basedir'] ) );
		} else {
			$upload_url = $wp_uploads['baseurl'];
			$upload_dir = wp_normalize_path( $wp_uploads['basedir'] );
		}

		if ( is_ssl() ) {
			$upload_url = str_replace( 'http:', 'https:', $upload_url );
		}

		if ( $relation_path_true > 0 ) {
			$upload_path = $relationalpath;
		} else {
			$upload_path = str_replace( site_url( '/' ), '', $upload_url );
		}

		$upload_dir  = untrailingslashit( $upload_dir );
		$upload_url  = untrailingslashit( $upload_url );
		$upload_path = untrailingslashit( $upload_path );

		return array( $upload_dir, $upload_url, $upload_path );

	}

	/** ==================================================
	 * Real Url
	 *
	 * @param  string $base  base.
	 * @param  string $relationalpath relationalpath.
	 * @return string $realurl realurl.
	 * @since  1.00
	 */
	private function realurl( $base, $relationalpath ) {

		$parse = array(
			'scheme'   => null,
			'user'     => null,
			'pass'     => null,
			'host'     => null,
			'port'     => null,
			'query'    => null,
			'fragment' => null,
		);
		$parse = wp_parse_url( $base );

		if ( strpos( $parse['path'], '/', ( strlen( $parse['path'] ) - 1 ) ) !== false ) {
			$parse['path'] .= '.';
		}

		if ( preg_match( '#^https?://#', $relationalpath ) ) {
			return $relationalpath;
		} elseif ( preg_match( '#^/.*$#', $relationalpath ) ) {
			return $parse['scheme'] . '://' . $parse['host'] . $relationalpath;
		} else {
			$base_path = explode( '/', dirname( $parse['path'] ) );
			$rel_path  = explode( '/', $relationalpath );
			foreach ( $rel_path as $rel_dir_name ) {
				if ( '.' === $rel_dir_name ) {
					array_shift( $base_path );
					array_unshift( $base_path, '' );
				} elseif ( '..' === $rel_dir_name ) {
					array_pop( $base_path );
					if ( count( $base_path ) === 0 ) {
						$base_path = array( '' );
					}
				} else {
					array_push( $base_path, $rel_dir_name );
				}
			}
			$path = implode( '/', $base_path );
			return $parse['scheme'] . '://' . $parse['host'] . $path;
		}

	}

	public function delete_webp($post_id) {
		
		$attachment_meta = get_post_meta ( $post_id, '_wp_attachment_metadata', true ); // данные произвольного поля _wp_attachment_metadata вложения
		$file_path_arr = explode( '/', $attachment_meta['file'] ); // разбивка по разделителю '/'

		$filepath = wp_get_upload_dir()['basedir'] . DIRECTORY_SEPARATOR . $attachment_meta['file']; // сборка пути к файлу .webp (основной, не созданные миниатюры)
		$fileExt = end(explode('.', $filepath)); // расширение файла
		
		if($fileExt == 'webp') { // если webp-файл
			// т.к. миниатюр может быть несколько, то нужно сформировать пути в каждой из них
			foreach( $attachment_meta['sizes'] as $size ) {
				$filepathSize = wp_get_upload_dir()['basedir'] . DIRECTORY_SEPARATOR . $file_path_arr[0] . DIRECTORY_SEPARATOR . $file_path_arr[1] . DIRECTORY_SEPARATOR . $size['file'];
				unlink($filepathSize); // удаляем файл
			}
			unlink($filepath); // удаляем файл (основной файл)
		}
	}

}