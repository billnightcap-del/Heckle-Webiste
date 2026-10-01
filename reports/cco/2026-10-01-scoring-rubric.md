# CCO · Specials scoring rubric + sample-data flags · 2026-10-01

**Summary.** This is the first draft of the Heckle Score: a 0–100 composite that sets the Killed /
Solid / Bombed badge across the whole site. Bands follow the operator's call: **Killed 90+, Solid
61–89, Bombed 60 and under.** The score combines five parts: aggregator critic scores, a tally of
named reviews, aggregator audience ratings, YouTube engagement measured against channel size, and
Heckle visitor votes. Each part goes in only when it has a source, a link and a retrieval date.
If a special doesn't meet the minimum evidence, it shows **Not rated yet**, never a number. Two of
the inputs the operator asked for can't be used as described. YouTube dislikes have been private
since 13 Dec 2021, and per-video watch time is visible only to the uploader. Rotten Tomatoes has
no self-serve API, and one third-party source puts its paid licence at $60K+ a year (unconfirmed).
The rubric below works around all three. **Every one of the 139 Specials Index entries, and all 6
home-page "Ranked" entries, currently carries a sample score.** The full list is at the end. No real
score exists anywhere on the site today.

## Operator decisions this run (2026-10-01)
- The badge is a composite of online ratings, reviews and opinion, and YouTube engagement and
  reach. CCO designs the rubric.
- Bands: 90%+ = Killed, 60% and below = Bombed (so Solid = 61–89).
- Critic score comes from an existing aggregator.
- Crowd score comes from Heckle visitor votes. This needs the backend (blocker 1).
- One scale sitewide. The home page's 1–5 pips get replaced by the same badge.

---

## Part 1 · The Heckle Score (sets the badge)

### 1.1 Components
Each component is normalised to 0–100. Weights are the starting values. If a component is
missing, its weight is shared out among the components that are present, in proportion.

| # | Component | What it is | How it becomes 0–100 | Min. evidence to count | Weight |
| --- | --- | --- | --- | --- | --- |
| C | **Critics (aggregator)** | A published critics score for the special: Rotten Tomatoes Tomatometer, Metacritic Metascore | Use as-is (both are already 0–100) | RT: ≥5 counted reviews · MC: ≥4 critics | 30 |
| P | **Press tally** | Reviews from named outlets that the aggregator doesn't count, plus essays and features that state a verdict | Each review is graded Positive = 100, Mixed = 50 or Negative = 0, then averaged (see 1.3) | ≥3 graded reviews from ≥3 different outlets | 25 |
| A | **Audience (aggregator)** | Audience rating on a public site: RT Popcornmeter, IMDb user rating, TMDB vote average | RT as-is · IMDb ×10 · TMDB ×10. If two exist, take the mean | IMDb ≥500 votes · TMDB ≥50 votes · RT as shown by RT | 20 |
| Y | **YouTube engagement** (YouTube-hosted specials only) | Like rate (likes ÷ views) ranked against peers in the same channel-size tier (1.4) | Percentile within the tier (0–100) | ≥10 specials in that tier in our index, and the video live ≥30 days | 10 |
| H | **Heckle crowd** | Heckle visitor votes (Killed / Solid / Bombed = 100 / 75 / 0) | Mean vote | ≥50 votes from distinct visitors. **Blocked until the backend exists** | 15 |

For a non-YouTube special, the Y weight is shared out across the others. Raw view counts and
watch time **are not part of the score.** They measure reach, not quality, and they would bias the
index toward Netflix and big channels. Reach is shown separately (1.5).

### 1.2 When a special gets a badge
- It needs **at least two components, and at least one must be C or P.** A special with only
  audience or engagement numbers shows *Not rated yet*.
- **Provisional** marker: the score is within 3 points of a band edge (58–63 or 87–92) and has
  fewer than three components. The badge shows with a "Provisional" tag until another source lands.
- Rounding: compute to one decimal and round half up at the end. 89.5 → 90 → Killed.
- Bands: **Killed ≥ 90 · Solid 61–89 · Bombed ≤ 60.**

### 1.3 Grading a review for P (so two people reach the same grade)
Apply these in order and stop at the first rule that decides the grade:
1. **The outlet gave a rating.** On a 5-point scale: ≥3.5 Positive, 2.5–3 Mixed, ≤2 Negative. Other
   scales: convert to /5 first. Letter grades: B+ or above Positive, B to C Mixed, C− or below Negative.
