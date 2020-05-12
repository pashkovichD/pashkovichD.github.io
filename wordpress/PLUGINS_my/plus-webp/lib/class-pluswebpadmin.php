<?php
/**
 * Plus WebP
 *
 * @package    Plus WebP
 * @subpackage PlusWebpAdmin Management screen
	Copyright (c) 2019- Katsushi Kawamori (email : dodesyoswift312@gmail.com)
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

$pluswebpadmin = new PlusWebpAdmin();

/** ==================================================
 * Management screen
 */
class PlusWebpAdmin {

	/** ==================================================
	 * Construct
	 *
	 * @since 1.00
	 */
	public function __construct() {

		add_action( 'admin_menu', array( $this, 'plugin_menu' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'load_custom_wp_admin_style' ) );
		add_filter( 'plugin_action_links', array( $this, 'settings_link' ), 10, 2 );
		add_action( 'admin_notices', array( $this, 'generate_notice' ) );

		add_action( 'AllImagesRegenerateHook', array( $this, 'allimages_regenerate' ), 10, 1 );

	}

	/** ==================================================
	 * Add a "Settings" link to the plugins page
	 *
	 * @param array  $links  links array.
	 * @param string $file  file.
	 * @return array $links  links array.
	 * @since 1.00
	 */
	public function settings_link( $links, $file ) {
		static $this_plugin;
		if ( empty( $this_plugin ) ) {
			$this_plugin = 'plus-webp/pluswebp.php';
		}
		if ( $file === $this_plugin ) {
			$links[] = '<a href="' . admin_url( 'tools.php?page=pluswebp' ) . '">' . esc_html__( 'Bulk Generate', 'plus-webp' ) . '</a>';
		}
			return $links;
	}

	/** ==================================================
	 * Settings page
	 *
	 * @since 1.00
	 */
	public function plugin_menu() {
		add_management_page( 'Plus WebP', 'Plus WebP', 'manage_options', 'pluswebp', array( $this, 'plugin_options' ) );
	}

	/** ==================================================
	 * Add Css and Script
	 *
	 * @since 1.00
	 */
	public function load_custom_wp_admin_style() {
		if ( $this->is_my_plugin_screen() ) {
			wp_enqueue_style( 'jquery-responsiveTabs', plugin_dir_url( __DIR__ ) . 'css/responsive-tabs.css', array(), '1.4.0' );
			wp_enqueue_style( 'jquery-responsiveTabs-style', plugin_dir_url( __DIR__ ) . 'css/style.css', array(), '1.4.0' );
			wp_enqueue_script( 'jquery' );
			wp_enqueue_script( 'jquery-responsiveTabs', plugin_dir_url( __DIR__ ) . 'js/jquery.responsiveTabs.min.js', array(), '1.4.0', false );
			wp_enqueue_script( 'pluswebp-admin-js', plugin_dir_url( __DIR__ ) . 'js/jquery.pluswebp.admin.js', array( 'jquery' ), array(), '1.00', false );
		}
	}

	/** ==================================================
	 * For only admin style
	 *
	 * @since 1.00
	 */
	private function is_my_plugin_screen() {
		$screen = get_current_screen();
		if ( is_object( $screen ) && 'tools_page_pluswebp' === $screen->id ) {
			return true;
		} else {
			return false;
		}
	}

	/** ==================================================
	 * Settings page
	 *
	 * @since 1.00
	 */
	public function plugin_options() {

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( esc_html__( 'You do not have sufficient permissions to access this page.' ) );
		}

		$pluswebp_settings = get_option( 'pluswebp' );

		if ( isset( $_POST['Generatewebp'] ) && ! empty( $_POST['Generatewebp'] ) ) {
			if ( check_admin_referer( 'pwp_gnt', 'pluswebp_gnt' ) ) {
				if ( ! empty( $pluswebp_settings['types'] ) ) {
					$user   = wp_get_current_user();
					$to     = $user->user_email;
					$userid = $user->ID;
					if ( ! wp_next_scheduled( 'AllImagesRegenerateHook', array( $to ) ) ) {
						wp_schedule_single_event( time(), 'AllImagesRegenerateHook', array( $to ) );
						echo '<div class="notice notice-success is-dismissible"><ul><li>' . esc_html__( 'Background generation starts.', 'plus-webp' ) . '</li></ul></div>';
					} else {
						echo '<div class="notice notice-error is-dismissible"><ul><li>' . esc_html__( 'Currently, there is a process that is being bulk generated.', 'plus-webp' ) . '</li></ul></div>';
					}
				} else {
					echo '<div class="notice notice-error is-dismissible"><ul><li>' . esc_html__( 'The image type for creating WebP is not specified.', 'plus-webp' ) . '</li></ul></div>';
				}
			}
		}

