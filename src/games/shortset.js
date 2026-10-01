/* ============================================================
   GAME 03 — SHORT SET (mini crossword)
   ============================================================ */
import { track, totals, $, $$, store, esc, toast, copyText, keyboard, Games } from './shared.js';

/* ---------- SHORT SET DATA ----------
   grid: one string per row, letters for answers, # for black squares.
   Clue numbers follow standard crossword numbering (left→right, top→bottom),
   so across/down keys must match the numbers the grid produces. */
const SHORTSET_PUZZLES = [
  { title:'The Late Slot',
    grid:['BAR##',
          'UFO##',
          'STAGE',
          '##SET',
          '##TEA'],
    across:{1:'Where the two-drink minimum gets fulfilled',
            4:'Saucer in a classic “we were abducted” bit, for short',
            5:'Where a comic stands, and sometimes dies',
            8:'A tight five, e.g.',
            9:'Gossip that gets “spilled” in a podcast episode'},
    down:  {1:'Tour ___ (a road comic’s second home)',
            2:'Toward the back, like the cheap seats on a comedy cruise',
            3:'Event where every insult is technically a tribute',
            6:'“___, you guys are too kind!”',
            7:'Headliner’s arrival guess, briefly'} },
  { title:'Open Mic',
    grid:['#SOY',
          'JOKE',
          'ALAS',
          'BOY#'],
    across:{1:'___ latte (target of a thousand barista bits)',
            4:'Setup plus punchline',
            5:'“___, poor Yorick” — Hamlet’s eulogy for a court jester',
            6:'“Oh, ___…” — a comic’s exasperated opener'},
    down:  {1:'One-person show, like a stand-up set',
            2:'“___, so…” — how half of all bits begin',
            3:'Improv’s golden rule: “___, and…”',
            4:'Quick dig at the front row'} },
];
/* ---------- end SHORT SET DATA ---------- */
totals.shortset = SHORTSET_PUZZLES.length;


  const gridEl=$('#xw-grid'),root=$('#xw'),res=$('#xw-result');
  let P,idx,R,C,cells,words,entries,rev,wrong,sel,dir,done,t0,elapsed,tick,started=false;
  const kb=keyboard($('#xw-keys'),k=>press(k),{enter:false});
  const open=(r,c)=>r>=0&&c>=0&&r<R&&c<C&&P.grid[r][c]!=='#';
  function picker(){const best=store.get('xw-best',{});
    $('#xw-picker').innerHTML=SHORTSET_PUZZLES.map((p,i)=>`<button class="pick" aria-pressed="${i===idx}" data-i="${i}">No. ${i+1} · ${esc(p.title)}${best[i]!=null?` <span class="done">✓ ${fmt(best[i])}</span>`:''}</button>`).join('');
    $$('#xw-picker .pick').forEach(b=>b.onclick=()=>load(+b.dataset.i))}
  const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
  function load(i){
    idx=i;P=SHORTSET_PUZZLES[i];R=P.grid.length;C=P.grid[0].length;words=[];cells=[];let n=0;
    for(let r=0;r<R;r++){cells[r]=[];for(let c=0;c<C;c++){const cell={num:0,a:null,d:null};
      if(open(r,c)){const sa=!open(r,c-1)&&open(r,c+1),sd=!open(r-1,c)&&open(r+1,c);if(sa||sd)cell.num=++n;
        if(sa){const w={num:n,dir:'across',cells:[]};for(let cc=c;open(r,cc);cc++)w.cells.push([r,cc]);w.clue=P.across[n]||'(clue missing)';words.push(w)}
        if(sd){const w={num:n,dir:'down',cells:[]};for(let rr=r;open(rr,c);rr++)w.cells.push([rr,c]);w.clue=P.down[n]||'(clue missing)';words.push(w)}}
      cells[r][c]=cell}}
    words.sort((a,b)=>(a.dir===b.dir?0:a.dir==='across'?-1:1)||a.num-b.num);
    words.forEach((w,wi)=>w.cells.forEach(([r,c])=>cells[r][c][w.dir==='across'?'a':'d']=wi));
    entries=P.grid.map(row=>[...row].map(()=>''));rev=new Set();wrong=new Set();done=false;elapsed=0;t0=null;started=false;
    root.classList.remove('solved');res.hidden=true;$('#xw-check').disabled=$('#xw-reveal').disabled=false;
    gridEl.style.gridTemplateColumns=`repeat(${C},1fr)`;gridEl.style.width=`min(100%,${C*88}px)`;
    gridEl.innerHTML='';
    for(let r=0;r<R;r++)for(let c=0;c<C;c++){const d=document.createElement('div');d.setAttribute('role','gridcell');
      if(!open(r,c))d.className='cell black';else{d.className='cell';d.innerHTML=(cells[r][c].num?`<span class="n">${cells[r][c].num}</span>`:'')+'<span class="l"></span>';d.onclick=()=>tap(r,c)}
      gridEl.appendChild(d)}
    $('#xw-label').textContent=`Grid No. ${i+1} · ${P.title}`;
    dir='across';sel=[...words[0].cells[0]];
    $('#xw-clues').innerHTML=['across','down'].map(d=>`<div><h4>${d}</h4><ol>${words.map((w,wi)=>w.dir===d?`<li data-w="${wi}"><b>${w.num}</b><span>${esc(w.clue)}</span></li>`:'').join('')}</ol></div>`).join('');
    $$('#xw-clues li').forEach(li=>li.onclick=()=>selectWord(+li.dataset.w));
    picker();paint();startClock();
  }
  const cellEl=(r,c)=>gridEl.children[r*C+c];
  const curWord=()=>{const x=cells[sel[0]][sel[1]];const wi=dir==='across'?x.a:x.d;return wi==null?null:wi};
  function paint(){
    const wi=curWord(),w=words[wi],other=cells[sel[0]][sel[1]][dir==='across'?'d':'a'];
    const inW=new Set(w?w.cells.map(p=>p.join()):[]);
    for(let r=0;r<R;r++)for(let c=0;c<C;c++){if(!open(r,c))continue;const el=cellEl(r,c),k=r+','+c;
      el.querySelector('.l').textContent=entries[r][c];
      el.classList.toggle('sel',r===sel[0]&&c===sel[1]);el.classList.toggle('inword',inW.has(k));
      el.classList.toggle('wrong',wrong.has(k));el.classList.toggle('rev',rev.has(k))}
    $$('#xw-clues li').forEach(li=>{const i=+li.dataset.w;li.classList.toggle('active',i===wi);li.classList.toggle('cross',i===other);li.classList.toggle('filled',words[i].cells.every(([r,c])=>entries[r][c]))});
    $('#xw-bartxt').innerHTML=w?`<b>${w.num}${w.dir==='across'?'A':'D'}</b><span>${esc(w.clue)}</span>`:'';
  }
  function tap(r,c){started=true;if(sel[0]===r&&sel[1]===c)flip();else{sel=[r,c];const x=cells[r][c];if((dir==='across'?x.a:x.d)==null)dir=dir==='across'?'down':'across'}paint()}
  function flip(){const x=cells[sel[0]][sel[1]],o=dir==='across'?'down':'across';if((o==='across'?x.a:x.d)!=null)dir=o;paint()}
  function selectWord(wi){const w=words[wi];dir=w.dir;const e=w.cells.find(([r,c])=>!entries[r][c])||w.cells[0];sel=[...e];paint()}
  function stepWord(d){const wi=curWord();selectWord((wi+d+words.length)%words.length)}
  function press(k){
    if(done)return;started=true;
    const wi=curWord(),w=words[wi],pos=w.cells.findIndex(([r,c])=>r===sel[0]&&c===sel[1]);
    if(/^[A-Z]$/.test(k)){
      entries[sel[0]][sel[1]]=k;wrong.delete(sel.join());
      if(pos<w.cells.length-1)sel=[...w.cells[pos+1]];
      else{const nxt=words.findIndex((x,i)=>i>wi&&x.cells.some(([r,c])=>!entries[r][c]));if(nxt>-1)selectWord(nxt)}
      paint();checkDone();
    }else if(k==='Backspace'){
      if(entries[sel[0]][sel[1]]){entries[sel[0]][sel[1]]=''}else if(pos>0){sel=[...w.cells[pos-1]];entries[sel[0]][sel[1]]=''}
      wrong.delete(sel.join());paint();
    }else if(k==='Tab'||k==='Enter')stepWord(1);
    else if(k===' ')flip();
    else if(k.startsWith('Arrow')){
      const [dr,dc]={ArrowUp:[-1,0],ArrowDown:[1,0],ArrowLeft:[0,-1],ArrowRight:[0,1]}[k],nd=dc?'across':'down';
      if(nd!==dir&&cells[sel[0]][sel[1]][nd==='across'?'a':'d']!=null){dir=nd;paint();return}
      let r=sel[0]+dr,c=sel[1]+dc;while(r>=0&&c>=0&&r<R&&c<C&&!open(r,c)){r+=dr;c+=dc}
      if(open(r,c)){sel=[r,c];const x=cells[r][c];if((dir==='across'?x.a:x.d)==null)dir=nd}paint();
    }
  }
  function checkDone(){
    let full=true,right=true;for(let r=0;r<R;r++)for(let c=0;c<C;c++)if(open(r,c)){if(!entries[r][c])full=false;if(entries[r][c]!==P.grid[r][c])right=false}
    if(full&&right)solve(false);else if(full)toast('So close — something’s off');
  }
  function solve(revealed){
    track('game_complete',{game:'shortset',result:revealed?'revealed':'win'});
    done=true;stopClock();root.classList.add('solved');$('#xw-check').disabled=$('#xw-reveal').disabled=true;
    if(!revealed&&!rev.size){const b=store.get('xw-best',{});if(b[idx]==null||elapsed<b[idx]){b[idx]=elapsed;store.set('xw-best',b)}}
    picker();const next=(idx+1)%SHORTSET_PUZZLES.length;
    res.innerHTML=`<span class="kicker">${revealed?'Answers revealed':'Grid complete'}</span><h3>${revealed?'We fed you the lines.':elapsed<45?'Lightning set.':elapsed<120?'Tight work.':'Landed it.'}</h3>
      <p class="muted">${revealed?'No time recorded — try the next grid cold.':`Solved in ${fmt(elapsed)}${rev.size?' with some help':''}.`}</p>
      <div class="row-btns"><button class="btn" id="xw-share">Share time</button><button class="btn btn-primary" id="xw-nextp">Next grid: ${esc(SHORTSET_PUZZLES[next].title)}</button></div>`;
    res.hidden=false;$('#xw-nextp').onclick=()=>load(next);
    $('#xw-share').onclick=()=>copyText(`Heckle Short Set — ${P.title}\n${revealed?'Revealed':fmt(elapsed)}`);
    paint();
  }
  function startClock(){stopClock();t0=Date.now();$('#xw-time').textContent='0:00';tick=setInterval(()=>{if(!started||done){t0=Date.now()-elapsed*1000;return}elapsed=Math.floor((Date.now()-t0)/1000);$('#xw-time').textContent=fmt(elapsed)},500)}
  function stopClock(){clearInterval(tick)}
  $('#xw-check').onclick=()=>{let n=0;for(let r=0;r<R;r++)for(let c=0;c<C;c++)if(open(r,c)&&entries[r][c]&&entries[r][c]!==P.grid[r][c]){wrong.add(r+','+c);n++}paint();toast(n?`${n} square${n>1?'s':''} off`:'Everything so far checks out')};
  $('#xw-reveal').onclick=()=>{for(let r=0;r<R;r++)for(let c=0;c<C;c++)if(open(r,c)&&entries[r][c]!==P.grid[r][c]){entries[r][c]=P.grid[r][c];rev.add(r+','+c)}wrong.clear();solve(true)};
  $('#xw-prev').onclick=()=>stepWord(-1);$('#xw-next').onclick=()=>stepWord(1);$('#xw-bartxt').onclick=flip;
  load(0);
  Games.shortset={onKey:(k)=>{press(k);return true},onShow:()=>{}};
