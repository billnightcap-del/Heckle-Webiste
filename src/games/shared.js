/* ============================================================
   SHARED — keyboard routing, on-screen keyboard, toasts, storage
   ============================================================ */
import { track } from '../shared/analytics.js';
export { track };

export const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
export const store = { get(k, d) { try { const v = localStorage.getItem('heckle-games:' + k); return v == null ? d : JSON.parse(v) } catch (e) { return d } }, set(k, v) { try { localStorage.setItem('heckle-games:' + k, JSON.stringify(v)) } catch (e) { } refreshStatus() } };
export const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]] } return a };
export const pick = a => a[Math.floor(Math.random() * a.length)];
const ICON_DEL = '<svg class="icon" viewBox="0 0 24 24"><path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/><path d="m12 9 6 6"/><path d="m18 9-6 6"/></svg>';
export function toast(msg, ms = 1700) { const t = document.createElement('div'); t.className = 'toast-msg'; t.textContent = msg; $('#toast').appendChild(t); setTimeout(() => t.remove(), ms) }
export function copyText(txt) { (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => toast('Copied — go brag')).catch(() => { const ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); toast('Copied — go brag') } catch (e) { toast('Couldn’t copy') } ta.remove() }) }
export function keyboard(el, onKey, opt = {}) {
  const rows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'], keys = {}, rank = { absent: 1, present: 2, correct: 3 };
  el.innerHTML = '';
  const mk = (k, label, cls, aria) => { const b = document.createElement('button'); b.type = 'button'; b.className = 'key ' + (cls || ''); b.innerHTML = label; if (aria) b.setAttribute('aria-label', aria); b.addEventListener('click', () => { onKey(k); b.blur() }); return b };
  rows.forEach((r, i) => {
    const row = document.createElement('div'); row.className = 'kb-row';
    if (i === 1) { const s = document.createElement('span'); s.className = 'kb-spacer'; row.appendChild(s) }
    if (i === 2 && opt.enter !== false) row.appendChild(mk('Enter', 'Enter', 'wide'));
    [...r].forEach(ch => row.appendChild(keys[ch] = mk(ch, ch)));
    if (i === 1) { const s = document.createElement('span'); s.className = 'kb-spacer'; row.appendChild(s) }
    if (i === 2) row.appendChild(mk('Backspace', ICON_DEL, 'wide', 'Delete'));
    el.appendChild(row)
  });
  return { set(ch, s) { const k = keys[ch]; if (!k) return; if ((rank[s] || 0) > (rank[k.dataset.s] || 0)) k.dataset.s = s }, reset() { Object.values(keys).forEach(k => delete k.dataset.s) } };
}

/* Physical keyboard goes to whichever game you last touched, or the one on screen. */
export const Games = {}; export let current = 'punchline';
const played = new Set();
function setActive(id) { if (!document.getElementById(id)) return; current = id; $$('.game').forEach(s => s.classList.toggle('active', s.id === id)) }
/* First real interaction with a game in this visit counts as a play (analytics). */
const markPlayed = id => { if (id && !played.has(id)) { played.add(id); track('game_play', { game: id }) } };
['pointerdown', 'focusin'].forEach(ev => document.addEventListener(ev, e => { const s = e.target.closest && e.target.closest('.game'); if (s) { setActive(s.id); if (ev === 'pointerdown') markPlayed(s.id) } const j = e.target.closest && e.target.closest('[data-set]'); if (j) setActive(j.dataset.set) }, true));
let raf = 0; window.addEventListener('scroll', () => {
  if (raf) return; raf = requestAnimationFrame(() => {
    raf = 0; const h = innerHeight, a = document.getElementById(current).getBoundingClientRect();
    if (a.bottom > h * .3 && a.top < h * .7) return; let best = null, bd = 1e9; $$('.game').forEach(s => { const r = s.getBoundingClientRect(), d = Math.abs((r.top + r.bottom) / 2 - h / 2); if (r.bottom > 0 && r.top < h && d < bd) { bd = d; best = s.id } }); if (best) setActive(best)
  })
}, { passive: true });
document.addEventListener('keydown', e => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.target.matches('input,textarea,select')) return;
  const g = Games[current]; if (!g || !g.onKey) return;
  const k = e.key.length === 1 ? e.key.toUpperCase() : e.key;
  if (/^[A-Z]$/.test(k) || ['Enter', 'Backspace', 'Delete', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(k)) {
    if (e.target.matches('button') && (k === 'Enter' || k === ' ')) return;
    if (g.onKey(k === 'Delete' ? 'Backspace' : k, e) !== false) { e.preventDefault(); markPlayed(current) }
  }
});

/* Puzzle counts shown in the jump list; each game module fills in its own. */
export const totals = { callbacks: 3, shortset: 2 };
export function refreshStatus() {
  const set = (id, t, on) => { const el = document.getElementById('st-' + id); if (el) { el.textContent = t; el.classList.toggle('on', !!on) } };
  const pl = store.get('pl-stats', null); set('punchline', pl && pl.streak ? `Streak ${pl.streak}` : 'Play now', pl && pl.streak);
  const cb = store.get('cb-solved', []); set('callbacks', `${cb.length}/${totals.callbacks} solved`, cb.length);
  const xw = Object.keys(store.get('xw-best', {})); set('shortset', `${xw.length}/${totals.shortset} solved`, xw.length);
  const al = store.get('al-done', 0); set('adlibs', al ? `${al} performed` : '5 bits', al);
  const po = store.get('po-best', 0); set('punoff', po ? `Best ${po} pts` : 'Play now', po);
  const bz = store.get('bz-best', {}), bzn = Object.keys(bz).length; set('buzz', bzn ? `${bzn} hive${bzn > 1 ? 's' : ''} started` : 'Play now', bzn);
  const sp = (store.get('sp-board', []) || []).filter(x => x.mine).length; set('setpunch', sp ? `${sp} punch${sp > 1 ? 'es' : ''} up` : 'Vote now', sp);
}
