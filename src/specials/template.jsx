// Generated from the Claude Design prototype (Specials.dc.html) — markup and inline styles match the design 1:1.
// `v` is the view model returned by the page component (see the sibling page module).
import { Fragment } from 'react';

export default function render(v) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header style={{ position: "sticky", top: "0", zIndex: "30", background: "rgba(10,10,10,0.92)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)", height: "60px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "16px 28px", overflow: "hidden" }}>
          <a href="./" style={{ fontWeight: "900", fontStretch: "62%", fontSize: "40px", lineHeight: "0.9", textTransform: "uppercase" }}>
            Heckle
            <span style={{ color: "#ffd400" }}>
              .
            </span>
          </a>
          <span className="sp-label" style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#a3a39e", marginRight: "auto" }}>
            The Specials Index
          </span>
          <nav className="rail sp-nav" style={{ display: "flex", gap: "20px", minWidth: "0", overflowX: "auto", scrollbarWidth: "none", whiteSpace: "nowrap", fontWeight: "700", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <a href="./">
              Home
            </a>
            <a href="specials.html" style={{ color: "#ffd400" }}>
              Specials
            </a>
            <a href="festivals.html">
              Festivals
            </a>
            <a href="open-mics.html">
              Open Mics
            </a>
            <a href="games.html">
              Games
            </a>
          </nav>
        </div>
      </header>
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.12)", background: "radial-gradient(ellipse 50% 80% at 90% 0%, rgba(255,212,0,0.12), transparent 70%)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(36px, 5vw, 72px) clamp(16px, 3vw, 40px) 36px", display: "flex", flexDirection: "column", gap: "32px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 48px", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffd400" }}>
                {"1996 — 2026 · "}
                {v.total}
                {" specials scored · streaming, cable & YouTube"}
              </span>
              <h1 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(64px, 10vw, 168px)", lineHeight: "0.8", textTransform: "uppercase" }}>
                The Specials
                <br />
                <span style={{ color: "#ffd400" }}>
                  Index.
                </span>
              </h1>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "420px" }}>
              <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.12em", textTransform: "uppercase", color: "#a3a39e" }}>
                How we score
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span style={{ width: "64px", flex: "none", textAlign: "center", background: "#ffd400", color: "#0a0a0a", padding: "3px 0", fontWeight: "900", fontStretch: "62%", fontSize: "16px", textTransform: "uppercase" }}>
                    Killed
                  </span>
                  <span style={{ fontSize: "14px", color: "#d6d6d2" }}>
                    75%+ of critics say it lands
                  </span>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span style={{ width: "62px", flex: "none", textAlign: "center", border: "1px solid #ffd400", color: "#ffd400", padding: "2px 0", fontWeight: "900", fontStretch: "62%", fontSize: "16px", textTransform: "uppercase" }}>
                    Solid
                  </span>
                  <span style={{ fontSize: "14px", color: "#d6d6d2" }}>
                    60–74% — worth the hour
                  </span>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span style={{ width: "62px", flex: "none", textAlign: "center", border: "1px solid #7a7a76", color: "#a3a39e", padding: "2px 0", fontWeight: "900", fontStretch: "62%", fontSize: "16px", textTransform: "uppercase" }}>
                    Bombed
                  </span>
                  <span style={{ fontSize: "14px", color: "#d6d6d2" }}>
                    Under 60% — the room went quiet
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid #ffd400", paddingBottom: "8px" }}>
              <h2 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "32px", lineHeight: "1", textTransform: "uppercase" }}>
                Climbing
                {" "}
                <span style={{ color: "#ffd400" }}>
                  ▲
                </span>
                {" "}
                last 60 days
              </h2>
              <span style={{ fontSize: "13px", color: "#a3a39e" }}>
                Rank change since July 30
              </span>
            </div>
            <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 520px), 1fr))", columnGap: "32px" }}>
              {(v.climbers || []).map((c, _i0) => (
                <Fragment key={_i0}>
                  <li style={{ borderBottom: "1px solid rgba(255,255,255,0.12)", background: c.rowBg }}>
                    <a className="sp-1" href="#" style={{ display: "grid", gridTemplateColumns: "52px 44px minmax(0, 1fr) auto", alignItems: "center", gap: "14px", padding: "12px 10px", color: "inherit", textDecoration: "none" }}>
                      <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "40px", lineHeight: "1", color: c.placeColor, fontVariantNumeric: "tabular-nums" }}>
                        {c.place}
                      </span>
                      <span style={{ position: "relative", width: "44px", height: "66px", overflow: "hidden", background: "#1c1c1c", color: "#ffd400", display: "grid", placeItems: "center", fontWeight: "900", fontStretch: "62%", fontSize: "16px" }}>
                        {c.initials}
                        {c.hasPoster ? (
                          <>
                            <img src={c.poster} alt="" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                          </>
                        ) : null}
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                        <span style={{ fontWeight: "800", fontStretch: "70%", fontSize: "20px", lineHeight: "1", textTransform: "uppercase", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {c.title}
                        </span>
                        <span style={{ fontSize: "13px", color: "#a3a39e", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {c.comic}
                          {" · "}
                          {c.network}
                          {" · "}
                          {c.year}
                        </span>
                        <span style={{ height: "4px", background: "rgba(255,255,255,0.08)" }}>
                          <span style={{ display: "block", height: "100%", width: c.bar, background: "#ffd400" }} />
                        </span>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                        <span style={{ background: "#ffd400", color: "#0a0a0a", padding: "3px 8px", fontWeight: "900", fontStretch: "62%", fontSize: "18px", lineHeight: "1" }}>
                          {"▲ "}
                          {c.delta}
                        </span>
                        <span style={{ fontSize: "12px", color: "#a3a39e", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                          #
                          {c.oldRank}
                          {" →"}
                          {" "}
                          <strong style={{ color: "#f5f5f2" }}>
                            #
                            {c.rank}
                          </strong>
                        </span>
                      </span>
                    </a>
                  </li>
                </Fragment>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section style={{ position: "sticky", top: "60px", zIndex: "20", background: "rgba(10,10,10,0.96)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "14px clamp(16px, 3vw, 40px)", display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
            <input value={v.q} onChange={v.onQ} placeholder="Search title or comic…" style={{ flex: "1 1 220px", minWidth: "180px", height: "44px", padding: "0 14px", background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "15px" }} />
            <select value={v.sort} onChange={v.onSort} aria-label="Sort" style={{ height: "44px", padding: "0 12px", background: "#ffd400", color: "#0a0a0a", border: "0", borderRadius: "0", fontFamily: "inherit", fontWeight: "800", fontSize: "14px", cursor: "pointer" }}>
              {(v.sortOpts || []).map((o, _i0) => (
                <Fragment key={_i0}>
                  <option value={o.v}>
                    {"Sort: "}
                    {o.l}
                  </option>
                </Fragment>
              ))}
            </select>
            <select value={v.network} onChange={v.onNetwork} aria-label="Network" style={{ height: "44px", padding: "0 12px", background: "#0a0a0a", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "14px" }}>
              {(v.networkOpts || []).map((o, _i0) => (
                <Fragment key={_i0}>
                  <option value={o}>
                    {o}
                  </option>
                </Fragment>
              ))}
            </select>
            <select value={v.era} onChange={v.onEra} aria-label="Era" style={{ height: "44px", padding: "0 12px", background: "#0a0a0a", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "14px" }}>
              {(v.eraOpts || []).map((o, _i0) => (
                <Fragment key={_i0}>
                  <option value={o}>
                    {o}
                  </option>
                </Fragment>
              ))}
            </select>
            <select value={v.rating} onChange={v.onRating} aria-label="Rating" style={{ height: "44px", padding: "0 12px", background: "#0a0a0a", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "14px" }}>
              {(v.ratingOpts || []).map((o, _i0) => (
                <Fragment key={_i0}>
                  <option value={o}>
                    {o}
                  </option>
                </Fragment>
              ))}
            </select>
            <button type="button" onClick={v.toggleOnNow} aria-pressed={v.onNowPressed} style={{ height: "44px", padding: "0 14px", display: "inline-flex", gap: "8px", alignItems: "center", background: v.onNowBg, color: v.onNowFg, border: `1px solid ${v.onNowBd}`, fontFamily: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", whiteSpace: "nowrap" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "currentColor" }} />
              On now
              {" "}
            </button>
            <button type="button" onClick={v.toggleFree} aria-pressed={v.freePressed} style={{ height: "44px", padding: "0 14px", display: "inline-flex", gap: "8px", alignItems: "center", background: v.freeBg, color: v.freeFg, border: `1px solid ${v.freeBd}`, fontFamily: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", whiteSpace: "nowrap" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
              Free on YouTube
              {" "}
            </button>
            <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.25)" }}>
              <button type="button" onClick={v.setGrid} aria-label="Grid view" style={{ width: "44px", height: "42px", display: "grid", placeItems: "center", background: v.gridBg, color: v.gridFg, border: "0", cursor: "pointer" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </button>
              <button type="button" onClick={v.setList} aria-label="List view" style={{ width: "44px", height: "42px", display: "grid", placeItems: "center", background: v.listBg, color: v.listFg, border: "0", cursor: "pointer" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                </svg>
              </button>
            </div>
          </div>
          <div className="rail" style={{ display: "flex", gap: "6px", overflowX: "auto", scrollbarWidth: "none" }}>
            {(v.genreChips || []).map((g, _i0) => (
              <Fragment key={_i0}>
                <button type="button" onClick={g.onClick} style={{ flex: "none", height: "32px", padding: "0 12px", background: g.bg, color: g.fg, border: `1px solid ${g.bd}`, fontFamily: "inherit", fontWeight: "700", fontSize: "13px", cursor: "pointer", whiteSpace: "nowrap" }}>
                  {g.label}
                </button>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <section style={{ maxWidth: "1440px", width: "100%", boxSizing: "border-box", margin: "0 auto", padding: "28px clamp(16px, 3vw, 40px) clamp(56px, 7vw, 96px)", display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px", fontSize: "13px", color: "#a3a39e" }}>
          <span>
            <strong style={{ color: "#f5f5f2" }}>
              {v.count}
            </strong>
            {" "}
            {"specials · "}
            {v.sortLabel}
          </span>
          <span>
            {v.artNote}
            {" · Scores, views and rank movement are sample data."}
          </span>
        </div>
        {v.isGrid ? (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 200px), 1fr))", gap: "32px 20px" }}>
              {(v.rows || []).map((s, _i0) => (
                <Fragment key={_i0}>
                  <a href="#" style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                    <div className="sp-2" style={{ position: "relative", aspectRatio: "2 / 3", background: s.posterBg, color: s.posterFg, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "14px", boxSizing: "border-box", transition: "transform .35s cubic-bezier(.2,.7,.2,1)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontSize: "11px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        <span>
                          {s.network}
                        </span>
                        <span>
                          {s.year}
                        </span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "15px", letterSpacing: "0.04em", textTransform: "uppercase", opacity: "0.8" }}>
                          {s.comic}
                        </span>
                        <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: s.titleSize, lineHeight: "0.86", textTransform: "uppercase", overflowWrap: "anywhere" }}>
                          {s.title}
                        </span>
                      </div>
                      {s.hasPoster ? (
                        <>
                          <img src={s.poster} alt={`${s.title} cover art`} loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                        </>
                      ) : null}
                      <span style={{ position: "absolute", zIndex: "2", right: "10px", top: "32px", fontWeight: "900", fontStretch: "62%", fontSize: "13px", padding: "2px 6px", background: s.trendBg, color: s.trendFg }}>
                        {s.trendText}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <span style={{ minWidth: "58px", textAlign: "center", background: s.certBg, color: s.certFg, border: `1px solid ${s.certBd}`, padding: "2px 4px", fontWeight: "900", fontStretch: "62%", fontSize: "14px", textTransform: "uppercase" }}>
                        {s.cert}
                      </span>
                      <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "24px", lineHeight: "1" }}>
                        {s.critic}
                        %
                      </span>
                      <span style={{ fontSize: "12px", color: "#a3a39e", marginLeft: "auto" }}>
                        {"Crowd "}
                        {s.crowd}
                        %
                      </span>
                    </div>
                    <span style={{ fontWeight: "800", fontStretch: "70%", fontSize: "18px", lineHeight: "1.05", textTransform: "uppercase" }}>
                      {s.title}
                    </span>
                    <span style={{ fontSize: "12px", color: "#a3a39e" }}>
                      #
                      {s.rank}
                      {" · "}
                      {s.views}
                      {" views · "}
                      {s.genreText}
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.04em", color: s.onNowColor }}>
                      {s.whereText}
                    </span>
                  </a>
                </Fragment>
              ))}
            </div>
          </>
        ) : null}
        {v.isList ? (
          <>
            <div style={{ overflowX: "auto" }}>
              <div style={{ minWidth: "920px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "grid", gridTemplateColumns: "56px 64px minmax(0, 2.4fr) 110px minmax(0, 1.2fr) 88px 72px 84px 90px", gap: "14px", padding: "10px 0", borderBottom: "2px solid #f5f5f2", fontSize: "11px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                  <span>
                    Rank
                  </span>
                  <span>
                    60 days
                  </span>
                  <span>
                    Special
                  </span>
                  <span>
                    Network
                  </span>
                  <span>
                    Genre
                  </span>
                  <span>
                    Critics
                  </span>
                  <span>
                    Crowd
                  </span>
                  <span>
                    Views
                  </span>
                  <span>
                    On now
                  </span>
                </div>
                {(v.rows || []).map((s, _i0) => (
                  <Fragment key={_i0}>
                    <a className="sp-3" href="#" style={{ display: "grid", gridTemplateColumns: "56px 64px minmax(0, 2.4fr) 110px minmax(0, 1.2fr) 88px 72px 84px 90px", gap: "14px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                      <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "32px", lineHeight: "1" }}>
                        {s.rank}
                      </span>
                      <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "18px", color: s.trendColor }}>
                        {s.trendText}
                      </span>
                      <span style={{ display: "flex", gap: "12px", alignItems: "center", minWidth: "0" }}>
                        <span style={{ flex: "none", position: "relative", overflow: "hidden", width: "36px", height: "54px", background: s.posterBg, color: s.posterFg, display: "grid", placeItems: "center", fontWeight: "900", fontStretch: "62%", fontSize: "14px" }}>
                          {s.initials}
                          {s.hasPoster ? (
                            <>
                              <img src={s.poster} alt="" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                            </>
                          ) : null}
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                          <span style={{ fontWeight: "800", fontStretch: "70%", fontSize: "20px", lineHeight: "1", textTransform: "uppercase", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {s.title}
                          </span>
                          <span style={{ fontSize: "13px", color: "#a3a39e" }}>
                            {s.comic}
                            {" · "}
                            {s.year}
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: "600" }}>
                        {s.network}
                      </span>
                      <span style={{ fontSize: "13px", color: "#d6d6d2" }}>
                        {s.genreText}
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                        <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "22px", lineHeight: "1" }}>
                          {s.critic}
                          %
                        </span>
                        <span style={{ alignSelf: "flex-start", background: s.certBg, color: s.certFg, border: `1px solid ${s.certBd}`, padding: "0 5px", fontWeight: "900", fontStretch: "62%", fontSize: "11px", textTransform: "uppercase" }}>
                          {s.cert}
                        </span>
                      </span>
                      <span style={{ fontWeight: "700", fontSize: "15px" }}>
                        {s.crowd}
                        %
                      </span>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        {s.views}
                      </span>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: s.onNowColor }}>
                        {s.onNowText}
                      </span>
                    </a>
                  </Fragment>
                ))}
              </div>
            </div>
          </>
        ) : null}
        {v.noResults ? (
          <>
            <div style={{ border: "1px dashed rgba(255,255,255,0.25)", padding: "40px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "40px", lineHeight: "0.9", textTransform: "uppercase" }}>
                Crickets.
              </span>
              <span style={{ fontFamily: "'Newsreader', serif", fontSize: "19px", color: "#d6d6d2" }}>
                No specials match those filters.
              </span>
            </div>
          </>
        ) : null}
        {v.hasMore ? (
          <>
            <button className="sp-4" type="button" onClick={v.more} style={{ alignSelf: "center", height: "52px", padding: "0 28px", background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.3)", fontFamily: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "15px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
              {"Show more · "}
              {v.remaining}
              {" left"}
            </button>
          </>
        ) : null}
      </section>
      <footer style={{ marginTop: "auto", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "24px clamp(16px, 3vw, 40px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", fontSize: "13px", color: "#a3a39e" }}>
          <span>
            © 2026 Heckle Media · The Specials Index · Cover art via Apple TV, Wikipedia/Wikimedia Commons and (optionally) TMDB; used for identification, rights remain with their owners.
          </span>
          <a href="./">
            ← Back to Heckle
          </a>
        </div>
      </footer>
    </div>
  );
}
