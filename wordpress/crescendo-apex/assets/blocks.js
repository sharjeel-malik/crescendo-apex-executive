(function (wp) {
    const el = wp.element.createElement;
    const { registerBlockType } = wp.blocks;
    const { useBlockProps, useInnerBlocksProps, InnerBlocks, RichText, InspectorControls, MediaUpload, MediaUploadCheck } = wp.blockEditor;
    const { PanelBody, TextControl, Button } = wp.components;
    const resolve = value => typeof value === 'string' ? value.replaceAll('{{theme}}', crescendoTheme.theme).replaceAll('{{home}}', crescendoTheme.home) : value;
    function reactProps(props) {
        const out = {};
        Object.entries(props || {}).forEach(([key, value]) => {
            if (key === 'class') out.className = value;
            else if (key === 'style') {
                out.style = {};
                value.split(';').forEach(rule => {
                    const index = rule.indexOf(':');
                    if (index > 0) out.style[rule.slice(0,index).trim().replace(/-([a-z])/g, (_,c)=>c.toUpperCase())] = rule.slice(index+1).trim();
                });
            } else out[key] = resolve(value);
        });
        // Hidden mobile navigation is edited through List View; frontend behavior is separate.
        return out;
    }
    registerBlockType('crescendo/element', {
        apiVersion: 3, title: 'Crescendo element', icon: 'layout', category: 'design',
        attributes: {tag:{type:'string',default:'div'}, props:{type:'object',default:{}}, html:{type:'string'}},
        supports: {html:false, reusable:true},
        edit: function ({attributes:a,setAttributes}) {
            const props = reactProps(a.props);
            const blockProps = useBlockProps(props);
            const innerProps = useInnerBlocksProps(blockProps, {renderAppender: InnerBlocks.ButtonBlockAppender});
            const setProp = (name,value) => setAttributes({props:{...a.props,[name]:value}});
            const fields = [el(TextControl,{key:'classes', label:'Design classes',value:a.props.class||'',onChange:v=>setProp('class',v)}),el(TextControl,{key:'anchor',label:'Anchor / ID',value:a.props.id||'',onChange:v=>setProp('id',v)})];
            if(a.tag==='a') fields.unshift(el(TextControl,{key:'href',label:'Link URL',value:resolve(a.props.href)||'',onChange:v=>setProp('href',v)}));
            if(a.tag==='img') fields.unshift(
                el(TextControl,{key:'alt',label:'Alternative text',value:a.props.alt||'',onChange:v=>setProp('alt',v)}),
                el(MediaUploadCheck,{key:'media'},el(MediaUpload,{onSelect:media=>setAttributes({props:{...a.props,src:media.url,alt:media.alt||''}}),allowedTypes:['image'],render:({open})=>el(Button,{onClick:open,variant:'secondary'},'Replace image')}))
            );
            const inspector=el(InspectorControls,{},el(PanelBody,{title:'Element settings',initialOpen:true},...fields));
            let content;
            if(a.tag==='img'||a.tag==='br'||a.tag==='hr') content=el(a.tag,blockProps);
            else if(a.html!==undefined) content=el(RichText,{...blockProps,tagName:a.tag,value:resolve(a.html),onChange:html=>setAttributes({html}),allowedFormats:['core/bold','core/italic','core/link'],onClick:a.tag==='a'?e=>e.preventDefault():undefined});
            else content=el(a.tag,{...innerProps,onClick:a.tag==='a'?e=>e.preventDefault():undefined});
            return el(wp.element.Fragment,{},inspector,content);
        },
        save: () => el(InnerBlocks.Content)
    });
    registerBlockType('crescendo/art', {
        apiVersion:3,title:'Crescendo illustration',icon:'art',category:'design',attributes:{html:{type:'string'}},supports:{html:false,inserter:false},
        edit:({attributes})=>el('span',{...useBlockProps({className:'crescendo-art'}),dangerouslySetInnerHTML:{__html:attributes.html}}),save:()=>null
    });
    registerBlockType('crescendo/form', {
        apiVersion:3,title:'Crescendo contact form',icon:'email',category:'widgets',attributes:{label:{type:'string'},shortcode:{type:'string'}},
        edit:({attributes,setAttributes})=>el('div',useBlockProps({className:'crescendo-form'}),el('strong',{},attributes.label||'Inquiry form'),el('p',{},'Install Contact Form 7, create the form using the supplied template, and paste its shortcode here.'),el(TextControl,{label:'Contact Form 7 shortcode',value:attributes.shortcode||'',onChange:shortcode=>setAttributes({shortcode})})),save:()=>null
    });
})(window.wp);
