/* ============================================================
   GAME 01 — PUNCHLINE (five-letter word guess)
   ============================================================ */
import { $, $$, store, esc, toast, copyText, keyboard, Games } from './shared.js';

/* ---------- PUNCHLINE DATA ----------
   Add answers here. w = exactly 5 letters. n = the note shown after the round.
   The daily word rotates through this list in order, one per day. */
const PUNCHLINE_WORDS = [
  {w:'SETUP', n:'The first half of every joke — the part that makes a promise.'},
  {w:'CROWD', n:'Work it, read it, lose it. Sometimes all three in one set.'},
  {w:'LAUGH', n:'The only review that counts at 11:40 on a Tuesday.'},
  {w:'STAGE', n:'Eighteen inches of plywood carrying all of your self-worth.'},
  {w:'KILLS', n:'What a comic does on a great night. Violent language, happy meaning.'},
  {w:'ROAST', n:'The format where insults are a love language.'},
  {w:'BEATS', n:'The pauses and turns inside a bit. Miss one and the laugh leaks out.'},
  {w:'PAUSE', n:'Timing’s secret weapon. The silence that makes the punchline hit.'},
  {w:'COMIC', n:'What stand-ups call each other. “Comedian” is for the tax forms.'},
  {w:'TIGHT', n:'As in a “tight five” — your best five minutes, no fat.'},
  {w:'LIGHT', n:'The flashlight from the back of the room that means: wrap it up.'},
  {w:'HACKS', n:'Comics who lean on tired premises. Airline food, anyone?'},
  {w:'BOMBS', n:'When a joke — or a whole set — dies in front of everyone.'},
  {w:'RIFFS', n:'Improvised tangents. The best ones become bits.'},
  {w:'QUIPS', n:'Short, sharp lines. The jab, not the haymaker.'},
  {w:'SPOTS', n:'Stage-time slots. Getting passed at a club means you get spots.'},
  {w:'HOSTS', n:'The MC keeps the show moving and warms up a cold room.'},
  {w:'DROLL', n:'Dry humor, delivered like it’s a weather report.'},
  {w:'IRONY', n:'Saying the opposite and meaning it. Handle with care.'},
  {w:'SNARK', n:'Sarcasm with an edge and an attitude.'},
  {w:'FARCE', n:'Comedy of escalating absurdity. Doors slam. Pants fall.'},
  {w:'SPOOF', n:'A parody that loves the thing it’s making fun of.'},
  {w:'GROAN', n:'The sound of a pun landing exactly as intended.'},
  {w:'SKITS', n:'Sketches — stand-up’s cousins who brought costumes.'},
  {w:'TOURS', n:'Life on the road: forty cities, one hoodie.'},
  {w:'CLUBS', n:'Brick walls, low ceilings, the best rooms on earth.'},
  {w:'MIMIC', n:'Impressions. Every comic has one they shouldn’t do.'},
  {w:'CLOWN', n:'Stand-up’s oldest ancestor. Show some respect.'},
  {w:'WITTY', n:'Quick, clever, and a little pleased with itself.'},
  {w:'JOKES', n:'The raw material. Write ten, keep one.'},
];
/* ---------- end PUNCHLINE DATA ---------- */


  const ROWS=6,L=5,board=$('#pl-board'),result=$('#pl-result');
  const kb=keyboard($('#pl-keys'),press);
  const CHEERS=['Standing ovation.','You killed.','Big laugh.','Solid set.','Got there.','Saved by the closer.'];
  let ans,guesses,scores,cur,done,busy,label;
  for(let r=0;r<ROWS;r++){const row=document.createElement('div');row.className='pl-row';row.setAttribute('role','row');for(let c=0;c<L;c++){const t=document.createElement('div');t.className='tile';t.setAttribute('role','gridcell');row.appendChild(t)}board.appendChild(row)}
  const tile=(r,c)=>board.children[r].children[c];
  const day=Math.floor((Date.now()-new Date(2026,0,1).getTime())/864e5);
  function start(idx,lbl){
    ans=PUNCHLINE_WORDS[((idx%PUNCHLINE_WORDS.length)+PUNCHLINE_WORDS.length)%PUNCHLINE_WORDS.length];
    guesses=[];scores=[];cur='';done=false;busy=false;label=lbl;
    $('#pl-label').textContent=lbl;result.hidden=true;kb.reset();
    $$('.tile',board).forEach(t=>{t.textContent='';t.className='tile';delete t.dataset.s});
  }
  function paint(pop){const r=guesses.length;for(let c=0;c<L;c++){const t=tile(r,c);t.textContent=cur[c]||'';t.classList.toggle('filled',!!cur[c])}
    if(pop){const t=tile(r,cur.length-1);t.classList.remove('pop');void t.offsetWidth;t.classList.add('pop')}}
  function score(g,a){const s=Array(L).fill('absent'),left={};
    for(let i=0;i<L;i++){if(g[i]===a[i])s[i]='correct';else left[a[i]]=(left[a[i]]||0)+1}
    for(let i=0;i<L;i++){if(s[i]!=='correct'&&left[g[i]]){s[i]='present';left[g[i]]--}}return s}
  function press(k){
    if(done||busy)return;
    if(k==='Enter')return submit();
    if(k==='Backspace'){cur=cur.slice(0,-1);return paint()}
    if(/^[A-Z]$/.test(k)&&cur.length<L){cur+=k;paint(true)}
  }
  function submit(){
    const r=guesses.length;
    if(cur.length<L){const row=board.children[r];row.classList.remove('shake');void row.offsetWidth;row.classList.add('shake');toast('Needs five letters');return}
    const g=cur,s=score(g,ans.w);guesses.push(g);scores.push(s);cur='';busy=true;
    s.forEach((st,i)=>setTimeout(()=>{const t=tile(r,i);t.classList.add('flip');setTimeout(()=>t.dataset.s=st,250)},i*260));
    setTimeout(()=>{busy=false;[...g].forEach((ch,i)=>kb.set(ch,s[i]));
      const win=g===ans.w;
      if(win){for(let i=0;i<L;i++)setTimeout(()=>tile(r,i).classList.add('win'),i*90);toast(CHEERS[r]);finish(true)}
      else if(guesses.length===ROWS){toast(ans.w,2600);finish(false)}
    },L*260+280);
  }
  function finish(win){
    done=true;const st=store.get('pl-stats',{played:0,wins:0,streak:0,max:0,dist:[0,0,0,0,0,0]});
    st.played++;if(win){st.wins++;st.streak++;st.max=Math.max(st.max,st.streak);st.dist[guesses.length-1]++}else st.streak=0;
    store.set('pl-stats',st);
    const top=Math.max(1,...st.dist);
    result.innerHTML=`<span class="kicker">${win?'You got it in '+guesses.length:'Tough room tonight'}</span>
      <h3>${win?CHEERS[guesses.length-1]:'The word was'}</h3>
      <div class="answer">${ans.w}</div><p>${esc(ans.n)}</p>
      <div class="stats"><div><b>${st.played}</b><span>Played</span></div><div><b>${Math.round(st.wins/st.played*100)}</b><span>Win %</span></div><div><b>${st.streak}</b><span>Streak</span></div><div><b>${st.max}</b><span>Best</span></div></div>
      <div class="dist">${st.dist.map((n,i)=>`<div><em>${i+1}</em><span class="${win&&i===guesses.length-1?'hi':''}" style="width:${Math.max(8,n/top*100)}%">${n}</span></div>`).join('')}</div>
      <div class="row-btns"><button class="btn" id="pl-share">Share result</button><button class="btn btn-primary" id="pl-again">Play another word</button></div>`;
    result.hidden=false;
    $('#pl-share').onclick=()=>copyText(`Heckle Punchline — ${label}\n${win?guesses.length:'X'}/6\n`+scores.map(s=>s.map(x=>x==='correct'?'■':x==='present'?'▣':'□').join('')).join('\n'));
    $('#pl-again').onclick=()=>{let i;do{i=Math.floor(Math.random()*PUNCHLINE_WORDS.length)}while(PUNCHLINE_WORDS.length>1&&PUNCHLINE_WORDS[i]===ans);start(i,'Bonus round')};
  }
  start(day,`Tonight's word · No. ${day+1}`);
  Games.punchline={onKey:k=>{if(k==='Enter'||k==='Backspace'||/^[A-Z]$/.test(k)){press(k);return true}return false}};
