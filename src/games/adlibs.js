/* ============================================================
   GAME 04 — AD-LIBS (fill-in-the-blank stand-up bits)
   ============================================================ */
import { $, $$, store, esc, pick, copyText, Games } from './shared.js';

/* ---------- AD-LIBS DATA ----------
   fields: [label shown to player, word-bank key for "fill for me", placeholder hint]
   bit:    paragraphs; {0}, {1}… insert the player's words by field index.
           Reusing an index later in the bit is how the callback lands. */
const ADLIBS_TEMPLATES = [
  { title:'Budget Air', style:'Observational', blurb:'A comic just got off a flight and has thoughts. So many thoughts.',
    fields:[['Adjective','adjective','e.g. soggy'],['Number','number','e.g. 12'],['Noun','noun','e.g. accordion'],['Body part','bodypart','e.g. elbow'],['Adjective','adjective','e.g. sweaty'],['Food (plural)','foods','e.g. pickles'],['Animal','animal','e.g. ferret'],['Verb ending in -ing','verbing','e.g. yodeling'],['Celebrity','celebrity','e.g. Oprah']],
    bit:['Good evening! I just flew in, and boy, are my arms {0}. That’s the joke. That’s the whole joke. I’ve been doing it for {1} years and I am not stopping now.',
         'I flew Budget Air. You know Budget Air? Their slogan is “We’ll get you there. Eventually.” They charged me an extra fee to bring a {2}. A {2}! I said, ma’am, that’s not luggage, that’s emotional support. She looked me dead in the eye and said, “Sir, that {2} has a {3}.”',
         'Mid-flight, the attendant comes by — very {4}, very professional — and hands me two {5} in a bag. Two! I haven’t been handed that little since I was a baby {6}.',
         'Then the pilot comes on: “Folks, we’re going to be {7} for the next forty minutes.” Nobody knows what that means. The guy next to me starts praying. To {8}.',
         'Anyway, I’m here now. You’ve been great. Tip your bartenders, and never, ever check a {2}.'] },
  { title:'Front Row', style:'Crowd work', blurb:'The comic picks on one guy up front. It does not go the way anyone planned.',
    fields:[['First name','name','e.g. Doug'],['Job title','job','e.g. dentist'],['Adjective','adjective','e.g. damp'],['Plural noun','plural','e.g. canoes'],['Verb (past tense)','verbpast','e.g. licked'],['Town or city','place','e.g. Boise'],['Number','number','e.g. 7'],['Noun','noun','e.g. trombone'],['Exclamation','exclaim','e.g. Yowza']],
    bit:['Let’s see who we’ve got up front. Sir, what’s your name? {0}? {0}. Okay. Strong name. Sounds like a guy who owns a boat he doesn’t know how to drive.',
         'What do you do, {0}? You’re a {1}? A {1}! Folks, give it up — that’s the first {1} I’ve ever seen out on a school night.',
         'Is it hard? Be honest. You look {2}. You look like a man who has {4} a lot of {3} and regretted every single one.',
         'Where are you from? {5}? I did a show in {5} once. {6} people. {6}! One of them was my mom, and she left early to “beat traffic.” In {5}. There’s one road in {5} and it’s shaped like a {7}.',
         '{8}! I love this guy. Everybody, {0} the {1}! He’s buying the next round.'] },
  { title:'Dad Joined the Internet', style:'Family', blurb:'A tender portrait of a seventy-one-year-old man and his phone.',
    fields:[['Adjective','adjective','e.g. greasy'],['Plural noun','plural','e.g. spatulas'],['Made-up app name','app','e.g. Snorbl'],['Verb','verb','e.g. wobble'],['Adverb','adverb','e.g. aggressively'],['Food','food','e.g. a rotisserie chicken'],['Noun','noun','e.g. leaf blower'],['Feeling (adjective)','feeling','e.g. lonely'],['Adjective','adjective','e.g. haunted']],
    bit:['My dad just discovered the internet. He’s seventy-one. It’s like watching a {0} raccoon find a buffet.',
         'He texts me every morning. No words. Just a link to an article called “Ten {1} That Will Change Your Life.” Dad, I’m forty. Nothing is changing my life. I’m load-bearing now.',
         'Last week he downloaded an app called {2}. I don’t know what it does. He doesn’t know what it does. But every night at nine it makes him {3}, and he does it {4}, in the kitchen, holding {5}.',
         'He signs his texts. “Love, Dad.” I know it’s you, Dad. It says DAD at the top. He also signs his voicemails, which are four minutes of him breathing near a {6}.',
         'But I get it. He’s {7}. We all are. Yesterday he looked at me and said, “Son, I think the computer is {8}.” And honestly? {2} agrees.'] },
  { title:'The Closer', style:'Big finish', blurb:'The last bit of the night, with a callback so strong it circles back twice.',
    fields:[['Noun','noun','e.g. pelican'],['Adjective','adjective','e.g. moist'],['Celebrity','celebrity','e.g. Danny DeVito'],['Verb','verb','e.g. moonwalk'],['Plural noun','plural','e.g. lamps'],['Body part','bodypart','e.g. kneecap'],['Room in a house','room','e.g. pantry'],['Silly word','silly','e.g. Bazinga']],
    bit:['Okay, this is my last one. You’ve been a {1} crowd. Genuinely. Weirdly {1}. Somebody check the air vents.',
         'Earlier I promised I’d tell you about the time I met {2}. I lied. I didn’t meet {2}. I met a guy in a {0} costume who said he knew {2}. Close enough. He told me one thing: “Never {3} in the {6}.”',
         'I didn’t listen. Who listens to a {0}? So I went home, walked into the {6}, and I started to {3}. Hard. Knocked over three {4}. Sprained my {5}. My roommate walked in and said one word: “{7}.”',
         'And that’s when I knew. That wasn’t a guy in a {0} costume. That was a prophet.',
         'My name’s on the sign out front. Remember it. And never, ever {3} in the {6}. Goodnight!'] },
  { title:'Tuesday Open Mic', style:'Host intro', blurb:'The MC introduces the next comic with a little too much honesty.',
    fields:[['Adjective','adjective','e.g. sticky'],['Verb ending in -ing','verbing','e.g. sobbing'],['Noun','noun','e.g. fire extinguisher'],['Number','number','e.g. 3'],['Adjective','adjective','e.g. crunchy'],['Plural noun','plural','e.g. crossbows'],['Animal (plural)','animals','e.g. hamsters'],['Comic’s name','name','e.g. Big Terry']],
    bit:['Alright, alright, welcome back to Tuesday Open Mic — officially the city’s most {0} night of comedy. We have twenty-eight comics signed up and one working microphone, so let’s move.',
         'Rules: five minutes each. When you see the light, wrap it up. When you see me {1}, you’re way over. When you see the {2}, run.',
         'Our next comic has been doing stand-up for {3} weeks. He’s performed at bars, laundromats, and one funeral that he says went “{4}.” His hobbies include {5}, arguing online, and telling you about his podcast.',
         'He’s asked me to say he’s “working out new material,” which is comic for “please do not film this.”',
         'Put your hands together — gently, like you’re holding two baby {6} — for {7}!'] },
];
const ADLIBS_WORDBANK = {
  adjective:['soggy','majestic','crunchy','suspicious','moist','haunted','buttery','feral','lukewarm','sparkly','deeply confused','clammy','legally distinct'],
  noun:['accordion','leaf blower','canoe','ottoman','rotisserie chicken','trombone','lava lamp','kayak','bowling ball','inflatable flamingo','fax machine'],
  plural:['spatulas','ferrets','crossbows','lamps','bagpipes','rubber ducks','timeshares','scented candles','traffic cones','nunchucks'],
  bodypart:['elbow','kneecap','earlobe','left nostril','pinky toe','spleen','eyebrow','ankle'],
  foods:['pickles','croutons','meatballs','grapes','marshmallows','pretzels','olives'],
  food:['a rotisserie chicken','a baguette','a single grape','a family-size lasagna','a cold burrito','a wheel of brie'],
  animal:['ferret','pelican','goat','raccoon','alpaca','iguana','possum','walrus'],
  animals:['hamsters','ducklings','hedgehogs','kittens','penguins','piglets'],
  verb:['yodel','moonwalk','wobble','vacuum','breakdance','gargle','juggle','salsa dance'],
  verbing:['yodeling','sobbing','breakdancing','gargling','vacuuming','doing lunges','whistling'],
  verbpast:['licked','juggled','alphabetized','adopted','sued','befriended','microwaved'],
  adverb:['aggressively','tenderly','sideways','menacingly','with confidence','in slow motion','competitively'],
  number:['3','7','12','40','99','250','1,000','a dozen'],
  name:['Doug','Big Terry','Linda','Kevin','Marisol','Gary','Priya','Tad'],
  job:['dentist','lifeguard','notary public','substitute teacher','mall Santa','accountant','beekeeper'],
  place:['Boise','Tulsa','Duluth','Scranton','Fresno','Albuquerque','Gary, Indiana'],
  celebrity:['Oprah','Danny DeVito','Dolly Parton','Keanu Reeves','Martha Stewart','Guy Fieri'],
  exclaim:['Yowza','Holy moly','Sweet mercy','Great Scott','Hot dog','Oh my stars'],
  room:['pantry','garage','guest bathroom','laundry room','basement','attic'],
  silly:['Bazinga','Flibbertigibbet','Wowzers','Kablooey','Shabadoo','Skadoosh'],
  app:['Snorbl','Wiggr','Dadbase','Flumo','Grindstone','Pebblr'],
  feeling:['lonely','thrilled','overwhelmed','hopeful','ashamed','hungry','vibrating'],
};
/* ---------- end AD-LIBS DATA ---------- */


  const body=$('#al-body');let ti=0,T,vals=[];
  const MIC='<svg class="icon" viewBox="0 0 24 24"><path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/></svg>';
  function picker(){$('#al-picker').innerHTML=ADLIBS_TEMPLATES.map((t,i)=>'<button class="pick" aria-pressed="'+(i===ti)+'" data-i="'+i+'">'+esc(t.title)+'</button>').join('');
    $$('#al-picker .pick').forEach(b=>b.onclick=()=>form(+b.dataset.i,true,true))}
  function meter(){const n=vals.filter(v=>String(v).trim()).length,m=$('#al-meter');if(!m)return;m.style.width=(n/T.fields.length*100)+'%';$('#al-count').textContent=n+' of '+T.fields.length+' blanks filled';}
  function form(i,fresh,focus){
    ti=i;T=ADLIBS_TEMPLATES[i];if(fresh)vals=T.fields.map(()=>'');picker();
    body.innerHTML='<div class="al-grid"><div class="al-form"><div class="al-fields">'+T.fields.map((f,j)=>'<div class="field"><label for="al-'+j+'">'+esc(f[0])+'<em>'+(j+1)+'/'+T.fields.length+'</em></label><input class="input'+(String(vals[j]).trim()?' has':'')+'" id="al-'+j+'" data-j="'+j+'" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="'+esc(f[2])+'" value="'+esc(vals[j])+'"></div>').join('')+'</div>'
      +'<div class="row-btns"><button class="btn btn-primary" id="al-go">'+MIC+'Take the stage</button><button class="btn" id="al-fill">Fill the rest for me</button></div>'
      +'<p class="al-note">Leave any blank empty and we’ll heckle one in for you.</p></div>'
      +'<aside class="al-card"><span class="kicker">'+esc(T.style)+'</span><h3>'+esc(T.title)+'</h3><p>'+esc(T.blurb)+'</p><div class="meter"><span id="al-meter"></span></div><span class="al-count" id="al-count"></span><span class="al-note">The bit stays hidden until you take the stage.</span></aside></div>';
    $$('.input',body).forEach(inp=>{inp.oninput=()=>{vals[+inp.dataset.j]=inp.value;inp.classList.toggle('has',!!inp.value.trim());meter()};
      inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();const n=$('#al-'+(+inp.dataset.j+1));n?n.focus():show()}}});
    $('#al-fill').onclick=()=>{fill();$$('.input',body).forEach((inp,j)=>{inp.value=vals[j];inp.classList.add('has')});meter()};
    $('#al-go').onclick=show;meter();
    if(focus&&matchMedia('(hover:hover)').matches)setTimeout(()=>{const f=$('#al-0');f&&f.focus({preventScroll:true})},50);
  }
  function fill(){T.fields.forEach((f,j)=>{if(!String(vals[j]).trim())vals[j]=pick(ADLIBS_WORDBANK[f[1]]||ADLIBS_WORDBANK.noun)})}
  function show(){
    fill();store.set('al-done',store.get('al-done',0)+1);
    const html=T.bit.map((p,k)=>'<p style="animation-delay:'+(.4+k*.6)+'s">'+esc(p).replace(/\{(\d+)\}/g,(m,n)=>'<mark>'+esc(String(vals[+n]).trim())+'</mark>')+'</p>').join('');
    body.innerHTML='<div class="stage"><div class="bulbs" style="position:absolute;left:0;right:0;top:0" aria-hidden="true"></div><span class="kicker" style="margin-top:6px">'+MIC+'Now performing</span><h3>'+esc(T.title)+'</h3><div class="bit">'+html+'</div>'
      +'<span class="sign" style="opacity:0;animation:line .5s ease '+(.6+T.bit.length*.6)+'s forwards">Thank you, you’ve been great!</span>'
      +'<div class="row-btns" style="margin-top:6px"><button class="btn btn-primary" id="al-encore">Encore: new words</button><button class="btn" id="al-edit">Tweak my words</button><button class="btn" id="al-copy">Copy the bit</button><button class="btn" id="al-next">Next bit</button></div></div>';
    const y=$('#adlibs').getBoundingClientRect().top+scrollY-70;window.scrollTo({top:y,behavior:'smooth'});
    $('#al-encore').onclick=()=>form(ti,true,true);$('#al-edit').onclick=()=>form(ti,false,true);$('#al-next').onclick=()=>form((ti+1)%ADLIBS_TEMPLATES.length,true,true);
    $('#al-copy').onclick=()=>copyText(T.title.toUpperCase()+'\n\n'+T.bit.map(p=>p.replace(/\{(\d+)\}/g,(m,n)=>String(vals[+n]).trim())).join('\n\n'));
  }
  form(0,true,false);
  Games.adlibs={};
