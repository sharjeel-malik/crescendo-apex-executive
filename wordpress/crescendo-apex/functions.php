<?php
/** Crescendo Apex editable block theme. */
if (!defined('ABSPATH')) { exit; }
function crescendo_urls($value) {
    return str_replace(['{{theme}}','{{home}}'], [get_template_directory_uri(), untrailingslashit(home_url())], $value);
}
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('editor-styles');
    add_editor_style(['assets/site.css','assets/editor.css']);
});
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('crescendo-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap', [], null);
    wp_enqueue_style('crescendo-site', get_template_directory_uri().'/assets/site.css', [], '1.0.0');
    wp_enqueue_style('crescendo-editor', get_template_directory_uri().'/assets/editor.css', [], '1.0.0');
    wp_enqueue_script('crescendo-site', get_template_directory_uri().'/assets/site.js', [], '1.0.0', true);
});
add_action('init', function () {
    wp_register_script('crescendo-blocks', get_template_directory_uri().'/assets/blocks.js', ['wp-blocks','wp-element','wp-block-editor','wp-components'], '1.0.0', true);
    wp_localize_script('crescendo-blocks', 'crescendoTheme', ['theme'=>get_template_directory_uri(),'home'=>untrailingslashit(home_url())]);
    register_block_type('crescendo/element', [
        'api_version'=>3,'editor_script'=>'crescendo-blocks',
        'attributes'=>['tag'=>['type'=>'string','default'=>'div'],'props'=>['type'=>'object','default'=>new stdClass()],'html'=>['type'=>'string']],
        'render_callback'=>function ($a,$content) {
            $tag=$a['tag']??'div';
            if (!in_array($tag, ['div','section','header','footer','main','nav','aside','article','h1','h2','h3','h4','h5','h6','p','span','a','img','ul','ol','li','strong','em','small','br','hr','button','details','summary'],true)) $tag='div';
            $attrs='';
            foreach (($a['props']??[]) as $k=>$v) {
                if (!preg_match('/^(class|id|href|src|alt|title|target|rel|width|height|loading|style|type|hidden|aria-[a-z-]+|role)$/',$k)) continue;
                $v=crescendo_urls((string)$v);
                if (in_array($k,['href','src'],true)) $v=esc_url($v);
                if ($k==='style') $v=safecss_filter_attr($v);
                $attrs.=' '.esc_attr($k).'="'.esc_attr($v).'"';
            }
            $inside=isset($a['html']) ? wp_kses_post(crescendo_urls($a['html'])) : $content;
            return '<'.$tag.$attrs.'>'.($tag==='img'||$tag==='br'||$tag==='hr'?'':$inside.'</'.$tag.'>');
        }
    ]);
    register_block_type('crescendo/art', ['api_version'=>3,'editor_script'=>'crescendo-blocks','attributes'=>['html'=>['type'=>'string']], 'render_callback'=>function($a) {
        // Original decorative SVGs only; restrict elements and attributes on output.
        $allowed=[];
        foreach (['svg','path','circle','rect','line','polyline','polygon','g','defs','linearGradient','stop'] as $tag) {
            $allowed[$tag]=array_fill_keys(['xmlns','width','height','viewbox','fill','stroke','stroke-width','stroke-linecap','stroke-linejoin','d','cx','cy','r','x','y','x1','x2','y1','y2','points','class','style','opacity','fill-opacity','stroke-opacity','transform','id','offset','stop-color','stop-opacity','aria-hidden'],true);
        }
        return wp_kses($a['html']??'', $allowed);
    }]);
    register_block_type('crescendo/form', ['api_version'=>3,'editor_script'=>'crescendo-blocks','attributes'=>['label'=>['type'=>'string'],'shortcode'=>['type'=>'string']], 'render_callback'=>function($a) {
        $code=$a['shortcode']??'';
        if ($code && preg_match('/^\[contact-form-7\s/', $code) && shortcode_exists('contact-form-7')) return '<div class="crescendo-form">'.do_shortcode($code).'</div>';
        return '<div class="crescendo-form"><p>'.esc_html($a['label']??'Contact').'</p><p>Please email <a href="mailto:shomari@crescendoapex.co">shomari@crescendoapex.co</a>.</p>'.(current_user_can('edit_pages')?'<p>Editor: add a Contact Form 7 shortcode in this block’s settings to enable this form.</p>':'').'</div>';
    }]);
});
// Explicit, nonce-protected setup: activation alone never changes existing pages or homepage.
add_action('admin_notices', function () {
    if (!current_user_can('manage_options') || get_option('crescendo_imported')) return;
    echo '<div class="notice notice-info"><p>Crescendo Apex: import the original pages, then edit them under Pages. Existing pages with matching slugs are preserved.</p><form method="post" action="'.esc_url(admin_url('admin-post.php')).'">';
    wp_nonce_field('crescendo_import');
    echo '<input type="hidden" name="action" value="crescendo_import"><p><label><input type="checkbox" name="homepage" value="1"> Set the imported Home page as the homepage</label></p><p><button class="button button-primary">Import Crescendo Apex pages</button></p></form></div>';
});
add_action('admin_post_crescendo_import', function () {
    if (!current_user_can('manage_options')) wp_die('Not allowed');
    check_admin_referer('crescendo_import');
    $titles=['home'=>'Home','about'=>'About Shomari','consulting'=>'Consulting','speaking'=>'Speaking','nonprofit-crescendo'=>'Nonprofit Crescendo','contact'=>'Contact','privacy'=>'Privacy Policy'];
    $home=0;
    foreach ($titles as $slug=>$title) {
        $existing=get_page_by_path($slug);
        if ($existing) { if ($slug==='home') $home=$existing->ID; continue; }
        $html=file_get_contents(get_template_directory().'/content/'.$slug.'.html');
        $id=wp_insert_post(wp_slash(['post_type'=>'page','post_status'=>'publish','post_name'=>$slug,'post_title'=>$title,'post_content'=>crescendo_urls($html)]),true);
        if (is_wp_error($id)) wp_die(esc_html($id->get_error_message()));
        if ($slug==='home') $home=$id;
    }
    if (!empty($_POST['homepage']) && $home) { update_option('show_on_front','page'); update_option('page_on_front',$home); }
    update_option('crescendo_imported',1);
    wp_safe_redirect(admin_url('edit.php?post_type=page')); exit;
});
