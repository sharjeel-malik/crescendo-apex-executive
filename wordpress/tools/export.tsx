import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {MemoryRouter} from 'react-router-dom';
import {writeFileSync,readFileSync} from 'node:fs';
import {Home} from '../../src/pages/Home';
import {About} from '../../src/pages/About';
import {Consulting} from '../../src/pages/Consulting';
import {Speaking} from '../../src/pages/Speaking';
import {NonprofitCrescendo} from '../../src/pages/NonprofitCrescendo';
import {Contact} from '../../src/pages/Contact';
import {Privacy} from '../../src/pages/Privacy';
import {Header} from '../../src/components/Header';
import {Footer} from '../../src/components/Footer';
import {siteContent} from '../../src/content';
const components={home:Home,about:About,consulting:Consulting,speaking:Speaking,'nonprofit-crescendo':NonprofitCrescendo,contact:Contact,privacy:Privacy,header:Header,footer:Footer};
for(const [slug,Component] of Object.entries(components)){
 let html=renderToStaticMarkup(<MemoryRouter><Component/></MemoryRouter>);
 if(slug==='consulting') for(let i=1;i<siteContent.consulting.faqs.length;i++) html=html.replace(`aria-controls="faq-answer-${i}"`, `aria-controls="faq-answer-${i}"`).replace(new RegExp(`(<button[^>]*aria-controls="faq-answer-${i}"[\\s\\S]*?</button>)`),`$1<div id="faq-answer-${i}" hidden class="px-6 pb-6 pt-1 text-sm text-stone-600 leading-relaxed">${siteContent.consulting.faqs[i].answer}</div>`);
 writeFileSync(`wordpress/crescendo-apex/content/${slug}.html`,html);
}
// Export the original utility styles as a standalone WordPress asset, without running the application build.
const {compile}=await import('@tailwindcss/node');
const {Scanner}=await import('@tailwindcss/oxide');
const css=await compile(readFileSync('src/index.css','utf8'),{base:process.cwd()+'/src',onDependency:()=>{}});
const scanner=new Scanner({sources:[{base:process.cwd()+'/src',pattern:'**/*.{ts,tsx}',negated:false}]});
writeFileSync('wordpress/crescendo-apex/assets/site.css',css.build(scanner.scan()));
