/* ============================================================
   GAME 02 — CALLBACKS (find four groups of four)
   ============================================================ */
import { track, totals, $, $$, store, esc, shuffle, toast, Games } from './shared.js';

/* ---------- CALLBACKS DATA ----------
   One object per show. Exactly 4 groups of exactly 4 words.
   Order groups easiest → hardest (Opener, Feature, Headliner, Closer). */
const CALLBACKS_PUZZLES = [
  { title:'Opening Night', groups:[
    {name:'Anatomy of a joke',            words:['SETUP','PUNCHLINE','TAG','CALLBACK']},
    {name:'Ways to have a bad set',       words:['BOMB','TANK','DIE','EAT IT']},
    {name:'Famous clubs, shortened',      words:['CELLAR','STORE','FACTORY','IMPROV']},
    {name:'Seinfeld’s supporting players',words:['KRAMER','ELAINE','GEORGE','NEWMAN']},
  ]},
  { title:'Late Show', groups:[
    {name:'Ways to say it went great',    words:['KILL','DESTROY','MURDER','CRUSH']},
    {name:'Who’s on the lineup',          words:['HOST','OPENER','FEATURE','HEADLINER']},
    {name:'Comics’ surnames that are also everyday words', words:['BURR','BLACK','WHITE','RIVERS']},
    {name:'___ drop',                     words:['MIC','NAME','JAW','BEAT']},
  ]},
  { title:'Special Edition', groups:[
    {name:'On a club stage',              words:['STOOL','SPOTLIGHT','BRICK WALL','MIC STAND']},
    {name:'Sounds from the audience',     words:['GROAN','HECKLE','CHEER','CRICKETS']},
    {name:'One-word specials',            words:['NANETTE','INSIDE','TAMBORINE','ROTHANIEL']},
    {name:'Comic ___',                    words:['RELIEF','BOOK','SANS','STRIP']},
  ]},
];
/* ---------- end CALLBACKS DATA ---------- */
totals.callbacks = CALLBACKS_PUZZLES.length;


  const LEVELS=['Opener','Feature','Headliner','Closer'];
  const boardEl=$('#cb-board'),res=$('#cb-result'),sub=$('#cb-submit');
  let P,idx,remaining,sel,solved,mistakes,done,tried;
  function picker(){const solvedSet=store.get('cb-solved',[]);
    $('#cb-picker').innerHTML=CALLBACKS_PUZZLES.map((p,i)=>`<button class="pick" aria-pressed="${i===idx}" data-i="${i}">No. ${i+1} · ${esc(p.title)}${solvedSet.includes(i)?' <span class="done">✓</span>':''}</button>`).join('');
    $$('#cb-picker .pick').forEach(b=>b.onclick=()=>load(+b.dataset.i))}
  function load(i){idx=i;P=CALLBACKS_PUZZLES[i];remaining=shuffle(P.groups.flatMap(g=>g.words));sel=new Set();solved=[];mistakes=4;done=false;tried=new Set();
    res.hidden=true;$('#cb-btns').hidden=false;$('#cb-label').textContent=`Show No. ${i+1} · ${P.title}`;picker();render()}
  function render(){
    boardEl.innerHTML='';
    solved.forEach(gi=>{const g=P.groups[gi],d=document.createElement('div');d.className='cb-group lv'+gi;d.innerHTML=`<small>${LEVELS[gi]}</small><h4>${esc(g.name)}</h4><p>${g.words.map(esc).join(', ')}</p>`;boardEl.appendChild(d)});
    remaining.forEach(w=>{const b=document.createElement('button');b.className='cb-tile'+(sel.has(w)?' sel':'')+(w.length>7?' long':'');b.textContent=w;b.setAttribute('aria-pressed',sel.has(w));b.disabled=done;b.onclick=()=>toggle(w);boardEl.appendChild(b)});
    $('#cb-mistakes').innerHTML='Mistakes left '+[0,1,2,3].map(i=>`<i class="${i>=mistakes?'gone':''}"></i>`).join('');
    sub.disabled=sel.size!==4||done;$('#cb-clear').disabled=!sel.size||done;
  }
  function toggle(w){if(done)return;if(sel.has(w))sel.delete(w);else if(sel.size<4)sel.add(w);render()}
  function submit(){
    if(sel.size!==4||done)return;const key=[...sel].sort().join('|');
    if(tried.has(key)){toast('Already tried that one');return}tried.add(key);
    const gi=P.groups.findIndex(g=>g.words.every(w=>sel.has(w)));
    if(gi>-1){solved.push(gi);remaining=remaining.filter(w=>!sel.has(w));sel=new Set();render();
      if(solved.length===4)end(true);return}
    const best=Math.max(...P.groups.filter((g,i)=>!solved.includes(i)).map(g=>g.words.filter(w=>sel.has(w)).length));
    mistakes--;toast(best===3?'One away…':mistakes?'Not a group':'That’s the light — you’re out');
    $$('.cb-tile.sel').forEach(t=>{t.classList.remove('shake');void t.offsetWidth;t.classList.add('shake')});
    setTimeout(()=>{render();if(!mistakes)end(false)},480);
  }
  function end(win){
    track('game_complete',{game:'callbacks',result:win?'win':'loss'});
    done=true;sel=new Set();
    if(!win){P.groups.forEach((g,i)=>{if(!solved.includes(i))solved.push(i)});remaining=[]}
    else{const s=store.get('cb-solved',[]);if(!s.includes(idx)){s.push(idx);store.set('cb-solved',s)}}
    render();picker();$('#cb-btns').hidden=true;
    const next=(idx+1)%CALLBACKS_PUZZLES.length;
    res.innerHTML=`<span class="kicker">${win?'All four callbacks landed':'Tough room'}</span><h3>${win?(mistakes===4?'Flawless set.':mistakes>=2?'Great show.':'Squeaked it.'):'Here’s what you missed.'}</h3>
      <p class="muted">${win?`Solved with ${4-mistakes} mistake${4-mistakes===1?'':'s'}.`:'The groups are laid out above, easiest to hardest.'}</p>
      <div class="row-btns"><button class="btn" id="cb-retry">Replay this show</button><button class="btn btn-primary" id="cb-next">Next show: ${esc(CALLBACKS_PUZZLES[next].title)}</button></div>`;
    res.hidden=false;$('#cb-retry').onclick=()=>load(idx);$('#cb-next').onclick=()=>load(next);
  }
  $('#cb-shuffle').onclick=()=>{remaining=shuffle(remaining);render()};
  $('#cb-clear').onclick=()=>{sel=new Set();render()};
  sub.onclick=submit;
  load(0);
  Games.callbacks={onKey:k=>{if(k==='Enter'){submit();return true}return false}};
