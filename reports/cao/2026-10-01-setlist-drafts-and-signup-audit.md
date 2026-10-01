# The Setlist: five draft issues + sign-up placement audit

**CAO · 2026-10-01**

**Summary.** Five draft issues of The Setlist, Fri Oct 2 to Tue Oct 6, 2026. The operator set
the format on 2026-10-01: daily, minimum 3 items, maximum 20, and every issue needs one tool item.
The drafts use only what is real and sourced in this repo: Set of the Week (Rosebud Baker,
Don't Tell Comedy), festival dates and lineups from the Festival Tracker seed (each one has a
source URL in `src/festivals/main.jsx`), real special titles from the Specials Index (no scores),
and the games. No issue names a specific mic, because mic listings are still sample data. The
mic item points to the Open Mic Finder instead. This container's network policy blocks festival
and streaming sites, so nothing could be re-checked at the source today. Items found only
through search snippets are in a **Hold** box, not in the issues. The audit found the sign-up
prompt on 2 of 5 pages (home and Game Night). Specials, Festival Tracker, Open Mics and every
game end screen have none. On the home page it's the 2nd-to-last section, and its copy still
promises "Five items."

---

## Format (locked unless the operator changes it)

- **Subject line:** one hook, written for someone who has never heard of Heckle.
- **Items:** 3 to 20, each with a kicker (SET OF THE WEEK / TOOL / FESTIVALS / VAULT / PLAY), one
  or two lines, and one link.
- **Tool item:** at least one per issue (a mic, a deadline, a festival this week). It never names
  a mic until the feed is real. It never states a fee or pay term unless that was verified on
  the festival's own page.
- **Footer:** "Forward this to the comic who still uses a paper sign-up sheet." Beehiiv adds
  the unsubscribe and address lines.
- **Rule for every item:** a source link is on file, or the item doesn't run.

---

## Issue 1 · Fri Oct 2

**Subject:** Rosebud Baker, a couples therapist, and a festival that starts tonight

1. **SET OF THE WEEK** · Rosebud Baker, *Why Women Commit Crimes*, on Don't Tell Comedy's channel.
   A traitorous couples therapist and being the breadwinner. Released Sep 28. → Watch on YouTube
   *(source: home page Set of the Week, `src/home/template.jsx`. Chosen by the operator.)*
2. **FESTIVALS · TOOL** · Ha Ha Harvest Comedy Festival runs this weekend, Oct 2–4, in Jersey
   City and Hoboken. Submissions are closed, so this one's for watching, not for applying. →
   Festival Tracker *(source: thejokebook.org/submissions, via the Tracker seed)*
3. **PLAY** · Today's Punchline is live. One word, and your streak is on the line. → Game Night
4. **TOOL** · Looking for stage time this weekend? → Open Mic Finder. *(Points to the tool only;
   no mic is named.)*

## Issue 2 · Sat Oct 3

**Subject:** Seven games, no ticket minimum

1. **PLAY** · Seven games on Game Night: Punchline, Callbacks, Short Set, Ad-Libs, Pun-Off,
   Setup / Punch, Buzz Words. Start with Short Set if you've never played. → Game Night
2. **VAULT** · *Bring the Pain*, Chris Rock, 1996, HBO. Where the index starts. → Specials Index *(title, year and network are real; no score is shown)*
3. **TOOL · FESTIVALS** · Next weekend there are two at once: Mountain Fresh (Summit County and
   Georgetown, CO, Oct 8–10) and Atlantic City Comedy Festival (Oct 9–10, invite only). →
   Festival Tracker *(sources: mfcomedy.com; boardwalkhall.com, via the Tracker seed)*

## Issue 3 · Sun Oct 4

**Subject:** The Catskills are doing comedy now

1. **FESTIVALS · TOOL** · Catskills Comedy Festival, Catskill, NY, Oct 16–18. The lineup includes
   Ophira Eisenberg, Jocelyn Chia and Raanan Hershberg. Submission status is UNKNOWN, and the
   Tracker says so instead of guessing. → Festival Tracker *(source: tccfest.org, via the Tracker
   seed)*
2. **VAULT** · Two from last year: Bill Burr, *Drop Dead Years* (2025, Hulu), and Marc Maron,
   *Panicked* (2025, HBO). → Specials Index
3. **PLAY** · Setup / Punch: you land it, the room votes. → Game Night *(Votes are saved in each
   visitor's own browser, so don't promise a shared leaderboard.)*

## Issue 4 · Mon Oct 5

**Subject:** Monday: find a mic before the week finds you

1. **TOOL** · New week, new list. Find tonight's mic before the sign-up sheet fills. → Open Mic Finder *(No mic is named. Once
   the feed is live, this becomes three verified mics in the launch cities.)*
2. **SET OF THE WEEK** · Last call on Rosebud Baker's Don't Tell set before next week's pick. →
   YouTube
