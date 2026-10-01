/* ============================================================
   TWEAKS — house lights / showtime energy / room size
   Opened from the "Tweaks" button; choices persist in this browser.
   ============================================================ */
import { store } from './shared.js';

const TWEAK_DEFAULTS = {
  "mood": "club",
  "energy": "lively",
  "room": "theater"
};
const NOTES={mood:{club:'Black room, yellow marquee.',matinee:'House lights up — paper and ink.',blackout:'No color. Just a spotlight.'},
  energy:{calm:'Still lights, no flips or bounces.',lively:'Chasing bulbs and tile flips.',full:'Bulbs on every stage, glowing tiles, confetti on wins.'},
  room:{intimate:'Skip the intro — games start at the top.',theater:'The standard layout.',arena:'Huge type, big tiles.'}};
const t={...TWEAK_DEFAULTS,...store.get('tweaks',{})},panel=document.getElementById('tweaks'),opener=document.getElementById('tw-open');
function apply(){for(const k in t){document.body.dataset[k]=t[k];panel.querySelectorAll('.seg[data-k="'+k+'"] button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.v===t[k]));const n=document.getElementById('tw-'+k+'-note');if(n)n.textContent=NOTES[k][t[k]]||''}}
panel.querySelectorAll('.seg').forEach(seg=>seg.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const k=seg.dataset.k;t[k]=b.dataset.v;apply();store.set('tweaks',t)}));
const show=(on)=>{panel.hidden=!on;opener.hidden=on;opener.setAttribute('aria-expanded',on)};
opener.onclick=()=>{show(true);panel.querySelector('button[aria-pressed="true"]')?.focus()};
document.getElementById('tw-close').onclick=()=>{show(false);opener.focus()};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)show(false)});
apply();
function confetti(){if(document.body.dataset.energy!=='full'||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const c=document.createElement('div');c.className='confetti';
  for(let i=0;i<70;i++){const p=document.createElement('i');p.style.left=Math.random()*100+'vw';p.style.animationDuration=(1.6+Math.random()*1.6)+'s';p.style.animationDelay=(Math.random()*.4)+'s';if(i%3===0)p.style.background='var(--paper)';if(i%5===0)p.style.width=p.style.height='8px';c.appendChild(p)}
  document.body.appendChild(c);setTimeout(()=>c.remove(),3800)}
const mo=new MutationObserver(ms=>ms.forEach(m=>{if(m.type==='attributes'&&!m.target.hidden)confetti();else if(m.type==='childList'&&[...m.addedNodes].some(n=>n.classList&&n.classList.contains('stage')))confetti()}));
['pl-result','cb-result','xw-result','po-result'].forEach(id=>{const el=document.getElementById(id);if(el)mo.observe(el,{attributes:true,attributeFilter:['hidden']})});
mo.observe(document.getElementById('al-body'),{childList:true});
