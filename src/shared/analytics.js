// Google Analytics 4. Off until VITE_GA_ID is set (e.g. G-XXXXXXXXXX in .env or the host's
// build settings), so local and preview builds send nothing.
// Events answer the charter's key question: do game players come back the next week?
//   game_play      { game }            first interaction with a game in a page visit
//   game_complete  { game, result }    a round finished (win / loss / revealed / performed / scored)
//   joke_submit, mic_submit, festival_submit_click
const GA_ID = import.meta.env.VITE_GA_ID;

if (GA_ID && typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
  document.head.appendChild(s);
}

export function track(event, params = {}) {
  if (GA_ID && window.gtag) window.gtag('event', event, params);
}
