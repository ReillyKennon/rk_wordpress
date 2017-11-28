<?php
   /*
   Plugin Name: Snipcart
   Plugin URI: https://snipcart.com
   Description: Create your products directly in WordPress
   Version: 1.0
   Author: Geeks at Snipcart
   Author URI: https://snipcart.com
   License: MIT
   */

    function snipcart_add_json() {
        register_rest_field( 'post', 'price', array(
            'get_callback' => function( $post ) {
                return get_field('price');
            }
        ) );

        register_rest_field( 'post', 'description', array(
            'get_callback' => function( $post ) {
                return get_field('description');
            }
        ) );

        register_rest_field( 'post', 'image', array(
            'get_callback' => function( $post ) {
                return get_field('image');
            }
        ) );
    }    

    add_action( 'rest_api_init', 'snipcart_add_json' );
?>