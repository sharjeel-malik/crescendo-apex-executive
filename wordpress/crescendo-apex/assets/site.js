document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('button[aria-controls="mobile-menu"]');
    const menu = document.getElementById('mobile-menu');
    if(toggle && menu) {
        const close=()=>{menu.hidden=true;toggle.setAttribute('aria-expanded','false');};
        toggle.addEventListener('click',()=>{menu.hidden=!menu.hidden;toggle.setAttribute('aria-expanded',String(!menu.hidden));});
        menu.addEventListener('click',event=>{if(event.target.closest('a'))close();});
        document.addEventListener('keydown',event=>{if(event.key==='Escape'){close();toggle.focus();}});
    }
    document.querySelectorAll('button[aria-controls^="faq-answer-"]').forEach(button=>{
        const answer=document.getElementById(button.getAttribute('aria-controls'));
        if(!answer)return;
        answer.hidden=button.getAttribute('aria-expanded')!=='true';
        button.addEventListener('click',()=>{answer.hidden=!answer.hidden;button.setAttribute('aria-expanded',String(!answer.hidden));});
    });
});
