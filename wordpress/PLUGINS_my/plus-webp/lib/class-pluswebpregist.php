<?php
/**
 * Plus WebP
 *
 * @package    PlusWebp
 * @subpackage PlusWebpRegist registered in the database
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

$pluswebp = new PlusWebpRegist();

/** ==================================================
 * Class registered in the database
 *
 * @since 1.00
 */
class PlusWebpRegist {

	/** ==================================================
	 * Construct
	 *
	 * @since 1.00
	 */
	public function __construct() {

		add_action( 'init', array( $this, 'register_settings' ) );

	}

	/** ==================================================
	 * Settings register
	 *
	 * @since 1.00
	 */
	public function register_settings() {

		if ( get_option( 'pluswebp' ) ) {
			$pluswebp_settings = get_option( 'pluswebp' );
			/* 'types' from ver 1.08 */
			if ( ! array_key_exists( 'types', $pluswebp_settings ) ) {
				$pluswebp_settings['types'] = array(
					'image/jpeg',
					'image/png',
					'image/bmp',
					'image/gif',
				);
				update_option( 'pluswebp', $pluswebp_settings );
			}
		} else {
			$pswp_tbl = array(
				'quality' => 80,
				'replace' => false,
				'types'   => array(
					'image/jpeg',
					'image/png',
					'image/bmp',
					'image/gif',
				),
			);
			update_option( 'pluswebp', $pswp_tbl );
		}

	}

}

