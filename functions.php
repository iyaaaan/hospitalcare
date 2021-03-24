<?php 

function load_stylesheets() {
	//jquery-ui
	wp_register_style('jquery-ui', get_template_directory_uri() . '/css/jquery-ui.min.css', array(), false, 'all');
	wp_enqueue_style('jquery-ui');
	
	//font-awesome
	wp_register_style('font-awesome', get_template_directory_uri() . '/css/all.min.css', array(), false, 'all');
	wp_enqueue_style('font-awesome');
	
	//owl-carousel
	wp_register_style('owl-carousel', get_template_directory_uri() . '/css/owl-carousel.min.css', array(), false, 'all');
	wp_enqueue_style('owl-carousel');
	
	wp_register_style('owl-theme', get_template_directory_uri() . '/css/owl-theme.min.css', array(), false, 'all');
	wp_enqueue_style('owl-theme');
	
	//style
	wp_register_style('style', get_template_directory_uri() . '/style.css', array(), false, 'all');
	wp_enqueue_style('style');
}

add_action('wp_enqueue_scripts', 'load_stylesheets');



function include_jquery(){
	wp_deregister_script('jquery');
	
	//jquery
	wp_enqueue_script('jquery', get_template_directory_uri() . '/js/jquery.min.js', '', 1, true);
	add_action('wp_enqueue_scripts', 'jquery');
	
	wp_enqueue_script('jquery-lazy', get_template_directory_uri() . '/js/jquery-lazy.min.js', '', 1, true);
	add_action('wp_enqueue_scripts', 'jquery-lazy');
	
	wp_enqueue_script('jquery-ui', get_template_directory_uri() . '/js/jquery-ui.min.js', '', 1, true);
	add_action('wp_enqueue_scripts', 'jquery-ui');
	
	//owl-carousel
	wp_enqueue_script('owl-carousel', get_template_directory_uri() . '/js/owl-carousel.min.js', '', 1, true);
	add_action('wp_enqueue_scripts', 'owl-carousel');
	
	//script
	wp_enqueue_script('script', get_template_directory_uri() . '/js/main.js', '', 1, true);
	add_action('wp_enqueue_scripts', 'script');
}

add_action('wp_enqueue_scripts', 'include_jquery');



function load_js() {
	wp_register_script('customjs', get_template_directory_uri() . '/js/scripts.js', '', 1, true);
	wp_enqueue_script('customjs');
}

add_action('wp_enqueue_scripts', 'load_js');


add_theme_support('menus');

add_theme_support('post-thumbnails');

add_filter('acf/settings/remove_wp_meta_box', '__return_false');


register_nav_menus(

	array(
		'top-menu' => __('Top Menu', 'theme'),
		'footer-menu' => __('Footer Menu', 'theme')
		
	)
); 

add_image_size('smallest', 300, 300, true);
add_image_size('largest', 800, 800, true);



?>
