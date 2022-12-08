<?php	

	/*--- Регистрируем меню ---*/
	register_nav_menus(array(		
		'header_menu' => 'Меню в header'
	));	

	/*--- изменяем аттрибут id У тега li (удаляем созданные автоматически Wordpress'ом) ---*/
	add_filter( 'nav_menu_item_id', 'mw_remove_id_class_item', 10, 4);
	function mw_remove_id_class_item($menu_id, $item, $args, $depth) {
		$menu_id = '';
		return $menu_id;
	}

	/*--- изменяем аттрибут class у тега li (удаляем созданные автоматически Wordpress'ом) ---*/
	add_filter('nav_menu_css_class', 'mw_remove_all_class_item', 10, 4);
	function mw_remove_all_class_item($classes, $item, $args, $depth) {
		$classes = [];
		$classes = ['menu__item'];
		return $classes;
	}
?>