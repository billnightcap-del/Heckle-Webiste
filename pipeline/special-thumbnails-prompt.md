# Heckle — Special Thumbnail Scraper prompt

Run this in an AI assistant that can browse the web (Claude with web search / computer use, or any agent with a fetch tool). Save the JSON it returns as **`public/data/special-posters.json`** in the site. The Specials page loads that file first; anything missing still falls back to TMDB → Apple → Wikipedia → comic portrait.

Big list — if the assistant stops early, ask it to "continue from #N" and append the results.

---

## The prompt

```
You are an image researcher for Heckle, a comedy publication. For each stand-up special below, find the OFFICIAL key art (poster / cover / thumbnail) and return a direct image URL.

WHERE TO LOOK, in this order — stop at the first confident match:
1. The network's own title page: Netflix (netflix.com/title/…), Max/HBO (max.com, hbo.com), Paramount+ / Comedy Central (paramountplus.com, cc.com), Prime Video (amazon.com/dp/…), Hulu (hulu.com), MGM+, the comic's own site/store for self-released specials. Read the page's og:image meta tag.
2. TMDB (themoviedb.org) — the title's page; use the poster at https://image.tmdb.org/t/p/w500/<file>.
3. Apple TV / iTunes movie listing — artwork URL, resized to 600x900bb.
4. IMDb title page — the primary poster (og:image).
5. YouTube — for YouTube-released specials, https://i.ytimg.com/vi/<VIDEO_ID>/maxresdefault.jpg from the official upload on the comic's channel.
6. Wikipedia / Wikimedia Commons infobox image for the special.

MATCHING RULES
- The image must be for THIS special: same comic, same title, release year within ±1. Many comics have several specials — never swap them (e.g. Bill Burr "Paper Tiger" ≠ "Walk Your Way Out").
- Prefer vertical 2:3 poster art. If only 16:9 exists, use it and set "shape": "wide".
- No fan art, no random stills, no photos of the comic from other events, no stock images, no watermarked aggregator thumbnails.
- The URL must point straight to an image file or image CDN (jpg/png/webp), be https, and load without login. Don't return page URLs.
- If you cannot find a confident match, return "url": null. Never guess.

OUTPUT — ONLY a JSON array, no prose, one object per special, in list order:
[
  {
    "n": 1,
    "comic": "Chris Rock",
    "title": "Bring the Pain",
    "year": 1996,
    "url": "https://image.tmdb.org/t/p/w500/abc123.jpg",
    "shape": "poster",            // poster | wide
    "source": "tmdb",             // network | tmdb | apple | imdb | youtube | wikipedia
    "page": "https://www.themoviedb.org/movie/…",   // page where you found it
    "confidence": "high"          // high | medium
  }
]

THE SPECIALS (136):
1. Chris Rock — Bring the Pain (1996, HBO)
2. Jerry Seinfeld — I'm Telling You for the Last Time (1998, HBO)
3. Chris Rock — Bigger & Blacker (1999, HBO)
4. George Carlin — You Are All Diseased (1999, HBO)
5. Eddie Izzard — Dress to Kill (1999, HBO)
6. Dave Chappelle — Killin' Them Softly (2000, HBO)
7. George Carlin — Complaints and Grievances (2001, HBO)
8. Robin Williams — Live on Broadway (2002, HBO)
9. Ellen DeGeneres — Here and Now (2003, HBO)
10. Dave Chappelle — For What It's Worth (2004, Showtime)
11. Chris Rock — Never Scared (2004, HBO)
12. Patton Oswalt — No Reason to Complain (2004, Comedy Central)
13. George Carlin — Life Is Worth Losing (2005, HBO)
14. Jim Gaffigan — Beyond the Pale (2006, Comedy Central)
15. Wanda Sykes — Sick and Tired (2006, HBO)
16. Patton Oswalt — Werewolves and Lollipops (2007, Comedy Central)
17. Louis C.K. — Shameless (2007, HBO)
18. George Carlin — It's Bad for Ya (2008, HBO)
19. Chris Rock — Kill the Messenger (2008, HBO)
20. Louis C.K. — Chewed Up (2008, Showtime)
21. Bill Burr — Why Do I Do This? (2008, Comedy Central)
22. Wanda Sykes — I'ma Be Me (2009, HBO)
23. Robin Williams — Weapons of Self Destruction (2009, HBO)
24. Jim Gaffigan — King Baby (2009, Comedy Central)
25. Kevin Hart — Seriously Funny (2010, Comedy Central)
26. Bill Burr — Let It Go (2010, Showtime)
27. Louis C.K. — Hilarious (2010, Epix)
28. Patton Oswalt — Finest Hour (2011, Comedy Central)
29. Louis C.K. — Live at the Beacon Theater (2011, Self-released)
30. Norm Macdonald — Me Doing Standup (2011, Comedy Central)
31. John Mulaney — New in Town (2012, Comedy Central)
32. Jim Gaffigan — Mr. Universe (2012, Self-released)
33. Bill Burr — You People Are All the Same (2012, Netflix)
34. Hannibal Buress — Animal Furnace (2012, Comedy Central)
35. Bo Burnham — what. (2013, Netflix)
36. Louis C.K. — Oh My God (2013, HBO)
37. Aziz Ansari — Buried Alive (2013, Netflix)
38. Sarah Silverman — We Are Miracles (2013, HBO)
39. Mike Birbiglia — My Girlfriend's Boyfriend (2013, Netflix)
40. Marc Maron — Thinky Pain (2013, Netflix)
41. Anthony Jeselnik — Caligula (2013, Comedy Central)
42. Kumail Nanjiani — Beta Male (2013, Comedy Central)
43. Bill Burr — I'm Sorry You Feel That Way (2014, Netflix)
44. Jim Gaffigan — Obsessed (2014, Comedy Central)
45. Chelsea Peretti — One of the Greats (2014, Netflix)
46. Jim Jefferies — BARE (2014, Netflix)
47. John Mulaney — The Comeback Kid (2015, Netflix)
48. Aziz Ansari — Live at Madison Square Garden (2015, Netflix)
49. Tig Notaro — Boyish Girl Interrupted (2015, HBO)
50. Amy Schumer — Live at the Apollo (2015, HBO)
51. Anthony Jeselnik — Thoughts and Prayers (2015, Netflix)
52. Ali Wong — Baby Cobra (2016, Netflix)
53. Bo Burnham — Make Happy (2016, Netflix)
54. Patton Oswalt — Talking for Clapping (2016, Netflix)
55. Tom Segura — Mostly Stories (2016, Netflix)
56. Jim Jefferies — Freedumb (2016, Netflix)
57. Hannibal Buress — Comedy Camisado (2016, Netflix)
58. Dave Chappelle — The Age of Spin (2017, Netflix)
59. Dave Chappelle — Deep in the Heart of Texas (2017, Netflix)
60. Dave Chappelle — Equanimity (2017, Netflix)
61. Dave Chappelle — The Bird Revelation (2017, Netflix)
62. Patton Oswalt — Annihilation (2017, Netflix)
63. Maria Bamford — Old Baby (2017, Netflix)
64. Hasan Minhaj — Homecoming King (2017, Netflix)
65. Bill Burr — Walk Your Way Out (2017, Netflix)
66. Mike Birbiglia — Thank God for Jokes (2017, Netflix)
67. Sarah Silverman — A Speck of Dust (2017, Netflix)
68. Jim Gaffigan — Cinco (2017, Netflix)
69. Amy Schumer — The Leather Special (2017, Netflix)
70. Jerrod Carmichael — 8 (2017, HBO)
71. Neal Brennan — 3 Mics (2017, Netflix)
72. Tiffany Haddish — She Ready! (2017, Showtime)
73. Hannah Gadsby — Nanette (2018, Netflix)
74. Chris Rock — Tamborine (2018, Netflix)
75. John Mulaney — Kid Gorgeous at Radio City (2018, Netflix)
76. Ali Wong — Hard Knock Wife (2018, Netflix)
77. Tig Notaro — Happy to Be Here (2018, Netflix)
78. Ricky Gervais — Humanity (2018, Netflix)
79. Tom Segura — Disgraceful (2018, Netflix)
80. Ellen DeGeneres — Relatable (2018, Netflix)
81. Norm Macdonald — Hitler's Dog, Gossip and Trickery (2017, Netflix)
82. Dave Chappelle — Sticks & Stones (2019, Netflix)
83. Bill Burr — Paper Tiger (2019, Netflix)
84. Nate Bargatze — The Tennessee Kid (2019, Netflix)
85. Gary Gulman — The Great Depresh (2019, HBO)
86. Aziz Ansari — Right Now (2019, Netflix)
87. Wanda Sykes — Not Normal (2019, Netflix)
88. Mike Birbiglia — The New One (2019, Netflix)
89. Anthony Jeselnik — Fire in the Maternity Ward (2019, Netflix)
90. Tiffany Haddish — Black Mitzvah (2019, Netflix)
91. Ramy Youssef — Feelings (2019, HBO)
92. Jim Gaffigan — Quality Time (2019, Prime Video)
93. Jerry Seinfeld — 23 Hours to Kill (2020, Netflix)
94. Taylor Tomlinson — Quarter-Life Crisis (2020, Netflix)
95. Tom Segura — Ball Hog (2020, Netflix)
96. Marc Maron — End Times Fun (2020, Netflix)
97. Sam Jay — 3 in the Morning (2020, Netflix)
98. Mark Normand — Out to Lunch (2020, YouTube)
99. Bo Burnham — Inside (2021, Netflix)
100. Dave Chappelle — The Closer (2021, Netflix)
101. Nate Bargatze — The Greatest Average American (2021, Netflix)
102. Shane Gillis — Live in Austin (2021, YouTube)
103. Jerrod Carmichael — Rothaniel (2022, HBO)
104. Taylor Tomlinson — Look at You (2022, Netflix)
105. Ali Wong — Don Wong (2022, Netflix)
106. Bill Burr — Live at Red Rocks (2022, Netflix)
107. Hasan Minhaj — The King's Jester (2022, Netflix)
108. Ricky Gervais — SuperNature (2022, Netflix)
109. Norm Macdonald — Nothing Special (2022, Netflix)
110. Atsuko Okatsuka — The Intruder (2022, HBO)
111. Neal Brennan — Blocks (2022, Netflix)
112. Chris Rock — Selective Outrage (2023, Netflix)
113. John Mulaney — Baby J (2023, Netflix)
114. Shane Gillis — Beautiful Dogs (2023, Netflix)
115. Nate Bargatze — Hello World (2023, Prime Video)
116. Tom Segura — Sledgehammer (2023, Netflix)
117. Mo Amer — Mohammed in Texas (2023, Netflix)
118. Mark Normand — Soup to Nuts (2023, Netflix)
119. Mike Birbiglia — The Old Man and the Pool (2023, Netflix)
120. Dave Chappelle — The Dreamer (2023, Netflix)
121. Sarah Silverman — Someone You Love (2023, HBO)
122. Marc Maron — From Bleak to Dark (2023, HBO)
123. Leanne Morgan — I'm Every Woman (2023, Netflix)
124. Matt Rife — Natural Selection (2023, Netflix)
125. John Early — Now More Than Ever (2023, HBO)
126. Ricky Gervais — Armageddon (2023, Netflix)
127. Wanda Sykes — I'm an Entertainer (2023, Netflix)
128. Taylor Tomlinson — Have It All (2024, Netflix)
129. Ali Wong — Single Lady (2024, Netflix)
130. Jacqueline Novak — Get on Your Knees (2024, Netflix)
131. Nate Bargatze — Your Friend, Nate Bargatze (2024, Netflix)
132. Anthony Jeselnik — Bones and All (2024, Netflix)
133. Ramy Youssef — More Feelings (2024, HBO)
134. Kumail Nanjiani — Night Thoughts (2024, Prime Video)
135. Bill Burr — Drop Dead Years (2025, Hulu)
136. Marc Maron — Panicked (2025, HBO)
```

---

## Checking results

- Specials with `"url": null` keep the automatic fallback chain.
- Spot-check any `"confidence": "medium"` entries before publishing.
- Network CDN links (Netflix, Max) can expire; TMDB and Apple links are stable. Re-run the prompt for entries that start failing — broken images fall back automatically.
