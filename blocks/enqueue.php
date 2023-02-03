<?php

function recipe_enqueue_block_editor_assets  () {
    wp_register_script ('recipe_blocks_bundle',
    plugins_url('/blocks/dist/bundle.js', RECIPE_PLUGIN_URL),
    ['wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor', 'wp-api'], filemtime(plugin_dir_path(RECIPE_PLUGIN_URL).'/blocks/dist/bundle.js')
);
wp_enqueue_script('recipe_blocks_bundle');
}