3. **FESTIVALS** · The New York Comedy Festival runs Nov 6–15. The announced lineup includes Marc
   Maron, Ilana Glazer, Ziwe, Sarah Sherman & Patti Harrison, and Daniel Sloss. Submissions are
   closed. → Festival Tracker *(source: Variety's 2026 lineup story, via the Tracker seed)*
4. **PLAY** · Callbacks, Show No. 1. → Game Night

## Issue 5 · Tue Oct 6

**Subject:** Three weeks to Vegas

1. **FESTIVALS · TOOL** · Laugh After Dark ComedyFest, Las Vegas, Oct 26–28: screenings, tapings
   and stand-up. Submissions closed Jun 30. Bookmark it for next year. → Festival Tracker
   *(source: laughafterdarkcomedyfest.com/submissions, via the Tracker seed)*
2. **VAULT** · *Get on Your Knees*, Jacqueline Novak, 2024, Netflix. → Specials Index
3. **PLAY** · Buzz Words, Hive No. 1. → Game Night

---

## Hold: verify on the festival's own page before any of these run

Found only in search-result snippets on 2026-10-01. They have not been seen on the festivals' own
sites, because the container blocks those sites. Fees are left out on purpose.

| Item | Claimed | Seen in | Status |
| --- | --- | --- | --- |
| Knockouts Women's Comedy Festival (NYC, Mar 2027) submissions | close Oct 20, 2026 | search snippet citing thejokebook.org | HOLD: confirm at knockoutsfestival.com |
| Vice City Comedy Festival (Miami, Feb 25–27, 2027) submissions | close Oct 31, 2026 | search snippet | HOLD: confirm on the official site |
| 38th LA Comedy Film Festival, final deadline | Oct 16, 2026 | search snippet, lafilmfestivals.com | HOLD: confirm |
| Winnipeg Comedy Festival submissions | Oct 15 | search snippet (year not stated) | HOLD: the year is unclear |
| Ladies Room Comedy Festival submissions | late window Sep 15–Oct 15 | snippet that may be the 2025 cycle | HOLD: probably stale |
| Netflix October specials: Zainab Johnson, *Toxically Optimistic*; Mojo Brookzz, *I Know You Lying*; doc *Norm: The Tale of Norm Macdonald* | October 2026, dates UNKNOWN | search snippet from listings articles | HOLD: confirm dates on Netflix |

These deadlines are the strongest tool items available this week. Each one needs one verified
look at the festival's own page. That can be done by the operator, or by a session whose network
allows those sites.

---

## Sign-up placement audit (code as of `main`, 2026-10-01)

| Page | Sign-up prompt now | Where it should go | Priority |
| --- | --- | --- | --- |
| Home (`index.html`) | Nav "Subscribe" button → `#setlist`. The Beehiiv form is in the 2nd-to-last section, under the fold. | Keep both. Add one inline prompt right after Set / Bomb of the Week, the section most likely to be read. | Medium |
| Game Night (`games.html`) | One "Get The Setlist" block at the bottom of the page, linking to `./#setlist` (sends people off the page). | A prompt on **every game's end screen** ("Tomorrow's word drops at 7 a.m."). Embed the form on the page instead of linking away. | **High.** It drives week-2 return, which is half the north star. |
| Specials Index (`specials.html`) | None | After the first results grid, plus a line in the filters ("New specials every morning in The Setlist"). | High |
| Festival Tracker (`festivals.html`) | None | Next to each "Submit now" link: "Get deadlines before they close." | **High.** The most comic-relevant hook we have. |
| Open Mic Finder (`open-mics.html`) | None | Under the results list and on the empty state. | High |
| Game end screens (7) | None | One shared end-screen block in `src/games/shared.js`. | High |

**Copy problems found:**
- The home page says "Tour drops, new specials, and the one clip worth your minute. **Five
  items**, every morning." The format is now 3–20 items. Suggested: "New specials, festival
  deadlines, a mic for tonight, and the set worth your minute. Every morning, 7 a.m." "Tour drops"
  is general-news territory we don't compete in.
- Every page except home has no form at all. Today, only the home page Beehiiv form can produce a
  subscriber.

**How to build it (handed to CTO as a PR, not done here):** turn the home page `BeehiivForm` into
a small `SetlistSignup` block that takes `source` (page name) and `variant` (inline / end-screen).
Use it on all five pages and in the shared game end screen, and send `track('setlist_signup_view'
| 'setlist_signup_submit', { source })` so GA4 shows which page produces subscribers. Game Night
isn't React, so it needs a plain-DOM version of the same embed.

---

## Unknown / not measurable yet

- **Subscribers:** UNKNOWN. The Beehiiv form goes live with the site, and there's no count yet.
- **Open rate / week-2 return:** not measurable until the first sends go out and GA4 has 14 days
  of data.
- **Set / Bomb of the Week metrics:** retention and average view duration are visible only to
  the channel owner. The operator said on 2026-10-01 to "take into account what viewer
  information you can." Publicly visible: views, likes, comment count and upload date. The
  selection rule (views against the channel's own average for videos of the same age) is with
  CCO.

## What I'm still missing to do this well

1. Network access to festival sites, YouTube and streaming sites (environment network setting),
   so deadlines can be verified at the source.
2. The mic feed (CTO) and the fewer-than-10 launch cities (operator).
3. A decision on where drafts live: Beehiiv drafts or this public repo.
4. A `/setlist` skill. This is daily work done the same way every time, so it should be written
   down once the format settles.