2. **The headline or standfirst gives a verdict.** Grade on that.
3. **The final paragraph gives a verdict.** Grade on that.
4. **Keyword check across the whole review.** Use it only as a tie-break, and a person confirms it:
   - Positive signals: *essential, masterful, best of the year/career, triumph, killed, hilarious throughout, must-watch, sharpest*
   - Negative signals: *tired, lazy, hacky, flat, misfire, dated, coasting, bombed, a slog, skip it*
   - Mixed signals: *uneven, hit-and-miss, patchy, works in parts, flashes of, not quite*
   - Take the majority signal. If it's a tie or there are no signals, grade it **Mixed**.
- What counts as a review: a byline, a named outlet, it is about this special, and it was published.
  These don't count: Reddit, social posts, press releases, the network's own blog, and anything
  that only summarises other reviews.
- **An agent may propose a grade. A person confirms it before it counts.** This is the "criticism
  is human" line from the seat block.
- Each graded review becomes one ledger row (1.6) with a short quote of ≤25 words and the link.
  Never more than that (never-do #5).

### 1.4 YouTube: tiers and ratios
The tier comes from the channel's subscriber count **on the retrieval date**. The API returns a
rounded figure and has no history, so the date matters.

| Tier | Subscribers |
| --- | --- |
| T1 | under 100K |
| T2 | 100K – 1M |
| T3 | 1M – 5M |
| T4 | 5M+ |

- **Like rate** = likes ÷ views, from the YouTube Data API `statistics` on the retrieval date.
  It feeds component Y as a percentile among the specials in the same tier.
- **Dislikes are not used.** YouTube made them private on 10 Nov 2021, and the API dropped
  `dislikeCount` for non-owners on 13 Dec 2021 (source below). Third-party "dislike" figures,
  such as Return YouTube Dislike, are *estimates*. They break never-do #1, so they are out.
- **Watch time is not used.** Only the uploader can see it in YouTube Analytics. If a comic or
  channel shares a screenshot, it can go in the editorial copy with attribution, but not into
  the score.
- The tier thresholds above are design choices, not measured benchmarks. Recalibrate them once
  the index holds 10+ YouTube specials per tier. Today it holds 5 YouTube specials in total.

### 1.5 Reach (shown next to the score, not inside it)
This is where "content that exceeds certain ratios" gets credit without warping the quality score.
- **YouTube reach ratio** = views ÷ channel subscribers.
  - **Breakout** ≥ 1.0 (reached past its own audience)
  - **Strong** 0.3–0.99
  - **Base** 0.1–0.29
  - **Below base** < 0.1

  These thresholds are design choices to calibrate, as in 1.4.
- **Netflix:** Netflix publishes "views" (hours ÷ runtime) twice a year in *What We Watched*, for
  titles over 50,000 hours. Cite the half-year report and its date. Titles under the cut-off show UNKNOWN.
- Other platforms (Max, Prime Video, Hulu, Paramount+) publish no per-title figures that I know
  of, so reach is UNKNOWN.
- The **Climbing** chart and **Most viewed** sort should run on these reach figures only. Until
  there are real figures, both stay labelled sample or are hidden. That's a CTO and operator call.

### 1.6 The ledger (what makes it traceable)
Each special gets one row per input:
`special_id · component · source name · URL · value · retrieved (YYYY-MM-DD) · graded by · note`.
The score is a pure function of the ledger. Anyone re-running the ledger gets the same number.
Refresh cadence, set for one operator:
- **New releases:** at launch, day 30 and day 60. Day 60 covers the Climbing window.
- **Back catalogue:** once a year. Older specials barely move.
- **YouTube stats:** monthly, automated, once the CTO pipeline exists.

### 1.7 Source availability (checked 2026-10-01)
| Source | Status | Implication |
| --- | --- | --- |
| Rotten Tomatoes | No self-serve API. Access is through the Fandango partner programme. One third-party write-up gives "from $60,000/yr" (not confirmed on RT's own pages) | Free version: the operator enters RT scores by hand with a link and date for each special. Whether doing that at scale is OK under RT's terms is **UNKNOWN**. CTO and operator to check before launch. No scraping. |
| Metacritic | Covers few stand-up specials (my belief, unverified) | Use where it exists |
| IMDb / TMDB | IMDb datasets are licensed for non-commercial use. The TMDB API is free with attribution, and commercial use needs agreement (from memory, **unverified**). The repo already uses a TMDB key for posters | CTO to confirm the terms before ads go on the site |
| YouTube Data API | Views, likes and subscriber counts are public. Dislikes and watch time are not | Y and reach are feasible for free |
| Netflix engagement report | Public, twice a year | Reach for Netflix titles only |

---

## Part 2 · Bylined reviews (same badge, a person's verdict)
Heckle's own written reviews use the same three words and the same bands, so readers see one
scale. The verdict is the reviewer's, though. It never feeds the Heckle Score, and it's labelled
"Heckle verdict · <byline>". Score five criteria at 0, 1 or 2 each, then multiply the total by 10:

| Criterion | 0 | 1 | 2 |
| --- | --- | --- | --- |
| **Laugh density** | Stretches over 3 min with no laugh line | Steady, with a few dead patches | Rarely more than 30–40s without a hit |
| **Construction** | Bits stand alone; the ending is just a stop | Some callbacks and a shaped close | The hour builds; callbacks and the close pay off earlier setups |
| **Point of view** | Interchangeable with other comics on the same topics | A clear voice on some material | Nobody else could do this hour |
| **Command** | Delivery fights the material | Assured, with lapses | Total control of rhythm and room |
| **Earns its runtime** | Clearly padded | Could lose 10 minutes | No fat |

The total ×10 gives a percentage: **90–100 Killed** (9 or 10 points), **70–80 Solid** (7 or 8),
**≤60 Bombed**. A 6/10 is Bombed, which is deliberately harsh. That is the operator's band, and it
keeps Killed rare. A second writer scores the same special blind. If the two totals differ by
2+ points, the editor (the operator) decides, and the gap gets logged so the anchors can be tightened.

---

## Part 3 · What the code currently does (for the CTO fix spec)
- `src/specials/main.jsx` line 151: critic, crowd, views, trend and on-now come from a seeded hash.
  **All generated.**
- Line 156: rank = 0.6×critic + 0.4×crowd over those generated numbers. **Generated.**
- Lines 163/166/245: bands are 75/60 on the critic score alone. **These need to become 90/60 on the
  composite, with a "Not rated yet" state.**
- `WHERE` map (line 146): "where to watch" is inferred from the original network, not checked.
  For example, Comedy Central → Paramount+. **Availability is unverified for all 139.**
- `src/home/main.jsx` `RANKED`: six invented specials by invented comics, with 1–5 scores and
  invented verdicts. **All placeholder.**
- The page label "Scores, views and rank movement are sample data" (`template.jsx:249`) is correct.
  Keep it until the ledger replaces the generated numbers.

### Other invented figures spotted in passing (editorial copy, CCO's own area)
- `src/home/main.jsx` COMICS: "Viral clip, 41M views" is an invented view count on a placeholder
  comic.
- `src/home/main.jsx` SERIES: "S3 · 12 eps", "Podcast · 112 eps", "S1 · 8 eps", "S2 · 10 eps".
  These episode counts are invented, and the Originals don't exist yet.
- Neither carries a sample label. Both break never-do #3 as they stand. Fix: label them or cut them
  before any public URL exists. I can draft the copy change as a PR on request.

---

## Part 4 · Every specials entry with a sample score: all 139
For every row: **critic %, crowd %, views, rank, rank movement, Killed/Solid/Bombed badge and "On
now" are generated sample data.** Title, comic, year and original network come from memory in the
design chat (`design/chats/chat1.md`) and have **not been fact-checked**. Where-to-watch is
inferred. There are no exceptions, so the table just lists the entries. Status for every row:
SAMPLE score · UNVERIFIED metadata · UNVERIFIED availability.

### 4a · Home page "Ranked" rail (all placeholder: invented titles, comics, scores, verdicts)
Soft Opinions (Wren Okafor, 5/5) · Carry-On Only (Jonah Reyes-Whitfield, 5/5) · Row Two (Priya
Castellane, 4/5) · Group Chat (Keisha Moreau, 4/5) · Two Drink Minimum (The Wednesday Players, 4/5) ·
Doble (Rafa Delgado, 3/5).

### 4b · Specials Index (`src/specials/main.jsx` RAW, in file order)
| # | Title | Comic | Year | Original network |
| --- | --- | --- | --- | --- |
| 1 | Bring the Pain | Chris Rock | 1996 | HBO |
| 2 | I'm Telling You for the Last Time | Jerry Seinfeld | 1998 | HBO |
| 3 | Bigger & Blacker | Chris Rock | 1999 | HBO |
| 4 | You Are All Diseased | George Carlin | 1999 | HBO |
| 5 | Dress to Kill | Eddie Izzard | 1999 | HBO |
| 6 | Killin' Them Softly | Dave Chappelle | 2000 | HBO |
| 7 | Complaints and Grievances | George Carlin | 2001 | HBO |
| 8 | Live on Broadway | Robin Williams | 2002 | HBO |
| 9 | Here and Now | Ellen DeGeneres | 2003 | HBO |
| 10 | For What It's Worth | Dave Chappelle | 2004 | Showtime |
| 11 | Never Scared | Chris Rock | 2004 | HBO |
| 12 | No Reason to Complain | Patton Oswalt | 2004 | Comedy Central |
| 13 | Life Is Worth Losing | George Carlin | 2005 | HBO |
| 14 | Beyond the Pale | Jim Gaffigan | 2006 | Comedy Central |
| 15 | Sick and Tired | Wanda Sykes | 2006 | HBO |
| 16 | Werewolves and Lollipops | Patton Oswalt | 2007 | Comedy Central |
| 17 | Shameless | Louis C.K. | 2007 | HBO |
| 18 | It's Bad for Ya | George Carlin | 2008 | HBO |
| 19 | Kill the Messenger | Chris Rock | 2008 | HBO |
| 20 | Chewed Up | Louis C.K. | 2008 | Showtime |
| 21 | Why Do I Do This? | Bill Burr | 2008 | Comedy Central |
| 22 | I'ma Be Me | Wanda Sykes | 2009 | HBO |
| 23 | Weapons of Self Destruction | Robin Williams | 2009 | HBO |
| 24 | King Baby | Jim Gaffigan | 2009 | Comedy Central |
| 25 | Seriously Funny | Kevin Hart | 2010 | Comedy Central |
| 26 | Let It Go | Bill Burr | 2010 | Showtime |
| 27 | Hilarious | Louis C.K. | 2010 | Epix |
| 28 | Finest Hour | Patton Oswalt | 2011 | Comedy Central |
| 29 | Live at the Beacon Theater | Louis C.K. | 2011 | Self-released |
| 30 | Me Doing Standup | Norm Macdonald | 2011 | Comedy Central |
| 31 | New in Town | John Mulaney | 2012 | Comedy Central |
| 32 | Mr. Universe | Jim Gaffigan | 2012 | Self-released |
| 33 | You People Are All the Same | Bill Burr | 2012 | Netflix |
| 34 | Animal Furnace | Hannibal Buress | 2012 | Comedy Central |
| 35 | what. | Bo Burnham | 2013 | Netflix |
| 36 | Oh My God | Louis C.K. | 2013 | HBO |
| 37 | Buried Alive | Aziz Ansari | 2013 | Netflix |
| 38 | We Are Miracles | Sarah Silverman | 2013 | HBO |
| 39 | My Girlfriend's Boyfriend | Mike Birbiglia | 2013 | Netflix |
| 40 | Thinky Pain | Marc Maron | 2013 | Netflix |
| 41 | Caligula | Anthony Jeselnik | 2013 | Comedy Central |
| 42 | Beta Male | Kumail Nanjiani | 2013 | Comedy Central |
| 43 | I'm Sorry You Feel That Way | Bill Burr | 2014 | Netflix |
| 44 | Obsessed | Jim Gaffigan | 2014 | Comedy Central |
| 45 | One of the Greats | Chelsea Peretti | 2014 | Netflix |
| 46 | BARE | Jim Jefferies | 2014 | Netflix |
| 47 | The Comeback Kid | John Mulaney | 2015 | Netflix |
| 48 | Live at Madison Square Garden | Aziz Ansari | 2015 | Netflix |
| 49 | Boyish Girl Interrupted | Tig Notaro | 2015 | HBO |
| 50 | Live at the Apollo | Amy Schumer | 2015 | HBO |
| 51 | Thoughts and Prayers | Anthony Jeselnik | 2015 | Netflix |
| 52 | Baby Cobra | Ali Wong | 2016 | Netflix |
| 53 | Make Happy | Bo Burnham | 2016 | Netflix |
| 54 | Talking for Clapping | Patton Oswalt | 2016 | Netflix |
| 55 | Mostly Stories | Tom Segura | 2016 | Netflix |
| 56 | Freedumb | Jim Jefferies | 2016 | Netflix |
| 57 | Comedy Camisado | Hannibal Buress | 2016 | Netflix |
| 58 | The Age of Spin | Dave Chappelle | 2017 | Netflix |
| 59 | Deep in the Heart of Texas | Dave Chappelle | 2017 | Netflix |
| 60 | Equanimity | Dave Chappelle | 2017 | Netflix |
| 61 | The Bird Revelation | Dave Chappelle | 2017 | Netflix |
| 62 | Annihilation | Patton Oswalt | 2017 | Netflix |
| 63 | Old Baby | Maria Bamford | 2017 | Netflix |
| 64 | Homecoming King | Hasan Minhaj | 2017 | Netflix |
| 65 | Walk Your Way Out | Bill Burr | 2017 | Netflix |
| 66 | Thank God for Jokes | Mike Birbiglia | 2017 | Netflix |
| 67 | A Speck of Dust | Sarah Silverman | 2017 | Netflix |
| 68 | Cinco | Jim Gaffigan | 2017 | Netflix |
| 69 | The Leather Special | Amy Schumer | 2017 | Netflix |
| 70 | 8 | Jerrod Carmichael | 2017 | HBO |
| 71 | 3 Mics | Neal Brennan | 2017 | Netflix |
| 72 | She Ready! | Tiffany Haddish | 2017 | Showtime |
| 73 | Nanette | Hannah Gadsby | 2018 | Netflix |
| 74 | Tamborine | Chris Rock | 2018 | Netflix |
| 75 | Kid Gorgeous at Radio City | John Mulaney | 2018 | Netflix |
| 76 | Hard Knock Wife | Ali Wong | 2018 | Netflix |
| 77 | Happy to Be Here | Tig Notaro | 2018 | Netflix |
| 78 | Humanity | Ricky Gervais | 2018 | Netflix |
| 79 | Disgraceful | Tom Segura | 2018 | Netflix |
| 80 | Relatable | Ellen DeGeneres | 2018 | Netflix |
| 81 | Hitler's Dog, Gossip and Trickery | Norm Macdonald | 2017 | Netflix |
| 82 | Sticks & Stones | Dave Chappelle | 2019 | Netflix |
| 83 | Paper Tiger | Bill Burr | 2019 | Netflix |
| 84 | The Tennessee Kid | Nate Bargatze | 2019 | Netflix |
| 85 | The Great Depresh | Gary Gulman | 2019 | HBO |
| 86 | Right Now | Aziz Ansari | 2019 | Netflix |
| 87 | Not Normal | Wanda Sykes | 2019 | Netflix |
| 88 | The New One | Mike Birbiglia | 2019 | Netflix |
| 89 | Fire in the Maternity Ward | Anthony Jeselnik | 2019 | Netflix |
| 90 | Black Mitzvah | Tiffany Haddish | 2019 | Netflix |
| 91 | Feelings | Ramy Youssef | 2019 | HBO |
| 92 | Quality Time | Jim Gaffigan | 2019 | Prime Video |
| 93 | 23 Hours to Kill | Jerry Seinfeld | 2020 | Netflix |
| 94 | Quarter-Life Crisis | Taylor Tomlinson | 2020 | Netflix |
| 95 | Ball Hog | Tom Segura | 2020 | Netflix |
| 96 | End Times Fun | Marc Maron | 2020 | Netflix |
| 97 | 3 in the Morning | Sam Jay | 2020 | Netflix |
| 98 | Out to Lunch | Mark Normand | 2020 | YouTube |
| 99 | I Hate Myself | Joe List | 2020 | YouTube |
| 100 | Only Fans | Matt Rife | 2021 | YouTube |
| 101 | Fat Rascal | Stavros Halkias | 2022 | YouTube |
| 102 | Inside | Bo Burnham | 2021 | Netflix |
| 103 | The Closer | Dave Chappelle | 2021 | Netflix |
| 104 | The Greatest Average American | Nate Bargatze | 2021 | Netflix |
| 105 | Live in Austin | Shane Gillis | 2021 | YouTube |
| 106 | Rothaniel | Jerrod Carmichael | 2022 | HBO |
| 107 | Look at You | Taylor Tomlinson | 2022 | Netflix |
| 108 | Don Wong | Ali Wong | 2022 | Netflix |
| 109 | Live at Red Rocks | Bill Burr | 2022 | Netflix |
| 110 | The King's Jester | Hasan Minhaj | 2022 | Netflix |
| 111 | SuperNature | Ricky Gervais | 2022 | Netflix |
| 112 | Nothing Special | Norm Macdonald | 2022 | Netflix |
| 113 | The Intruder | Atsuko Okatsuka | 2022 | HBO |
| 114 | Blocks | Neal Brennan | 2022 | Netflix |
| 115 | Selective Outrage | Chris Rock | 2023 | Netflix |
| 116 | Baby J | John Mulaney | 2023 | Netflix |
| 117 | Beautiful Dogs | Shane Gillis | 2023 | Netflix |
| 118 | Hello World | Nate Bargatze | 2023 | Prime Video |
| 119 | Sledgehammer | Tom Segura | 2023 | Netflix |
| 120 | Mohammed in Texas | Mo Amer | 2023 | Netflix |
| 121 | Soup to Nuts | Mark Normand | 2023 | Netflix |
| 122 | The Old Man and the Pool | Mike Birbiglia | 2023 | Netflix |
| 123 | The Dreamer | Dave Chappelle | 2023 | Netflix |
| 124 | Someone You Love | Sarah Silverman | 2023 | HBO |
| 125 | From Bleak to Dark | Marc Maron | 2023 | HBO |
| 126 | I'm Every Woman | Leanne Morgan | 2023 | Netflix |
| 127 | Natural Selection | Matt Rife | 2023 | Netflix |
| 128 | Now More Than Ever | John Early | 2023 | HBO |
| 129 | Armageddon | Ricky Gervais | 2023 | Netflix |
| 130 | I'm an Entertainer | Wanda Sykes | 2023 | Netflix |
| 131 | Have It All | Taylor Tomlinson | 2024 | Netflix |
| 132 | Single Lady | Ali Wong | 2024 | Netflix |
| 133 | Get on Your Knees | Jacqueline Novak | 2024 | Netflix |
| 134 | Your Friend, Nate Bargatze | Nate Bargatze | 2024 | Netflix |
| 135 | Bones and All | Anthony Jeselnik | 2024 | Netflix |
| 136 | More Feelings | Ramy Youssef | 2024 | HBO |
| 137 | Night Thoughts | Kumail Nanjiani | 2024 | Prime Video |
| 138 | Drop Dead Years | Bill Burr | 2025 | Hulu |
| 139 | Panicked | Marc Maron | 2025 | HBO |

YouTube-hosted entries (the only candidates for component Y and the "Free on YouTube" filter): Out
to Lunch, I Hate Myself, Only Fans, Fat Rascal, Live in Austin. That's 5. It's also the only place the
`free` flag is set, and it's never been checked.

---

## What I'm still missing to do this well
1. A ruling on Rotten Tomatoes: is hand entry with a link OK, or should C use only Metacritic plus P? (operator)
2. Licence terms for IMDb, TMDB and the YouTube API, checked against an ad-supported site. (CTO)
3. A fact-check pass on the 139 titles and years, plus a real where-to-watch check. One person,
   roughly 139 lookups: worth batching through an agent with a human spot-check.
4. A backend for component H. Until it exists, H is off and the weights get shared out.

## Sources (retrieved 2026-10-01)
- YouTube Data API revision history (dislikeCount private for non-owners from 13 Dec 2021): https://developers.google.com/youtube/v3/revision_history
- Dislikes made private 10 Nov 2021: https://en.wikipedia.org/wiki/List_of_most-disliked_YouTube_videos
- RT API through the Fandango partner programme, the "$60,000/yr" figure (third-party, unconfirmed): https://github.com/api-evangelist/rottentomatoes · https://knowledgebase.fabricdata.com/origin/apis-all/rotten-tomatoes-api-docs
- Netflix "What We Watched" (twice a year, views = hours ÷ runtime, titles >50K hours): http://about.netflix.com/en/news/what-we-watched-a-netflix-engagement-report · https://about.netflix.com/en/news/what-we-watched-the-first-half-of-2026
- Site code: `src/specials/main.jsx`, `src/home/main.jsx`, `src/specials/template.jsx` at `main`, 2026-10-01.
