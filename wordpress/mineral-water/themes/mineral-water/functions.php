<?php
	
	include dirname(__FILE__) . '/funcs/menu.php';
	include dirname(__FILE__) . '/funcs/slider.php';
	include dirname(__FILE__) . '/funcs/advantages.php';
	
	/*--- Включаем поддержку миниатюр ---*/
	add_theme_support('post-thumbnails');

	/*--- Загружаем скрипты и стили ---*/
	add_action('wp_enqueue_scripts', 'load_style_script');

	function load_style_script() {
		// wp_enqueue_script('mw_jquery', get_template_directory_uri().'/js/jquery-3.6.1.min.js#asyncload');
		wp_enqueue_style('slick-css', get_template_directory_uri().'/js/slick/slick.css');
		wp_enqueue_style('slick-theme-css', get_template_directory_uri().'/js/slick/slick-theme.css');

		wp_enqueue_script('mw_slick', get_template_directory_uri().'/js/slick/slick.min.js', array('jquery'), null, 'in_footer');
		wp_enqueue_script('mw_my-slick', get_template_directory_uri().'/js/my-slick.min.js', array(), null, 'in_footer');
		wp_enqueue_script('mw_hamburger', get_template_directory_uri().'/js/hamburger.min.js', array(), null, 'in_footer');
		wp_enqueue_script('mw_popup', get_template_directory_uri().'/js/popup.min.js', array(), null, 'in_footer');
		wp_enqueue_style('style', get_template_directory_uri().'/css/style.min.css');
	}

	/*-- Добавить async тегу script (для этого в URL нужно указать метку #asyncload) --*/
	/*function add_async_forscript($url) {
		if (strpos($url, '#asyncload')===false)
			return $url;
		else if (is_admin())
			return str_replace('#asyncload', '', $url);
		else
			return str_replace('#asyncload', '', $url)."' async='async"; 
	}
	add_filter('clean_url', 'add_async_forscript', 11, 1);*/

	/*--- разрешаем использование форматов webp, svg для сохранения в библиотеку (по умолчанию нельзя сохранить) ---*/
	add_filter('upload_mimes', 'mw_allow_types');
	function mw_allow_types($mimes) {
		
		$mimes['webp'] = 'image/webp';
		$mimes['svg'] = 'image/svg+xml'; // 
		
		return $mimes;
	}

	/*--- отключаем создание миниатюр файлов для указанных размеров ---*/
	add_filter('intermediate_image_sizes', 'mw_delete_intermediate_image_sizes');
	function mw_delete_intermediate_image_sizes($sizes) {
		// размеры которые нужно удалить
		return array_diff( $sizes, [
			'medium_large',
			'1536x1536',
			'2048x2048',
		] );
	}

	// удаляем type у тега script и style, а также закрывающий слеш '/'
	add_action('template_redirect', 'mw_delete_type'); //Срабатывает перед тем, как WordPress определит какой файл шаблона использовать для вывода контента.
	function mw_delete_type() { 
	    ob_start(function( $buffer) {
	        $buffer = str_replace(
	        	array(
	        		'type="text/javascript" ', 
	        		"type='text/javascript' ", 
	        		'type="text/javascript"', 
	        		"type='text/javascript'"
	        	), '', $buffer); // удаляем type для JS
	        $buffer = str_replace(
	        	array(
	        		'type="text/css" ', 
	        		"type='text/css' ", 
	        		'type="text/css"', 
	        		"type='text/css'"
	        	), '', $buffer); // удаляем type для CSS

	        $buffer = str_replace(
	        	array(
	        		' />', 
	        		" />"
	        	), '>', $buffer); // удаляем закрывающий слеш

	        return $buffer;
	    });
	}	

	// Отключаем Emojis в WordPress (смайлики) 
	/**
	 * Disable the emoji's
	 */
	function disable_emojis() {
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
		remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
		remove_action( 'wp_print_styles', 'print_emoji_styles' );
		remove_action( 'admin_print_styles', 'print_emoji_styles' );    
		remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
		remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );  
		remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
		add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
		add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
	}
	add_action( 'init', 'disable_emojis' );

	/**
	 * Filter function used to remove the tinymce emoji plugin.
	 * 
	 * @param    array  $plugins  
	 * @return   array             Difference betwen the two arrays
	 */
	function disable_emojis_tinymce( $plugins ) {
		if ( is_array( $plugins ) ) {
			return array_diff( $plugins, array( 'wpemoji' ) );
		}

		return array();
	}

	/**
	 * Remove emoji CDN hostname from DNS prefetching hints.
	 *
	 * @param  array  $urls          URLs to print for resource hints.
	 * @param  string $relation_type The relation type the URLs are printed for.
	 * @return array                 Difference betwen the two arrays.
	 */
	function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {

		if ( 'dns-prefetch' == $relation_type ) {

			// Strip out any URLs referencing the WordPress.org emoji location
			$emoji_svg_url_bit = 'https://s.w.org/images/core/emoji/';
			foreach ( $urls as $key => $url ) {
				if ( strpos( $url, $emoji_svg_url_bit ) !== false ) {
					unset( $urls[$key] );
				}
			}

		}

		return $urls;
	}

	
?>