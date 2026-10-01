/* ============================================================
   GAME 07 — BUZZ WORDS (honeycomb word-finder)
   ============================================================ */
import { track, $, $$, store, esc, shuffle, toast, Games } from './shared.js';

/* ---------- BUZZ WORDS DATA ----------
   letters: exactly 7 unique letters. center: the required letter (one of them).
   words: every accepted answer, space-separated (4+ letters, all must use center).
   A word using all 7 letters is a "pangram" and earns a bonus. */
const BUZZ_PUZZLES = [
  { title:'Big Laugh', letters:'AUGHEDL', center:'L',
    words:'laugh laughed glade glad deal dale lead hale heal held hall hull dull gull gall gale legal eagle allege alleged ladle ladled haul hauled laud lauded duel dueled glue glued gulled alluded allude delude deluded elude eluded dual gaggle haggle haggled lagged lugged dulled lulled lull algae gala dell glee league hell hula healed ledge deluge deluged heel heeled luge hulled' },
  { title:'Front Row', letters:'CHUKLED', center:'U',
    words:'chuck chuckle chuckled chucked duck ducked luck duke dude duel dull dulled hulk hull hulled cuddle cuddled clue clued delude deluded elude eluded dueled cluck clucked cull culled huddle huddled' },
  { title:'Roast Night', letters:'MOCKING', center:'O',
    words:'mock mocking coin conk conking coming conic icon iconic ionic oink oinking gong monk moon mooning noon goon going cook cooking mooing cooing nook kimono comic ginkgo noggin onion mono kook' },
];
const BUZZ_RANKS = ['Open Mic','Regular','Feature','Headliner','Special','Legend'];
/* ---------- end BUZZ WORDS DATA ---------- */


  const POS=[[33.5,0],[67,19.5],[67,58.5],[33.5,78],[0,58.5],[0,19.5]];
  let pi,P,outer,valid,found,cur='',revealed=false;
  const pts=w=>(w.length===4?1:w.length)+(new Set(w).size===7?7:0);
  const saveKey=()=>'bz-'+pi;
  function picker(){$('#bz-picker').innerHTML=BUZZ_PUZZLES.map((p,i)=>'<button class="pick" aria-pressed="'+(i===pi)+'" data-i="'+i+'">No. '+(i+1)+' · '+esc(p.title)+'</button>').join('');$$('#bz-picker .pick').forEach(b=>b.onclick=()=>load(+b.dataset.i))}
  function load(i){pi=i;P=BUZZ_PUZZLES[i];const c=P.center.toUpperCase();outer=[...P.letters.toUpperCase()].filter(x=>x!==c);valid=P.words.trim().split(/\s+/).map(w=>w.toLowerCase());
    found=store.get(saveKey(),[]);revealed=false;cur='';$('#bz-label').textContent='Hive No. '+(i+1)+' · '+P.title;picker();buildHive();paint();}
  function buildHive(){const h=$('#bz-hive');h.innerHTML='';
    /* Each hexagon owns a SLOT (-1 = center, 0-5 = outer ring). The letter is always read from
       letterAt(slot) at click time, so the display and the input share one source: `outer`. */
    const mk=(slot,x,y)=>{const b=document.createElement('button');b.type='button';b.className='cellh'+(slot<0?' center':'');b.dataset.slot=slot;b.style.left=x+'%';b.style.top=y+'%';b.onclick=()=>{press(letterAt(slot));b.blur()};h.appendChild(b);return b};
    mk(-1,33.5,39);outer.forEach((_,k)=>mk(k,POS[k][0],POS[k][1]));renderHive();}
  function letterAt(slot){return slot<0?P.center.toUpperCase():outer[slot]}
  function renderHive(){$$('#bz-hive .cellh').forEach(b=>{const slot=+b.dataset.slot,l=letterAt(slot);b.textContent=l;b.setAttribute('aria-label',l+(slot<0?' (center)':''))})}
  function max(){return valid.reduce((a,w)=>a+pts(w),0)}
  function score(){return found.reduce((a,w)=>a+pts(w),0)}
  function paint(){
    const c=P.center.toUpperCase(),L=new Set(P.letters.toUpperCase());
    $('#bz-entry').innerHTML=[...cur].map(ch=>'<span class="'+(ch===c?'c':L.has(ch)?'':'x')+'">'+ch+'</span>').join('')+'<span class="caret"></span>';
    const sc=score(),mx=max(),th=BUZZ_RANKS.map((_,k)=>Math.round(mx*[0,.08,.2,.4,.6,.8][k]));
    let r=0;th.forEach((t,k)=>{if(sc>=t)r=k});
    $('#bz-rankname').textContent=BUZZ_RANKS[r];$('#bz-score').textContent=sc;
    $('#bz-track').innerHTML='<span class="bz-fill" style="width:calc('+(r/(BUZZ_RANKS.length-1)*100)+'% - 12px)"></span>'+BUZZ_RANKS.map((_,k)=>'<i class="'+(k<=r?'on':'')+(k===r?' cur':'')+'"></i>').join('');
    $('#bz-next').textContent=r<BUZZ_RANKS.length-1?(th[r+1]-sc)+' points to '+BUZZ_RANKS[r+1]:'Top of the bill. Legend status.';
    const all=revealed?valid:found;
    $('#bz-count').textContent=found.length+' of '+valid.length+' words';
    const list=[...all].sort();
    $('#bz-list').innerHTML=list.length?list.map(w=>'<li class="'+(new Set(w).size===7?'pg':'')+(revealed&&!found.includes(w)?' miss':'')+(w===lastAdded?' new':'')+'">'+esc(w)+'</li>').join(''):'<li class="empty" style="border:0">Your words show up here.</li>';
    $('#bz-reveal').textContent=revealed?'Hide missed words':'Show all words';
  }
  let lastAdded='';
  function shake(msg){toast(msg);const e=$('#bz-entry');e.classList.remove('shake');void e.offsetWidth;e.classList.add('shake');setTimeout(()=>{cur='';paint()},500)}
  function press(k){
    if(k==='Enter')return submit();
    if(k==='Backspace'){cur=cur.slice(0,-1);return paint()}
    if(k===' ')return shuf();
    if(/^[A-Z]$/.test(k)&&cur.length<19){cur+=k;paint()}
  }
  function submit(){
    const w=cur.toLowerCase(),c=P.center.toLowerCase();if(!w)return;
    if(w.length<4)return shake('Too short');
    if(![...w].every(ch=>P.letters.toLowerCase().includes(ch)))return shake('Bad letters');
    if(!w.includes(c))return shake('Missing center letter');
    if(found.includes(w))return shake('Already found');
    if(!valid.includes(w))return shake('Not in our word list');
    track('game_complete',{game:'buzz',result:'word'});
    found.push(w);lastAdded=w;store.set(saveKey(),found);
    const b=store.get('bz-best',{});b[pi]=Math.max(b[pi]||0,score());store.set('bz-best',b);
    const p=pts(w);toast(new Set(w).size===7?'Pangram! +'+p:p>=7?'Big laugh! +'+p:p>=5?'Nice! +'+p:'Good +'+p);
    cur='';paint();
  }
  function shuf(){outer=shuffle(outer);renderHive()}
  $('#bz-del').onclick=()=>press('Backspace');$('#bz-enter').onclick=()=>press('Enter');$('#bz-shuf').onclick=shuf;
  $('#bz-reveal').onclick=()=>{revealed=!revealed;paint()};
  load(0);
  Games.buzz={onKey:k=>{if(k==='Enter'||k==='Backspace'||k===' '||/^[A-Z]$/.test(k)){press(k);return true}return false}};