		$this->options_updated();

		$scriptname = admin_url( 'tools.php?page=pluswebp' );

		?>
		<div class="wrap">
		<h2>Plus WebP</h2>

			<div id="pluswebp-admin-tabs">
				<ul>
					<li><a href="#pluswebp-admin-tabs-1"><?php esc_html_e( 'Bulk Generate', 'plus-webp' ); ?></a></li>
					<li><a href="#pluswebp-admin-tabs-2"><?php esc_html_e( 'Settings' ); ?></a></li>
					<li><a href="#pluswebp-admin-tabs-3"><?php esc_html_e( 'Donate to this plugin &#187;' ); ?></a></li>
				</ul>
				<div id="pluswebp-admin-tabs-1">
					<div class="wrap">
						<h2><?php esc_html_e( 'Bulk Generate', 'plus-webp' ); ?></h2>	

						<div style="margin: 5px; padding: 5px;">
						<p class="description">
						<?php esc_html_e( 'Press the following button to start WebP generation in the background. When finished, you will receive an email.', 'plus-webp' ); ?>
						</p>
						</div>

						<form method="post" action="<?php echo esc_url( $scriptname ); ?>">
						<?php wp_nonce_field( 'pwp_gnt', 'pluswebp_gnt' ); ?>
						<?php submit_button( __( 'Generate', 'plus-webp' ), 'primary', 'Generatewebp', true ); ?>
						</form>
					</div>
				</div>

				<div id="pluswebp-admin-tabs-2">
					<div class="wrap">
						<h2><?php esc_html_e( 'Settings' ); ?></h2>	

						<form method="post" action="<?php echo esc_url( $scriptname ) . '#pluswebp-admin-tabs-2'; ?>">
						<?php wp_nonce_field( 'pwp_set', 'pluswebp_set' ); ?>

						<div style="width: 100%; height: 100%; margin: 5px; padding: 5px; border: #CCC 2px solid;">
						<h3><?php esc_html_e( 'Quality', 'plus-webp' ); ?></h3>
						<div style="margin: 5px; padding: 5px;">
						<?php esc_html_e( 'low resolution', 'plus-webp' ); ?>
						<input type="range" style="vertical-align:middle;" name="quality" value="<?php echo esc_attr( $pluswebp_settings['quality'] ); ?>" min="0" max="100" step="1">
						<?php esc_html_e( 'high resolution', 'plus-webp' ); ?>
						<div style="margin: 5px; padding: 5px;">
						<p class="description">
						<?php esc_html_e( 'Specifies the quality of WebP. The higher the resolution, the larger the file size.', 'plus-webp' ); ?>
						</p>
						</div>
						</div>
						</div>

						<div style="width: 100%; height: 100%; margin: 5px; padding: 5px; border: #CCC 2px solid;">
						<h3><?php esc_html_e( 'Type' ); ?></h3>
						<?php
						$list_types = array(
							'image/jpeg',
							'image/png',
							'image/bmp',
							'image/gif',
						);
						foreach ( $list_types as $value ) {
							if ( in_array( $value, $pluswebp_settings['types'] ) ) {
								$check = 1;
							} else {
								$check = 0;
							}
							?>
							<div style="display: block;padding:5px 5px"><input type="checkbox" name="list_types[<?php echo esc_attr( $value ); ?>]" value="1" <?php checked( '1', $check ); ?> /><?php echo esc_html( $value ); ?></div>
							<?php
						}
						?>
						<div style="margin: 5px; padding: 5px;">
						<p class="description">
						<?php esc_html_e( 'Check the images you want to convert to WebP.', 'plus-webp' ); ?>
						</p>
						</div>
						</div>

						<div style="width: 100%; height: 100%; margin: 5px; padding: 5px; border: #CCC 2px solid;">
						<h3><?php esc_html_e( 'WebP replacement of images and contents', 'plus-webp' ); ?></h3>
						<div style="margin: 5px; padding: 5px;">
						<input type="checkbox" name="replace" value="1" <?php checked( '1', $pluswebp_settings['replace'] ); ?>><?php esc_html_e( 'Apply' ); ?>
						<div style="margin: 5px; padding: 5px;">
						<p class="description">
						<?php esc_html_e( 'Checking this setting will replace image files with WebP when adding new media, and delete the original image file. Also, when generating all images, the original image file ID will be overwritten as WebP and the original image file will be deleted. All URLs in the content are also replaced.', 'plus-webp' ); ?>
						</p>
						</div>
						</div>
						</div>

