# CPO · Mic verification system + festival fee check — plan and blockers · 2026-10-01

**Summary.** The operator answered the scoping questions: cut mics to 5 cities, verify mics from
recent posts (6 months old or newer, naming the venue and how often the mic runs), show
"verified still running" with the date, and check every festival's own site for its fee, or its
deadline if the fee isn't published. Two blockers stop the work this run. (1) This cloud
session's network policy blocks the festival sites and thereitispod.com, so nothing could be
checked on an official page. (2) Automated scraping of Instagram and Facebook breaks Meta's terms
and the written rule in `CLAUDE.md`. This session also has no access to the operator's logged-in
Chrome. Below is the verification design that works without scraping Meta, plus what is needed
to unblock the festival check.

## Festivals: what happened
- Fetch attempts on 2026-10-01 were all refused by the environment's egress proxy
  (`EGRESS_BLOCKED`): thereitispod.com, mfcomedy.com, laughafterdarkcomedyfest.com, tccfest.org,
  nycomedyfestival.com, thejokebook.org.
- One web search (Laugh After Dark) returned a summary of fees and deadlines ($29–$49, closing
  2026-06-30). It is a search-engine summary, not a read of the festival's own page, so it is
  **NOT verified** and is not recorded as a fee. It does suggest submissions are already closed
  for the 2026 edition (festival 2026-10-26 → 10-28).
- Status of all 8 festivals: fee UNKNOWN, pay UNKNOWN, deadline not re-checked.
- To unblock: allow these domains in the environment's network settings (or set a broader access
  level), then re-run: thereitispod.com, each festival's domain in `src/festivals/main.jsx` SEED,
  and any festival domains thereitispod's monthly lists point to.

## Festival check rule (operator, 2026-10-01)
Record a fee only if it's on the festival's own page, with URL and check date. If no fee is
published, a deadline verified on the festival's own page is enough to list it; the fee stays
"Fee not published". thereitispod.com is a lead source: it can find festivals, but each fee or
deadline is confirmed on the festival's own site before it's listed.

## Mics: verification design (draft, needs operator OK on two points)

### Evidence rule (from the operator)
A mic counts as **Verified still running** when there's a post or listing that:
1. is dated 6 months or less before the check date,
2. names the venue, and
3. says how often it runs (weekly, every Tuesday, 1st and 3rd Monday, …).
The card shows: `✓ Verified running · checked <date> · source: <post date, platform>`.
When the newest evidence passes 6 months, the card drops to "Unconfirmed" and goes on the stale
queue. Listings with no qualifying evidence are not shown.

Unwelcome point: a post from 5 months ago proves a mic *was* running 5 months ago, not that
it runs tonight. I'd show the **evidence date** on the card, not just "verified", and keep the
30-day stale queue for anything whose newest evidence is older than 30 days, so the
evidence gets refreshed or chased.

### Sources, by how we can use them
| Source | Automated collection OK? | How |
| --- | --- | --- |
| Eventbrite | Check terms first; their public event search API was retired in 2020 | Manual lookup, or an agent reading public event pages if the terms allow |
| City "things to do" / alt-weekly calendars | Depends on each site's terms | Agent reads public pages; record URL + date |
| Venue and host websites | Usually fine for reading public pages | Agent reads public pages |
| Instagram / Facebook | **No.** Meta's terms prohibit automated collection, and `CLAUDE.md` forbids it | A person looks at posts in their own browser and pastes the post URL + date into a log; or hosts submit through the form with a link to their own post |

The IG/FB route a person runs by hand is a lookup, not scraping. It stays within the rule and is
probably where most mics are advertised. Per city that's maybe an hour a month: UNKNOWN until
the first city is done. Caveat: this only works while someone does it, which fails the universal
"works on a week the operator is unavailable" test. The host submit form is the fallback that
keeps running without anyone driving it.

### Data shape (for CTO, who owns the feed)
Each mic in `public/open-mics.json` adds:
`evidence: [{ url, platform, postDate, frequencyText, venueText, checkedOn, checkedBy }]`,
and `status` is derived as `verified` (newest evidence ≤ 6 months), `stale`, or `reported-closed`.

### What's needed from the operator
1. **Which 5 cities.** City choice is the operator's call under the CPO seat block.
2. **Instagram/Facebook:** keep the rule (manual lookup + host submissions, as above), or knowingly
   override it. Overriding means accepting a terms-of-service risk on the public repo and site.
   Either way, this cloud session can't reach a logged-in Chrome.
3. **Network:** allow festival domains + Eventbrite + the chosen cities' calendar sites.

## Unknown
- All 8 festival fees, pay terms and deadlines: UNKNOWN (sites unreachable 2026-10-01).
- Mic counts for any city: UNKNOWN until cities are chosen and checked.
