// Generated from the Claude Design prototype (Festivals.dc.html) — markup and inline styles match the design 1:1.
// `v` is the view model returned by the page component (see the sibling page module).
import { Fragment } from 'react';

export default function render(v) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header style={{ position: "sticky", top: "0", zIndex: "30", background: "rgba(10,10,10,0.92)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "12px clamp(16px, 3vw, 40px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 28px" }}>
          <a href="./" style={{ fontWeight: "900", fontStretch: "62%", fontSize: "40px", lineHeight: "0.9", textTransform: "uppercase" }}>
            Heckle
            <span style={{ color: "#ffd400" }}>
              .
            </span>
          </a>
          <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#a3a39e", marginRight: "auto" }}>
            Festival Tracker
          </span>
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "20px", fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <a href="./">
              Home
            </a>
            <a href="specials.html">
              Specials
            </a>
            <a href="open-mics.html">
              Open Mics
            </a>
            <a href="games.html">
              Games
            </a>
            <a href="#comic-check">
              Comic check
            </a>
            <a href="#finder" style={{ color: "#ffd400" }}>
              Add festivals
            </a>
          </nav>
        </div>
      </header>
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.12)", background: "radial-gradient(ellipse 50% 80% at 85% 0%, rgba(255,212,0,0.12), transparent 70%)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(36px, 5vw, 72px) clamp(16px, 3vw, 40px) 28px", display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 48px", alignItems: "flex-end", justifyContent: "space-between" }}>
            <h1 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(64px, 10vw, 160px)", lineHeight: "0.8", textTransform: "uppercase" }}>
              Festivals
              <br />
              <span style={{ color: "#ffd400" }}>
                Rest of 2026
              </span>
            </h1>
            <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.18)" }}>
              <div style={{ padding: "14px 20px", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "48px", lineHeight: "0.85", color: "#ffd400" }}>
                  {v.countFests}
                </span>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                  Festivals
                </span>
              </div>
              <div style={{ padding: "14px 20px", display: "flex", flexDirection: "column", gap: "4px", borderLeft: "1px solid rgba(255,255,255,0.18)" }}>
                <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "48px", lineHeight: "0.85" }}>
                  {v.countOpen}
                </span>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                  Taking submissions
                </span>
              </div>
              <div style={{ padding: "14px 20px", display: "flex", flexDirection: "column", gap: "4px", borderLeft: "1px solid rgba(255,255,255,0.18)" }}>
                <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "48px", lineHeight: "0.85" }}>
                  {v.nextIn}
                </span>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                  Days to next fest
                </span>
              </div>
            </div>
          </div>
          <p style={{ margin: "0", maxWidth: "62ch", fontFamily: "'Newsreader', serif", fontSize: "20px", lineHeight: "1.45", color: "#c8c8c3" }}>
            {"Every comedy festival left on the 2026 calendar, with where submissions stand today. Statuses recalculate against today's date — "}
            {v.todayText}
            .
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
            <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.25)" }}>
              {(v.months || []).map((m, _i0) => (
                <Fragment key={_i0}>
                  <button onClick={m.pick} style={{ padding: "10px 16px", border: "0", cursor: "pointer", background: m.bg, color: m.fg, font: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {m.label}
                  </button>
                </Fragment>
              ))}
            </div>
            <button onClick={v.toggleOpen} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px", border: `1px solid ${v.openBorder}`, background: "transparent", color: v.openFg, cursor: "pointer", font: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <span style={{ width: "12px", height: "12px", border: "1px solid currentColor", background: v.openDot }} />
              Submissions open only
            </button>
            <label style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "auto", fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
              Sort
              {" "}
              <select value={v.sort} onChange={v.onSort} style={{ background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", padding: "9px 12px", font: "inherit", fontSize: "14px", fontWeight: "700", letterSpacing: "0", textTransform: "none" }}>
                <option value="date">
                  Festival date
                </option>
                <option value="deadline">
                  Submission status
                </option>
              </select>
            </label>
          </div>
        </div>
      </section>
      <section id="comic-check" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)", background: "#111" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "24px clamp(16px, 3vw, 40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "20px 32px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "32px", lineHeight: "0.95", textTransform: "uppercase" }}>
              Comic check
              <span style={{ color: "#ffd400" }}>
                .
              </span>
            </span>
            <span style={{ fontFamily: "'Newsreader', serif", fontSize: "17px", lineHeight: "1.4", color: "#c8c8c3" }}>
              Four things to know before you pay a submission fee. Each card scores what the festival publishes — not what we assume.
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", color: "#d6d6d2" }}>
            <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#ffd400" }}>
              01 · Track record
            </span>
            How many years it has actually run. First-year fests can be great — or vanish with your fee.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", color: "#d6d6d2" }}>
            <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#ffd400" }}>
              02 · Fee published
            </span>
            A clear fee up front. Watch for high fees spread across lots of separate categories.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", color: "#d6d6d2" }}>
            <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#ffd400" }}>
              03 · Pays comics
            </span>
            Whether accepted performers get paid, a door split or nothing. “Exposure” counts as nothing.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", color: "#d6d6d2" }}>
            <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#ffd400" }}>
              04 · Official submit page
            </span>
            The submission link lives on the festival’s own site, not only a third-party form.
          </div>
        </div>
      </section>
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "18px clamp(16px, 3vw, 40px)", display: "flex", flexWrap: "wrap", gap: "12px 28px", alignItems: "center" }}>
          <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "22px", textTransform: "uppercase", color: "#ffd400" }}>
            Submission watch
          </span>
          {(v.watch || []).map((w, _i0) => (
            <Fragment key={_i0}>
              <a href={w.url} target="_blank" rel="noopener" style={{ display: "flex", gap: "10px", alignItems: "baseline", fontSize: "15px" }}>
                <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "20px", textTransform: "uppercase", color: w.color }}>
                  {w.when}
                </span>
                <span style={{ fontWeight: "700" }}>
                  {w.name}
                </span>
                <span style={{ color: "#a3a39e" }}>
                  {w.what}
                  {" ↗"}
                </span>
              </a>
            </Fragment>
          ))}
          {v.noWatch ? (
            <>
              <span style={{ color: "#a3a39e", fontSize: "15px" }}>
                No open or upcoming submission windows tracked yet — run the finder below.
              </span>
            </>
          ) : null}
        </div>
      </section>
      <main style={{ maxWidth: "1440px", width: "100%", boxSizing: "border-box", margin: "0 auto", padding: "32px clamp(16px, 3vw, 40px) 64px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "40px 24px" }}>
        {(v.rows || []).map((f, _i0) => (
          <Fragment key={_i0}>
            <article style={{ display: "flex", flexDirection: "column", gap: "14px", minWidth: "0" }}>
              <a href={f.site} target="_blank" rel="noopener" style={{ position: "relative", display: "block", aspectRatio: "16 / 10", overflow: "hidden", background: f.posterBg, color: f.posterFg }}>
                <div style={{ position: "absolute", inset: "0", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {f.city}
                  </span>
                  <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "44px", lineHeight: "0.86", textTransform: "uppercase", overflowWrap: "anywhere" }}>
                    {f.name}
                  </span>
                </div>
                {f.hasArt ? (
                  <>
                    <img src={f.art} alt={`${f.name} art`} loading="lazy" onError={f.artFail} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", background: "#111" }} />
                  </>
                ) : null}
                <span style={{ position: "absolute", left: "12px", bottom: "12px", padding: "5px 9px", background: "#0a0a0a", color: f.phaseColor, fontWeight: "900", fontStretch: "62%", fontSize: "16px", textTransform: "uppercase" }}>
                  {f.phase}
                </span>
              </a>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                  <h2 style={{ margin: "0", fontWeight: "800", fontStretch: "70%", fontSize: "26px", lineHeight: "1", textTransform: "uppercase" }}>
                    {f.name}
                  </h2>
                  <span style={{ fontSize: "14px", color: "#a3a39e" }}>
                    {f.dates}
                    {" · "}
                    {f.city}
                  </span>
                </div>
                <span style={{ flex: "none", padding: "5px 9px", border: `1px solid ${f.st.border}`, background: f.st.bg, color: f.st.fg, fontSize: "11px", fontWeight: "800", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  {f.st.label}
                </span>
              </div>
              {f.hasBill ? (
                <>
                  <p style={{ margin: "0", fontFamily: "'Newsreader', serif", fontSize: "17px", lineHeight: "1.4", color: "#c8c8c3" }}>
                    {f.bill}
                  </p>
                </>
              ) : null}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", fontSize: "13px", color: "#a3a39e" }}>
                <span>
                  {f.formatText}
                </span>
                {f.hasFee ? (
                  <>
                    <span>
                      {"Fee: "}
                      {f.fee}
                    </span>
                  </>
                ) : null}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Comic check
                  </span>
                  <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "20px", lineHeight: "1", color: f.checkColor }}>
                    {f.checkScore}
                    /4 published
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {(f.checks || []).map((c, _i2) => (
                    <Fragment key={_i2}>
                      <span style={{ padding: "3px 8px", fontSize: "12px", fontWeight: "700", border: `1px solid ${c.bd}`, color: c.fg, background: c.bg }}>
                        {c.label}
                      </span>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
                {f.hasSubmit ? (
                  <>
                    <a className="fe-1" href={f.submitUrl} target="_blank" rel="noopener" style={{ padding: "11px 16px", background: f.subBg, color: f.subFg, border: `1px solid ${f.subBorder}`, fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {f.subLabel}
                      {" ↗"}
                    </a>
                  </>
                ) : null}
                <a href={f.site} target="_blank" rel="noopener" style={{ padding: "11px 16px", border: "1px solid rgba(255,255,255,0.25)", fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Festival site ↗
                </a>
              </div>
              <a href={f.source} target="_blank" rel="noopener" style={{ fontSize: "12px", color: "#7a7a76" }}>
                {"Source: "}
                {f.sourceHost}
              </a>
            </article>
          </Fragment>
        ))}
        {v.empty ? (
          <>
            <p style={{ margin: "0", fontSize: "18px", color: "#a3a39e" }}>
              Nothing matches. Clear the filters or add festivals below.
            </p>
          </>
        ) : null}
      </main>
      <section id="finder" style={{ borderTop: "1px solid rgba(255,255,255,0.12)", background: "#111" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(36px, 5vw, 64px) clamp(16px, 3vw, 40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(44px, 6vw, 80px)", lineHeight: "0.85", textTransform: "uppercase" }}>
              The finder
              <br />
              <span style={{ color: "#ffd400" }}>
                prompt
              </span>
            </h2>
            <p style={{ margin: "0", fontFamily: "'Newsreader', serif", fontSize: "19px", lineHeight: "1.45", color: "#c8c8c3" }}>
              {"Run it in an AI assistant with web search on. It sweeps aggregators, news, city searches and ticketing, confirms every date on the festival's own site, and returns JSON with dates, submission windows, the direct submit link and art."}
            </p>
            <ol style={{ margin: "0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "15px", lineHeight: "1.4", color: "#c8c8c3" }}>
              <li>
                Copy the prompt.
              </li>
              <li>
                Paste it into an assistant with web search.
              </li>
              <li>
                Paste the JSON it returns into the box and hit Add.
              </li>
            </ol>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <button onClick={v.copyPrompt} style={{ padding: "12px 18px", border: "0", background: "#ffd400", color: "#0a0a0a", cursor: "pointer", font: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {v.copyLabel}
              </button>
              <a href="pipeline/festival-finder-prompt.md" target="_blank" style={{ padding: "12px 18px", border: "1px solid rgba(255,255,255,0.25)", fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Read full prompt + formula
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <label htmlFor="fest-json" style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
              Paste finder results (JSON)
            </label>
            <textarea id="fest-json" value={v.json} onChange={v.onJson} rows="10" placeholder={"[{ \"name\": \"…\", \"start\": \"2026-11-06\", \"submitUrl\": \"…\" }]"} style={{ background: "#0a0a0a", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", padding: "14px", font: "13px/1.5 ui-monospace, Menlo, monospace", resize: "vertical" }} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
              <button onClick={v.importJson} style={{ padding: "12px 18px", border: "1px solid #ffd400", background: "transparent", color: "#ffd400", cursor: "pointer", font: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Add festivals
              </button>
              {v.hasImported ? (
                <>
                  <button onClick={v.clearImported} style={{ padding: "12px 18px", border: "1px solid rgba(255,255,255,0.25)", background: "transparent", color: "#a3a39e", cursor: "pointer", font: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {"Remove "}
                    {v.importedCount}
                    {" added"}
                  </button>
                </>
              ) : null}
              <span style={{ fontSize: "14px", color: v.msgColor }}>
                {v.msg}
              </span>
            </div>
          </div>
        </div>
      </section>
      <footer style={{ marginTop: "auto", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "24px clamp(16px, 3vw, 40px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", fontSize: "13px", color: "#a3a39e" }}>
          <span>
            {"© 2026 Heckle Media · Festival Tracker · Dates and submission windows from each festival's published pages; always confirm on the official site. Art via each festival's share image (Microlink)."}
          </span>
          <a href="./">
            ← Back to Heckle
          </a>
        </div>
      </footer>
    </div>
  );
}
