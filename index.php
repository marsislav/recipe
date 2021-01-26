<?php
/*
* Plugin Name: Recipe 
* Description: A simple Wordpress plugin that allows user to create recipess and rate those recipes
* Version: 1.0
* Author: Marsislav    
* Author URI: https://marsislav.net
* Text domain : recipe
*/
if (!function_exists('add_action')) {
    echo "I need Wordpress to run properly";
    exit;
}


//Setup

//Includes
include('includes/activate.php');
include('includes/init.php');
include('process/save-post.php');
//Hooks
register_activation_hook( __FILE__ , 'r_activate_plugin' );
add_action('init', 'recipe_init');
add_action('save_post_recipe', 'r_save_post_admin',10, 3/*number of arguments, defdult is 1*/);
//Shortcodes