# Heckle — Comedy Festival Finder prompt

Run this in any AI assistant with web search turned on (Claude with web search, etc.). Paste the JSON it returns into **Festivals → Add from the finder** on the Festivals page. Re-run weekly; the page merges by `id`, so re-runs update rather than duplicate.

---

## The prompt

```
You are a research assistant for Heckle, a comedy-culture publication. Today is {{TODAY}}.

GOAL
Find every comedy festival (stand-up, improv, sketch, storytelling, comedy film) that takes place between {{TODAY}} and 2026-12-31, anywhere in the world, plus any comedy festival whose performer submissions are OPEN or OPENING between now and 2026-12-31 (even if the festival itself is in 2027).

WHERE TO LOOK (search all of these, don't stop at the first list)
1. Festival aggregators: thejokebook.org/submissions, FilmFreeway (category: comedy), ComedyFinder.com, Chortle festival listings (UK), Comedy Festival Australia listings.
2. News: Variety, Deadline, Hollywood Reporter, Vulture, BroadwayWorld, Time Out, local alt-weeklies — search "comedy festival" + each of: October 2026, November 2026, December 2026.
3. City sweeps: "[city] comedy festival 2026" for the 40 largest US metros, plus London, Edinburgh, Dublin, Toronto, Montreal, Vancouver, Melbourne, Sydney, Auckland.
4. Ticketing: Ticketmaster, Eventbrite, Songkick searches for "comedy festival" in the date range.
5. Confirm every hit on the festival's OWN website. The official site wins over any listing.

RULES
- Only include a festival if you found a 2026 date on a page dated 2026 or on the official site. Never infer dates from past years.
- If the date is only known to the month, set "dateTBA": true and use the 1st of that month as "start".
- Submission status: read the festival's submissions page. Record the exact open and close dates if published. If the page says submissions are closed, set "subStatus": "closed". If lineups are booked by invitation only, "invite". If submissions are accepted year-round, "rolling". If you can't find it, "unknown". Never guess a deadline.
- "submitUrl" must be the direct submission page / form (FilmFreeway, Google Form, ComedyFinder, festival /submissions page), not the homepage.
- "site" is the official homepage (used to pull the festival's share image as art).
- "art": if the official site has an og:image or poster image URL, put the absolute URL here; otherwise null.
- Exclude single-headliner tours billed as "festivals" unless 3+ acts perform across multiple shows.
- Cite a source URL for every entry.

OUTPUT
Return ONLY a JSON array, no prose, matching this shape exactly:

[
  {
    "id": "new-york-comedy-festival-2026",      // kebab-case name + year
    "name": "New York Comedy Festival",
    "city": "New York, NY",
    "country": "US",
    "start": "2026-11-06",                       // YYYY-MM-DD, or null if unknown
    "end": "2026-11-15",                         // YYYY-MM-DD, same as start for one-day fests
    "dateTBA": false,
    "formats": ["Stand-up", "Podcasts", "Film"],
    "headliners": ["Marc Maron", "Ilana Glazer"], // up to 5, [] if none announced
    "site": "https://nycomedyfestival.com/",
    "submitUrl": "https://nycomedyfestival.com/submissions/",
    "subStatus": "closed",                       // open | closed | rolling | invite | unknown
    "subOpens": null,                            // YYYY-MM-DD or null
    "subCloses": null,                           // YYYY-MM-DD or null
    "fee": null,                                 // e.g. "$25 regular / $45 late", "Free", or null
    "art": null,                                 // absolute image URL or null
    "source": "https://variety.com/…"
  }
]

Sort by "start" ascending; entries with "start": null (submission-only watchlist) go last.
```

---

## How the page scores each entry (the formula)

Evaluated live against today's date, so statuses change on their own:

| Condition | Badge |
|---|---|
| `subStatus = invite` | Invite only |
| `subOpens` is in the future | Opens {date} |
| `subCloses` has passed, or `subStatus = closed` | Closed |
| `subCloses` ≤ 14 days away | Closing · N days left (highlighted) |
| `subCloses` > 14 days away | Open · closes {date} |
| `subStatus = open / rolling`, no date | Open · rolling |
| anything else | Check site |

Festival timing: `start` in the future → "In N days"; between `start` and `end` → "Happening now"; after `end` → hidden. Entries with no `start` appear in the Submission watchlist only.

## Art

1. `art` field from the prompt (if present).
2. Otherwise the page asks Microlink (free, no key) for the `site`'s share image / logo and caches it in the browser.
3. Otherwise a typographic Heckle poster is drawn.
