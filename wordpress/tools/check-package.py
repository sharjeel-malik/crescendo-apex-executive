"""Check exported WordPress block data and theme asset references."""
from pathlib import Path
import json,re
root=Path(__file__).resolve().parents[1]/'crescendo-apex'
files=list((root/'content').glob('*.html'))+list((root/'parts').glob('*.html'))
assert len(files)==9
forms=0
for path in files:
 stack=[]
 for m in re.finditer(r'<!-- (/?)(wp:crescendo/[a-z]+)(?: (\{.*?\}))? -->',path.read_text()):
  closing,name,data=m.groups()
  if closing:assert stack.pop()==name,(path,name)
  else:
   stack.append(name);attrs=json.loads(data)
   forms+=name=='wp:crescendo/form'
   for value in attrs.get('props',{}).values():
    if isinstance(value,str) and value.startswith('{{theme}}/'):
     assert (root/value.replace('{{theme}}/','')).exists(),value
   if name=='wp:crescendo/element':assert attrs['tag'] not in ['script','input','form']
 assert not stack,path
assert forms==4,forms
consulting=(root/'content/consulting.html').read_text()
for i in range(5):assert f'faq-answer-{i}' in consulting
for filename in ['style.css','theme.json','functions.php','templates/index.html','assets/site.css','assets/blocks.js']:
 assert (root/filename).is_file()
json.loads((root/'theme.json').read_text())
assert (root/'assets/site.css').stat().st_size>20000
print('Validated 7 page exports, 2 template parts, 4 form slots, all FAQ panels, block nesting, JSON and bundled image references.')
