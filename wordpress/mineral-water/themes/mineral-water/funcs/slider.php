<?php

	/**
	* SLIDER
		Создаем новый тип записи slider. В "админке" появляется новый пункт Слайдер с возможностью добавлять слайды. Сам слайд состоит из названия и 4-х произвольных полей (mobile), и 4-х произвольных полей (desktop) , в которые загружены 4 картинки согласно макета, которые потом и выводятся на странице. Картинки сначала загружаются в библиотеку, а уже потом прописываются в произвольных полях каждого слайда.
	**/

	add_action('init', 'slide_index');

	function slide_index() {
		// $post_type, $args = array
		register_post_type('slider', array(
			'public' => true,
			'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
			'menu_position' => 8,
			'menu_icon' => 'dashicons-images-alt2',
			'labels' => array(
				'name' => 'Слайдер',
				'all_items' => 'Все слайды',
				'add_new' => 'Новый слайд',
				'add_new_item' => 'Добавить слайд',
				'search_items' => 'Поиск слайдов'
			)
		));
	}
?>