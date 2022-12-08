<?php

	/**
	* ADVANTAGE
		Создаем новый тип записи advantage. В "админке" появляется новый пункт Преимущества с возможностью добавлять преимущества.
	**/
	

	add_action('init', 'advantage_index');

	function advantage_index() {
		// $post_type, $args = array
		register_post_type('advantage', array(
			'public' => true,
			'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
			'menu_position' => 20,
			'menu_icon' => 'dashicons-thumbs-up',
			'labels' => array(
				'name' => 'Преимущества',
				'all_items' => 'Все преимущества',
				'add_new' => 'Новое преимущество',
				'add_new_item' => 'Добавить преимущество',
				'search_items' => 'Поиск преимуществ'
			)
		));
	}
?>