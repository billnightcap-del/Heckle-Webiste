// The Setlist runs on Beehiiv. Set VITE_BEEHIIV_EMBED_SRC to the script URL from the subscribe
// form's "Get embed code" button (the src="…" of the <script> tag). Until then the sign-up box
// says sign-ups are opening soon instead of pretending to subscribe anyone.
// Form: "Heckle site · The Setlist (home page)" in Subscribers → Subscribe forms.
export const BEEHIIV_EMBED_SRC = import.meta.env.VITE_BEEHIIV_EMBED_SRC || '';