						<?php submit_button( __( 'Save Changes' ), 'large', 'Manageset', false ); ?>
						</form>
					</div>
				</div>

				<div id="pluswebp-admin-tabs-3">
					<div class="wrap">
					<?php $this->credit(); ?>
					</div>
				</div>

			</div>

		</div>
		<?php
	}

	/** ==================================================
	 * Credit
	 *
	 * @since 1.00
	 */
	private function credit() {

		$plugin_name    = null;
		$plugin_ver_num = null;
		$plugin_path    = plugin_dir_path( __DIR__ );
		$plugin_dir     = untrailingslashit( $plugin_path );
		$slugs          = explode( '/', $plugin_dir );
		$slug           = end( $slugs );
		$files          = scandir( $plugin_dir );
		foreach ( $files as $file ) {
			if ( '.' === $file || '..' === $file || is_dir( $plugin_path . $file ) ) {
				continue;
			} else {
				$exts = explode( '.', $file );
				$ext  = strtolower( end( $exts ) );
				if ( 'php' === $ext ) {
					$plugin_datas = get_file_data(
						$plugin_path . $file,
						array(
							'name'    => 'Plugin Name',
							'version' => 'Version',
						)
					);
					if ( array_key_exists( 'name', $plugin_datas ) && ! empty( $plugin_datas['name'] ) && array_key_exists( 'version', $plugin_datas ) && ! empty( $plugin_datas['version'] ) ) {
						$plugin_name    = $plugin_datas['name'];
						$plugin_ver_num = $plugin_datas['version'];
						break;
					}
				}
			}
		}
		$plugin_version = __( 'Version:' ) . ' ' . $plugin_ver_num;
		/* translators: FAQ Link & Slug */
		$faq       = sprintf( esc_html__( 'https://wordpress.org/plugins/%s/faq', '%s' ), $slug );
		$support   = 'https://wordpress.org/support/plugin/' . $slug;
		$review    = 'https://wordpress.org/support/view/plugin-reviews/' . $slug;
		$translate = 'https://translate.wordpress.org/projects/wp-plugins/' . $slug;
		$facebook  = 'https://www.facebook.com/katsushikawamori/';
		$twitter   = 'https://twitter.com/dodesyo312';
		$youtube   = 'https://www.youtube.com/channel/UC5zTLeyROkvZm86OgNRcb_w';
		$donate    = sprintf( esc_html__( 'https://shop.riverforest-wp.info/donate/', '%s' ), $slug );

		?>
		<span style="font-weight: bold;">
		<div>
		<?php echo esc_html( $plugin_version ); ?> | 
		<a style="text-decoration: none;" href="<?php echo esc_url( $faq ); ?>" target="_blank"><?php esc_html_e( 'FAQ' ); ?></a> | <a style="text-decoration: none;" href="<?php echo esc_url( $support ); ?>" target="_blank"><?php esc_html_e( 'Support Forums' ); ?></a> | <a style="text-decoration: none;" href="<?php echo esc_url( $review ); ?>" target="_blank"><?php sprintf( esc_html_e( 'Reviews', '%s' ), $slug ); ?></a>
		</div>
		<div>
		<a style="text-decoration: none;" href="<?php echo esc_url( $translate ); ?>" target="_blank">
		<?php
		/* translators: Plugin translation link */
		echo sprintf( esc_html__( 'Translations for %s' ), esc_html( $plugin_name ) );
		?>
		</a> | <a style="text-decoration: none;" href="<?php echo esc_url( $facebook ); ?>" target="_blank"><span class="dashicons dashicons-facebook"></span></a> | <a style="text-decoration: none;" href="<?php echo esc_url( $twitter ); ?>" target="_blank"><span class="dashicons dashicons-twitter"></span></a> | <a style="text-decoration: none;" href="<?php echo esc_url( $youtube ); ?>" target="_blank"><span class="dashicons dashicons-video-alt3"></span></a>
		</div>
		</span>

		<div style="width: 250px; height: 180px; margin: 5px; padding: 5px; border: #CCC 2px solid;">
		<h3><?php sprintf( esc_html_e( 'Please make a donation if you like my work or would like to further the development of this plugin.', '%s' ), $slug ); ?></h3>
		<div style="text-align: right; margin: 5px; padding: 5px;"><span style="padding: 3px; color: #ffffff; background-color: #008000">Plugin Author</span> <span style="font-weight: bold;">Katsushi Kawamori</span></div>
		<button type="button" style="margin: 5px; padding: 5px;" onclick="window.open('<?php echo esc_url( $donate ); ?>')"><?php esc_html_e( 'Donate to this plugin &#187;' ); ?></button>
		</div>

		<?php

	}

	/** ==================================================
	 * Regenerate All Images
	 *
	 * @param string $to  mail address.
	 * @since 1.00
	 */
	public function allimages_regenerate( $to ) {

		$pluswebp_settings = get_option( 'pluswebp' );

		global $wpdb;

		$mime_types = null;
		foreach ( $pluswebp_settings['types'] as $value ) {
			$mime_types .= "'" . $value . "'" . ',';
		}
		$mime_types = rtrim( $mime_types, ',' );

		$wpdb->plus_webp_mime_type = 'AND post_mime_type IN (' . $mime_types . ')';

		$post_ids = $wpdb->get_col(
			"
				SELECT	ID
				FROM	$wpdb->posts
				WHERE	post_type = 'attachment'
						$wpdb->plus_webp_mime_type
						AND post_status = 'inherit'
			"
		);

		if ( ! empty( $post_ids ) ) {
			delete_option( 'pluswebp_generate' );
			include_once ABSPATH . 'wp-admin/includes/image.php';
			/* Generate WebP */
			foreach ( $post_ids as $attach_id ) {
				$metadata = wp_get_attachment_metadata( $attach_id );
				do_action( 'wp_generate_attachment_metadata', $metadata, $attach_id );
			}
			/* Mail send */
			do_action( 'pluswebp_mail_send', $to );
		} else {
			?>
			<div class="notice notice-error is-dismissible"><ul><li><?php esc_html_e( 'There are no images to convert. Generation stopped.', 'plus-webp' ); ?></li></ul></div>';
			<?php
		}

	}

	/** ==================================================
	 * Update wp_options table.
	 *
	 * @since 1.02
	 */
	private function options_updated() {

		if ( isset( $_POST['Manageset'] ) && ! empty( $_POST['Manageset'] ) ) {
			if ( check_admin_referer( 'pwp_set', 'pluswebp_set' ) ) {
				$pluswebp_settings = get_option( 'pluswebp' );
				$list_types = array();
				if ( isset( $_POST['list_types'] ) && ! empty( $_POST['list_types'] ) ) {
					$tmps = filter_var(
						wp_unslash( $_POST['list_types'] ),
						FILTER_CALLBACK,
						[
							'options' => function( $value ) {
								return sanitize_text_field( $value );
							},
						]
					);
					foreach ( $tmps as $key => $value ) {
						$list_types[] = $key;
					}
					$pluswebp_settings['types'] = $list_types;
				} else {
					$pluswebp_settings['types'] = $list_types;
				}
				if ( isset( $_POST['replace'] ) && ! empty( $_POST['replace'] ) ) {
					$pluswebp_settings['replace'] = true;
				} else {
					$pluswebp_settings['replace'] = false;
				}
				if ( isset( $_POST['quality'] ) ) {
					$pluswebp_settings['quality'] = intval( $_POST['quality'] );
				}
				update_option( 'pluswebp', $pluswebp_settings );
				echo '<div class="notice notice-success is-dismissible"><ul><li>' . esc_html__( 'Settings' ) . ' --> ' . esc_html__( 'Settings saved.' ) . '</li></ul></div>';
			}
		}

	}

	/** ==================================================
	 * Generate notice
	 *
	 * @since 1.09
	 */
	public function generate_notice() {

		if ( get_option( 'pluswebp_generate_mail' ) ) {
			$pluswebp_mail_send = get_option( 'pluswebp_generate_mail' );
			if ( 0 < $pluswebp_mail_send['count'] ) {
				?>
				<div class="notice notice-success is-dismissible"><ul><li><strong>Plus WebP</strong>
				<?php
				/* translators: %1$s Date Time, %2$d File Count */
				echo wp_kses_post( sprintf( __( ' : %1$s : %2$d WebP files and their thumbnails have been generated. Details have been sent by e-mail.', 'plus-webp' ), $pluswebp_mail_send['datetime'], $pluswebp_mail_send['count'] ) );
				?>
				</li></ul></div>
				<?php
			} else {
				?>
				<div class="notice notice-error is-dismissible"><ul><li><strong>Plus WebP</strong>
				<?php
				/* translators: %1$s Date Time %2$s error message */
				echo wp_kses_post( sprintf( __( ' : %1$s : %2$s', 'plus-webp' ), $pluswebp_mail_send['datetime'], __( 'WebP was not generated. A file with the same name already exists.', 'plus-webp' ) ) );
				?>
				</li></ul></div>
				<?php
			}
			delete_option( 'pluswebp_generate_mail' );
		}

	}

}


