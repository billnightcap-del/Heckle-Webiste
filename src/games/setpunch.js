/* ============================================================
   GAME 06 — SETUP / PUNCH (write punchlines, vote on the board)
   ============================================================ */
import { $, $$, store, esc, toast, current } from './shared.js';

/* ---------- SETUP / PUNCH DATA ----------
   SETUPPUNCH_SETUPS: the setups players write punchlines for.
   SETUPPUNCH_SEED: starter punches so the board isn't empty.
   s = index into SETUPPUNCH_SETUPS, v = starting votes, ago = minutes ago. */
const SETUPPUNCH_SETUPS = [
  'I bought a smart fridge.',
  'My grandma just joined a dating app.',
  'I tried meditating for the first time.',
  'My therapist says I have a fear of commitment.',
  'I told my dog we’re getting a cat.',
  'The airline lost my luggage.',
  'I joined a book club.',
  'My landlord finally fixed the heat.',
];
const SETUPPUNCH_SEED = [
  {s:0, p:'Now it judges me in real time. Last night it texted my mom.', by:'Tight Five Tina', v:41, ago:38},
  {s:1, p:'She’s already ghosted three guys. Two of them literally.', by:'OpenMicMarcus', v:57, ago:95},
  {s:2, p:'Ten minutes of silence and I remembered every embarrassing thing I’ve done since 2009.', by:'Deb from Row C', v:33, ago:12},
  {s:3, p:'I told her I’d think about it and get back to her in six to eight years.', by:'The Late Slot', v:48, ago:240},
  {s:4, p:'He took it well. He ate the adoption papers.', by:'Kev the Host', v:26, ago:7},
  {s:5, p:'Honestly, it’s the longest vacation that suitcase has ever taken.', by:'Bombed in Boise', v:19, ago:66},
  {s:6, p:'Turns out it’s a wine club with homework.', by:'Priya P.', v:62, ago:410},
  {s:7, p:'He did it the landlord way: he raised the rent until I started sweating.', by:'Heckler #4', v:37, ago:150},
  {s:0, p:'It has a camera inside. So now the cheese knows what I did.', by:'Gary, Standing', v:14, ago:3},
  {s:2, p:'The app said “let your thoughts drift by.” Mine parked.', by:'Marisol', v:29, ago:52},
];
/* ---------- end SETUP / PUNCH DATA ---------- */


  const UP='<svg class="icon" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg>',DN='<svg class="icon" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>';
  let board=store.get('sp-board',null);
  if(!board){const now=Date.now();board=SETUPPUNCH_SEED.map((x,i)=>({id:'seed'+i,s:x.s,p:x.p,by:x.by,v:x.v,t:now-x.ago*60000,mine:false}));store.set('sp-board',board)}
  let votes=store.get('sp-votes',{}),cur=Math.floor(Math.random()*SETUPPUNCH_SETUPS.length),sort='recent',limit=8,fresh=null;
  const ta=$('#sp-punch'),nm=$('#sp-name');nm.value=store.get('sp-name','');
  const ago=t=>{const m=Math.max(0,Math.round((Date.now()-t)/60000));return m<1?'just now':m<60?m+'m ago':m<1440?Math.round(m/60)+'h ago':Math.round(m/1440)+'d ago'};
  function showSetup(){const el=$('#sp-setup');el.style.animation='none';void el.offsetWidth;el.style.animation='';
    $('#sp-text').textContent='“'+SETUPPUNCH_SETUPS[cur]+'”';
    $('#sp-dots').innerHTML=SETUPPUNCH_SETUPS.map((_,i)=>'<i class="'+(i===cur?'on':'')+'"></i>').join('');if(sort==='this')render()}
  function render(){
    let list=[...board];
    if(sort==='recent')list.sort((a,b)=>b.t-a.t);
    else{if(sort==='this')list=list.filter(x=>x.s===cur);list.sort((a,b)=>b.v-a.v||b.t-a.t)}
    const shown=list.slice(0,limit);
    $('#sp-list').innerHTML=shown.length?shown.map((x,i)=>{const mv=votes[x.id]||0;return '<li class="sp-item'+(x.id===fresh?' new':'')+'"><span class="sp-rank">'+(sort==='recent'?'':i+1)+'</span>'
      +'<div class="vote"><button class="up" data-id="'+x.id+'" data-d="1" aria-label="Vote up" aria-pressed="'+(mv===1)+'">'+UP+'</button><b>'+x.v+'</b><button class="dn" data-id="'+x.id+'" data-d="-1" aria-label="Vote down" aria-pressed="'+(mv===-1)+'">'+DN+'</button></div>'
      +'<div><span class="su">'+esc(SETUPPUNCH_SETUPS[x.s]||'')+'</span><p class="pu">'+esc(x.p)+'</p><span class="me">'+esc(x.by)+(x.mine?'<span class="you">You</span>':'')+'<span>· '+ago(x.t)+'</span></span></div></li>'}).join('')
      :'<li class="po-empty">No punches for this setup yet. Be first.</li>';
    $('#sp-more').hidden=list.length<=limit;
    $$('#sp-tabs .pick').forEach(b=>b.setAttribute('aria-pressed',b.dataset.sort===sort));
  }
  $('#sp-list').addEventListener('click',e=>{const b=e.target.closest('.vote button');if(!b)return;const id=b.dataset.id,d=+b.dataset.d,prev=votes[id]||0,next=prev===d?0:d,x=board.find(y=>y.id===id);if(!x)return;
    x.v+=next-prev;if(next)votes[id]=next;else delete votes[id];store.set('sp-board',board);store.set('sp-votes',votes);fresh=null;render()});
  $('#sp-tabs').addEventListener('click',e=>{const b=e.target.closest('.pick');if(!b)return;sort=b.dataset.sort;limit=8;fresh=null;render()});
  $('#sp-more').onclick=()=>{limit+=8;render()};
  $('#sp-skip').onclick=()=>{let n;do{n=Math.floor(Math.random()*SETUPPUNCH_SETUPS.length)}while(SETUPPUNCH_SETUPS.length>1&&n===cur);cur=n;showSetup()};
  ta.addEventListener('input',()=>$('#sp-count').textContent=ta.value.length+'/180');
  $('#sp-form').addEventListener('submit',e=>{e.preventDefault();const p=ta.value.trim().replace(/\s+/g,' ');if(p.length<3)return toast('That’s not a punchline yet');
    if(board.some(x=>x.s===cur&&x.p.toLowerCase()===p.toLowerCase()))return toast('Someone already told that one');
    const by=nm.value.trim()||'Anonymous Heckler';store.set('sp-name',nm.value.trim());
    const x={id:Date.now().toString(36),s:cur,p,by,v:1,t:Date.now(),mine:true};board.push(x);votes[x.id]=1;store.set('sp-board',board);store.set('sp-votes',votes);
    ta.value='';$('#sp-count').textContent='0/180';fresh=x.id;sort='recent';limit=8;render();toast('Your punch is on the board');
    setTimeout(()=>{$('#sp-skip').click()},900);
  });
  ta.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();$('#sp-form').requestSubmit()}});
  showSetup();render();setInterval(()=>{if(current==='setpunch')render()},60000);
