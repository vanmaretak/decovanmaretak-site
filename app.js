const k='dgt-lang';
function setL(l){document.body.classList.toggle('en',l==='en');document.documentElement.lang=l;try{localStorage.setItem(k,l)}catch(e){}
document.querySelectorAll('.lang').forEach(b=>b.textContent=l==='en'?'NL':'EN');
document.querySelectorAll('a[href$=".html"]').forEach(a=>{const u=a.getAttribute('href').split('?')[0];a.setAttribute('href',l==='en'?u+'?lang=en':u)})}
document.addEventListener('DOMContentLoaded',()=>{let s=null;try{s=localStorage.getItem(k)}catch(e){}
setL(new URLSearchParams(location.search).get('lang')||s||'nl');
document.querySelectorAll('.lang').forEach(b=>b.onclick=()=>setL(document.body.classList.contains('en')?'nl':'en'));
const f=document.getElementById('quote');if(f)f.addEventListener('submit',e=>{e.preventDefault();
const lines=[...new FormData(f).entries()].map(([n,v])=>n+': '+v);
location.href='mailto:'+f.dataset.mail+'?subject='+encodeURIComponent('Offerteaanvraag seizoen 2027 – '+(f.elements['Bedrijf'].value||''))+'&body='+encodeURIComponent(lines.join('\n'))})});
/* Video passages: mobile poster, autoplay (muted, loop) only when in view and reduced motion is off; native controls stay */
document.addEventListener('DOMContentLoaded',()=>{const vs=[...document.querySelectorAll('video.dgt-vid')];if(!vs.length)return;
const mob=matchMedia('(max-width:720px)').matches,still=matchMedia('(prefers-reduced-motion: reduce)').matches;
vs.forEach(v=>{if(mob&&v.dataset.posterM)v.poster=v.dataset.posterM;v.loop=!still;v.dataset.user='';
v.addEventListener('pause',()=>{if(!v.dataset.auto)v.dataset.user='1'});v.addEventListener('play',()=>{v.dataset.user=''})});
if(still||!('IntersectionObserver'in window))return;
const io=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;
if(e.isIntersecting&&e.intersectionRatio>=.5){if(!v.dataset.user&&v.paused){const p=v.play();if(p)p.catch(()=>{})}}
else if(!v.paused){v.dataset.auto='1';v.pause();setTimeout(()=>{delete v.dataset.auto},0)}}),{threshold:[0,.5]});
vs.forEach(v=>io.observe(v))});
