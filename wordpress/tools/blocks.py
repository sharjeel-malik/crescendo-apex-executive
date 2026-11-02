from html.parser import HTMLParser
from html import escape
from pathlib import Path
import json,re,shutil
root=Path('wordpress/crescendo-apex')
class Parser(HTMLParser):
 def __init__(self): super().__init__(convert_charrefs=True);self.tree=[];self.stack=[self.tree]
 def handle_starttag(self,tag,attrs):
  node={'tag':tag,'props':dict(attrs),'children':[]};self.stack[-1].append(node)
  if tag not in ['img','input','br','hr','meta','link','source','wbr']: self.stack.append(node['children'])
 def handle_startendtag(self,tag,attrs): self.handle_starttag(tag,attrs); self.handle_endtag(tag)
 def handle_endtag(self,tag):
  if tag not in ['img','input','br','hr','meta','link','source','wbr'] and len(self.stack)>1:self.stack.pop()
 def handle_data(self,text): self.stack[-1].append(text)
def markup(n):
 if isinstance(n,str):return escape(n)
 attrs=''.join(' '+k+'="'+escape(v or '',quote=True)+'"' for k,v in n['props'].items())
 return '<'+n['tag']+attrs+'>'+''.join(map(markup,n['children']))+'</'+n['tag']+'>'
def block(name,attrs,inside=''):
 a=json.dumps(attrs,ensure_ascii=False).replace('--','\\u002d\\u002d').replace('<','\\u003c').replace('>','\\u003e').replace('&','\\u0026')
 return '<!-- wp:crescendo/'+name+' '+a+' -->'+inside+'<!-- /wp:crescendo/'+name+' -->'
def convert(n):
 if isinstance(n,str):return block('element',{'tag':'span','html':escape(n)}) if n.strip() else ''
 tag=n['tag'];props=n['props'];children=n['children']
 if tag=='link':return ''
 if tag=='form':return block('form',{'label':props.get('aria-label','Inquiry form'),'shortcode':''})
 if tag=='svg':return block('art',{'html':markup(n)})
 if tag=='header':
  # Make the existing mobile toggle open an editable copy of desktop navigation.
  nav=next((x for x in walk(n) if isinstance(x,dict) and x['tag']=='nav'),None)
  if nav:
   import copy
   mobile=copy.deepcopy(nav);mobile['props']={'id':'mobile-menu','class':'crescendo-mobile-nav','hidden':''}
   children.append(mobile)
 for key,val in list(props.items()):
  if isinstance(val,str):
   val=val.replace('/images/','{{theme}}/assets/images/').replace('/assets/aistudio/','{{theme}}/assets/aistudio/')
   if key=='href' and val.startswith('/') and not val.startswith('//'):val='{{home}}'+val
   props[key]=val
 attrs={'tag':tag,'props':props}
 if children and all(isinstance(x,str) for x in children): attrs['html']=''.join(escape(x) for x in children);inside=''
 else:inside=''.join(map(convert,children))
 return block('element',attrs,inside)
def walk(n):
 yield n
 if isinstance(n,dict):
  for c in n['children']:yield from walk(c)
for p in root.joinpath('content').glob('*.html'):
 parser=Parser();parser.feed(p.read_text());out=''.join(map(convert,parser.tree));p.write_text(out)
for part in ['header','footer']:shutil.move(str(root/'content'/f'{part}.html'),str(root/'parts'/f'{part}.html'))
shutil.copytree('public/images',root/'assets/images',dirs_exist_ok=True)
shutil.copytree('public/assets/aistudio',root/'assets/aistudio',dirs_exist_ok=True)
