/* ============================================================
   GAME 05 — PUN-OFF (two topics → puns, scored by syllables)
   ============================================================ */
import { $, store, esc, shuffle, toast, copyText } from './shared.js';

/* ---------- PUN-OFF DATA ----------
   Each pair has two topics. words: space-separated, with hyphens marking
   syllables (hyphens set the score: "moz-za-rel-la" = 4 points). */
const PUNOFF_PAIRS = [
  { a:{name:'Cheese',      words:'cheese ched-dar brie gou-da fe-ta swiss moz-za-rel-la par-me-san cam-em-bert curd dai-ry grat-er rind ri-cot-ta prov-o-lone hal-lou-mi gru-yere'},
    b:{name:'Outer Space', words:'space or-bit plan-et com-et gal-ax-y as-ter-oid rock-et mars moon star sat-urn nep-tune ju-pi-ter cos-mic as-tro-naut lu-nar ne-bu-la me-te-or u-ni-verse grav-i-ty'} },
  { a:{name:'Coffee',      words:'cof-fee es-pres-so lat-te bean brew mug roast mo-cha cap-puc-ci-no de-caf bar-is-ta grind froth ja-va a-mer-i-ca-no caf-feine'},
    b:{name:'Pirates',     words:'pi-rate ship plank par-rot trea-sure an-chor cap-tain sail sea buc-ca-neer mat-ey plun-der deck cut-lass hook mut-i-ny arr'} },
  { a:{name:'Cats',        words:'cat kit-ty kit-ten meow purr paw whis-ker lit-ter fe-line claw tab-by cat-nip hiss'},
    b:{name:'Wall Street', words:'stock mar-ket bull bear bro-ker in-vest div-i-dend port-fo-li-o mer-ger hedge fund prof-it cap-i-tal bond in-ter-est'} },
  { a:{name:'The Dentist', words:'den-tist tooth teeth floss en-am-el cav-i-ty mo-lar drill fill-ing plaque gum smile brace fluo-ride can-al'},
    b:{name:'Rock Band',   words:'rock gui-tar drum am-pli-fi-er riff sol-o en-core amp mosh tour stage bass vo-cals al-bum groupie'} },
  { a:{name:'Weddings',    words:'wed-ding bride groom vow ring al-tar veil toast cake hon-ey-moon brides-maid el-ope'},
    b:{name:'Weather',     words:'rain storm thun-der light-ning cloud fore-cast breeze hail driz-zle tor-na-do hur-ri-cane sun-ny fog snow'} },
  { a:{name:'The Gym',     words:'gym squat lift pro-tein car-di-o tread-mill bi-cep dumb-bell rep sweat flex spin yo-ga'},
    b:{name:'Bakery',      words:'bak-er-y bread dough loaf crois-sant muf-fin ba-gel scone pie flour yeast knead bun roll cup-cake'} },
];
const PUNOFF_SECONDS = 120;
/* ---------- end PUN-OFF DATA ---------- */


  const parse=str=>str.trim().split(/\s+/).map(h=>{const w=h.replace(/-/g,'').toLowerCase();return{w,syl:h.split('-').length,disp:h.replace(/-/g,'·')}});
  const norm=t=>t.toLowerCase().replace(/['’\-]/g,'').replace(/[^a-z\s]/g,' ').replace(/\s+/g,' ').trim();
  let pi,A,B,used,entries,score,left,timer,over,hints;
  const $in=$('#po-in');
  function load(i){
    pi=(i+PUNOFF_PAIRS.length)%PUNOFF_PAIRS.length;const p=PUNOFF_PAIRS[pi];
    A={name:p.a.name,bank:parse(p.a.words)};B={name:p.b.name,bank:parse(p.b.words)};
    used=new Set();entries=[];score=0;left=PUNOFF_SECONDS;over=false;hints=0;clearInterval(timer);timer=null;
    $('#po-topics').innerHTML='<div class="po-topic a"><span class="kicker">Topic A</span><b>'+esc(A.name)+'</b></div><span class="po-x" aria-hidden="true">×</span><div class="po-topic b"><span class="kicker" style="color:var(--paper)">Topic B</span><b>'+esc(B.name)+'</b></div>';
    $('#po-label').textContent='Pair No. '+(pi+1)+' · '+A.name+' × '+B.name;
    $('#po-hints').innerHTML='';$('#po-hint').disabled=false;$('#po-result').hidden=true;$in.disabled=false;$in.value='';
    paint();
  }
  const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
  function paint(){
    const sc=$('#po-score');sc.textContent=score;
    const t=$('#po-time');t.textContent=fmt(left);t.classList.toggle('low',left<=15&&!!timer);
    const list=$('#po-list');
    if(!entries.length){list.innerHTML='<li class="po-empty" style="display:block;border:0">Your puns land here. The clock starts with your first one.</li>';return}
    list.innerHTML=entries.map(e=>'<li><span class="pts">+'+e.total+'<small>'+(e.mult>1?'×'+e.mult:'pts')+'</small></span><div><div class="txt">'+esc(e.text)+'</div><div class="chips">'
      +e.hits.map(h=>'<span class="chip '+h.side+(h.dup?' used':'')+'">'+esc(h.disp)+' '+(h.dup?'0':'+'+h.pts)+'</span>').join('')
      +(e.mult===3?'<span class="chip mult">Fused ×3</span>':e.mult===2?'<span class="chip mult">Combo ×2</span>':'')+'</div></div></li>').join('');
  }
  function find(tokens,bank,side){
    const out=[];
    bank.forEach(b=>{
      let tok=-1,full=true;
      if(b.w.length<=3)tok=tokens.findIndex(t=>t===b.w||t===b.w+'s');
      else tok=tokens.findIndex(t=>t.includes(b.w));
      if(tok<0&&b.w.length>=6){const n=Math.max(4,Math.ceil(b.w.length*.55)),fr=[b.w.slice(0,n),b.w.slice(-n)];tok=tokens.findIndex(t=>fr.some(f=>t.includes(f)));full=false}
      if(tok>-1)out.push({side,w:b.w,disp:b.disp,tok,pts:full?b.syl:Math.max(1,b.syl-1)});
    });
    return out.filter(h=>!out.some(o=>o!==h&&o.tok===h.tok&&o.w.length>h.w.length&&o.w.includes(h.w)));
  }
  function submit(e){
    e.preventDefault();if(over)return;
    const raw=$in.value.trim();if(raw.length<3)return toast('Give us a whole pun');
    const n=norm(raw);if(entries.some(x=>norm(x.text)===n))return toast('You already told that one');
    const tokens=n.split(' ');
    const hits=[...find(tokens,A.bank,'a'),...find(tokens,B.bank,'b')];
    if(!hits.length)return toast('No '+A.name.toLowerCase()+' or '+B.name.toLowerCase().replace(/^the /,'')+' words in there');
    hits.forEach(h=>h.dup=used.has(h.side+h.w));
    const fresh=hits.filter(h=>!h.dup);
    if(!fresh.length){toast('Already scored those words — find new ones');return}
    const sides=new Set(fresh.map(h=>h.side));
    const fused=tokens.some((t,i)=>fresh.some(h=>h.tok===i&&h.side==='a')&&fresh.some(h=>h.tok===i&&h.side==='b'));
    const mult=fused?3:sides.size===2?2:1,base=fresh.reduce((a,h)=>a+h.pts,0),total=base*mult;
    fresh.forEach(h=>used.add(h.side+h.w));
    entries.unshift({text:raw,hits,mult,total});score+=total;$in.value='';
    if(!timer)timer=setInterval(tick,1000);
    toast(mult===3?'Fused! Triple points':mult===2?'Combo — both topics':'+'+total);
    paint();const sc=$('#po-score');sc.classList.remove('po-bump');void sc.offsetWidth;sc.classList.add('po-bump');
  }
  function tick(){left--;if(left<=0){left=0;end()}paint()}
  function end(){
    clearInterval(timer);timer=null;over=true;$in.disabled=true;
    const best=Math.max(store.get('po-best',0),score);store.set('po-best',best);
    const top=[...entries].sort((a,b)=>b.total-a.total)[0];
    const r=$('#po-result');
    r.innerHTML='<span class="kicker">Time’s up</span><h3>'+(score>=40?'Pun royalty.':score>=20?'Big groans.':score?'Warm-up set.':'Crickets.')+'</h3>'
      +'<p>'+score+' points from '+entries.length+' pun'+(entries.length===1?'':'s')+'. Best ever: '+best+'.</p>'
      +(top?'<p class="muted">Top pun: “'+esc(top.text)+'” (+'+top.total+')</p>':'')
      +'<div class="row-btns"><button class="btn btn-primary" id="po-again">New pair</button><button class="btn" id="po-share">Share score</button></div>';
    r.hidden=false;paint();
    $('#po-again').onclick=()=>load(pi+1);
    $('#po-share').onclick=()=>copyText('Heckle Pun-Off — '+A.name+' × '+B.name+'\n'+score+' points'+(top?'\nBest: “'+top.text+'”':''));
  }
  $('#po-form').addEventListener('submit',submit);
  $('#po-new').onclick=()=>load(pi+1);
  $('#po-hint').onclick=()=>{
    hints++;const pickN=(bank,side)=>shuffle(bank.filter(b=>!used.has(side+b.w))).slice(0,3).map(b=>'<span class="chip '+side+'">'+esc(b.disp)+'</span>').join('');
    $('#po-hints').innerHTML='<div><span class="kicker">'+esc(A.name)+'</span>'+pickN(A.bank,'a')+'</div><div><span class="kicker" style="color:var(--paper)">'+esc(B.name)+'</span>'+pickN(B.bank,'b')+'</div>';
    if(hints>=3)$('#po-hint').disabled=true;
  };
  const day=Math.floor((Date.now()-new Date(2026,0,1).getTime())/864e5);
  load(day);
