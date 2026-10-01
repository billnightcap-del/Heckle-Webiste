// Generated from the Claude Design prototype (Open Mics.dc.html) — markup and inline styles match the design 1:1.
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
            Open Mic Finder
          </span>
          <a href="games.html" style={{ fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            Games
          </a>
          <nav style={{ display: "flex", border: "1px solid rgba(255,255,255,0.25)" }}>
            <a href="#find" onClick={v.goFind} style={{ whiteSpace: "nowrap", padding: "10px 16px", background: v.tabFindBg, color: v.tabFindFg, fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Find a Mic
            </a>
            <a href="#submit" onClick={v.goSubmit} style={{ whiteSpace: "nowrap", padding: "10px 16px", background: v.tabSubBg, color: v.tabSubFg, fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Submit a Mic
            </a>
          </nav>
        </div>
      </header>
      {v.isFind ? (
        <>
          <section style={{ borderBottom: "1px solid rgba(255,255,255,0.12)", background: "radial-gradient(ellipse 50% 80% at 85% 0%, rgba(255,212,0,0.12), transparent 70%)" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(36px, 5vw, 72px) clamp(16px, 3vw, 40px) 28px", display: "flex", flexDirection: "column", gap: "28px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 48px", alignItems: "flex-end", justifyContent: "space-between" }}>
                <h1 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(64px, 10vw, 160px)", lineHeight: "0.8", textTransform: "uppercase" }}>
                  Open Mics
                  <br />
                  <span style={{ color: "#ffd400" }}>
                    {v.cityName}
                  </span>
                </h1>
                <div style={{ display: "flex", gap: "0", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <div style={{ padding: "14px 20px", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "48px", lineHeight: "0.85", color: "#ffd400" }}>
                      {v.tonightCount}
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#a3a39e" }}>
                      Tonight
                    </span>
                  </div>
                  <div style={{ padding: "14px 20px", display: "flex", flexDirection: "column", gap: "4px", borderLeft: "1px solid rgba(255,255,255,0.18)" }}>
                    <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "48px", lineHeight: "0.85" }}>
                      {v.weekCount}
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#a3a39e" }}>
                      This week
                    </span>
                  </div>
                  <div style={{ padding: "14px 20px", display: "flex", flexDirection: "column", gap: "4px", borderLeft: "1px solid rgba(255,255,255,0.18)" }}>
                    <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "48px", lineHeight: "0.85" }}>
                      {v.freeCount}
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#a3a39e" }}>
                      Free
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "stretch" }}>
                <label style={{ position: "relative", flex: "0 1 300px", minWidth: "220px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    City
                  </span>
                  <select value={v.city} onChange={v.onCity} style={{ appearance: "none", WebkitAppearance: "none", height: "52px", padding: "0 44px 0 16px", background: "#ffd400", color: "#0a0a0a", border: "0", borderRadius: "0", fontFamily: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "18px", letterSpacing: "0.04em", textTransform: "uppercase", cursor: "pointer" }}>
                    {(v.cities || []).map((c, _i0) => (
                      <Fragment key={_i0}>
                        <option value={c.slug}>
                          {c.label}
                        </option>
                      </Fragment>
                    ))}
                  </select>
                  <svg style={{ position: "absolute", right: "14px", bottom: "16px", pointerEvents: "none", color: "#0a0a0a" }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </label>
                <label style={{ flex: "1 1 260px", minWidth: "200px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Search
                  </span>
                  <input value={v.q} onChange={v.onQ} placeholder="Venue, neighborhood, host…" style={{ height: "52px", padding: "0 16px", background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px" }} />
                </label>
                <label style={{ flex: "0 1 220px", minWidth: "180px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Sign-up
                  </span>
                  <select value={v.signup} onChange={v.onSignup} style={{ height: "52px", padding: "0 12px", background: "#0a0a0a", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "15px" }}>
                    {(v.signupOpts || []).map((o, _i0) => (
                      <Fragment key={_i0}>
                        <option value={o}>
                          {o}
                        </option>
                      </Fragment>
                    ))}
                  </select>
                </label>
                <label style={{ flex: "0 1 240px", minWidth: "190px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Freshness
                  </span>
                  <select value={v.fresh} onChange={v.onFresh} style={{ height: "52px", padding: "0 12px", background: "#0a0a0a", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "15px" }}>
                    {(v.freshOpts || []).map((o, _i0) => (
                      <Fragment key={_i0}>
                        <option value={o}>
                          {o}
                        </option>
                      </Fragment>
                    ))}
                  </select>
                </label>
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {(v.dayChips || []).map((d, _i0) => (
                  <Fragment key={_i0}>
                    <button type="button" onClick={d.onClick} style={{ height: "38px", padding: "0 14px", background: d.bg, color: d.fg, border: `1px solid ${d.bd}`, fontFamily: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", whiteSpace: "nowrap" }}>
                      {d.label}
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>
          </section>
          <section style={{ maxWidth: "1440px", width: "100%", boxSizing: "border-box", margin: "0 auto", padding: "32px clamp(16px, 3vw, 40px) clamp(56px, 7vw, 96px)", display: "flex", flexWrap: "wrap", gap: "40px" }}>
            <div style={{ flex: "3 1 600px", minWidth: "0", display: "flex", flexDirection: "column", gap: "40px" }}>
              {v.noResults ? (
                <>
                  <div style={{ border: "1px dashed rgba(255,255,255,0.25)", padding: "40px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "40px", lineHeight: "0.9", textTransform: "uppercase" }}>
                      Crickets.
                    </span>
                    <span style={{ fontFamily: "'Newsreader', serif", fontSize: "19px", color: "#d6d6d2" }}>
                      {"No mics match those filters in "}
                      {v.cityName}
                      . Know one we’re missing?
                    </span>
                    <a href="#submit" onClick={v.goSubmit} style={{ fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#ffd400" }}>
                      Submit a mic →
                    </a>
                  </div>
                </>
              ) : null}
              {(v.groups || []).map((g, _i0) => (
                <Fragment key={_i0}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", borderBottom: `2px solid ${g.rule}`, paddingBottom: "8px" }}>
                      <h2 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "44px", lineHeight: "1", textTransform: "uppercase", color: g.color }}>
                        {g.label}
                      </h2>
                      <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#a3a39e" }}>
                        {g.count}
                      </span>
                    </div>
                    {(g.rows || []).map((m, _i2) => (
                      <Fragment key={_i2}>
                        <div className="om-1" style={{ display: "grid", gridTemplateColumns: "clamp(84px, 10vw, 128px) minmax(0, 1fr)", gap: "clamp(14px, 2vw, 28px)", padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.12)", transition: "background .2s", opacity: m.opacity }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "clamp(34px, 3.4vw, 46px)", lineHeight: "0.85" }}>
                              {m.timeShort}
                            </span>
                            <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#a3a39e" }}>
                              {m.ampm}
                            </span>
                          </div>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 28px", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1 1 280px", minWidth: "0" }}>
                              <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                                <span style={{ fontWeight: "800", fontStretch: "70%", fontSize: "26px", lineHeight: "1", textTransform: "uppercase" }}>
                                  {m.name}
                                </span>
                                {m.isNew ? (
                                  <>
                                    <span style={{ background: "#ffd400", color: "#0a0a0a", padding: "2px 7px", fontSize: "11px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                      New
                                    </span>
                                  </>
                                ) : null}
                                {m.isDead ? (
                                  <>
                                    <span style={{ border: "1px solid #ff9f1c", color: "#ff9f1c", padding: "2px 7px", fontSize: "11px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                      Reported closed · rechecking
                                    </span>
                                  </>
                                ) : null}
                              </div>
                              <span style={{ fontFamily: "'Newsreader', serif", fontSize: "18px", color: "#d6d6d2" }}>
                                {m.venue}
                                {" · "}
                                {m.hood}
                              </span>
                              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "4px" }}>
                                <span style={{ border: "1px solid rgba(255,255,255,0.22)", padding: "3px 8px", fontSize: "12px", fontWeight: "600" }}>
                                  {m.signup}
                                </span>
                                <span style={{ border: "1px solid rgba(255,255,255,0.22)", padding: "3px 8px", fontSize: "12px", fontWeight: "600" }}>
                                  {m.setLen}
                                </span>
                                <span style={{ border: "1px solid rgba(255,255,255,0.22)", padding: "3px 8px", fontSize: "12px", fontWeight: "600" }}>
                                  {m.frequency}
                                </span>
                                <span style={{ border: `1px solid ${m.costBd}`, color: m.costFg, padding: "3px 8px", fontSize: "12px", fontWeight: "700" }}>
                                  {m.cost}
                                </span>
                                {m.isBringer ? (
                                  <>
                                    <span style={{ background: "#ff9f1c", color: "#0a0a0a", padding: "3px 8px", fontSize: "12px", fontWeight: "800" }}>
                                      {"Bringer · "}
                                      {m.bringerNote}
                                    </span>
                                  </>
                                ) : null}
                              </div>
                              <span style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "#d6d6d2", marginTop: "2px" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10" />
                                  <path d="M12 6v6l4 2" />
                                </svg>
                                {m.window}
                              </span>
                            </div>
                            <div style={{ flex: "0 0 auto", maxWidth: "100%", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end", textAlign: "right" }}>
                              <span style={{ display: "inline-flex", gap: "6px", alignItems: "center", padding: "3px 8px", fontSize: "12px", fontWeight: "800", letterSpacing: "0.04em", background: m.freshBg, color: m.freshFg, border: `1px solid ${m.freshBd}` }}>
                                {m.freshText}
                              </span>
                              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#a3a39e", whiteSpace: "nowrap" }}>
                                {"via "}
                                {m.source}
                              </span>
                              <span style={{ fontSize: "13px", color: "#b5b5b0", maxWidth: "260px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                {m.host}
                              </span>
                              <div style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                                <button className="om-2" type="button" onClick={m.confirm} disabled={m.confirmedByMe} style={{ height: "34px", padding: "0 10px", background: "transparent", color: m.confirmFg, border: `1px solid ${m.confirmBd}`, whiteSpace: "nowrap", fontFamily: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                                  {m.confirmLabel}
                                </button>
                                <button className="om-3" type="button" onClick={m.report} style={{ whiteSpace: "nowrap", height: "34px", padding: "0 10px", background: "transparent", color: "#a3a39e", border: "1px solid rgba(255,255,255,0.22)", fontFamily: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                                  {m.reportLabel}
                                </button>
                                <a href={m.url} target="_blank" rel="noopener" style={{ whiteSpace: "nowrap", height: "34px", display: "inline-flex", alignItems: "center", padding: "0 10px", border: "1px solid rgba(255,255,255,0.22)", fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                                  Listing ↗
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </Fragment>
              ))}
            </div>
            <aside style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px", alignSelf: "flex-start", position: "sticky", top: "96px" }}>
              <div style={{ background: "#ffd400", color: "#0a0a0a", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "44px", lineHeight: "0.88", textTransform: "uppercase" }}>
                  Run a mic?
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.45", fontWeight: "500" }}>
                  List it free. It shows up in your city’s schedule the moment you submit.
                </span>
                <a className="om-4" href="#submit" onClick={v.goSubmit} style={{ alignSelf: "flex-start", background: "#0a0a0a", color: "#ffd400", padding: "12px 16px", fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Submit your mic
                </a>
              </div>
              <div style={{ border: "1px solid rgba(255,255,255,0.18)", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffd400" }}>
                  Data
                </span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#d6d6d2" }}>
                  {v.dataNote}
                </span>
                <span style={{ fontSize: "13px", color: "#a3a39e" }}>
                  Sources: Ticketmaster, venue calendars, comic submissions.
                </span>
              </div>
              <div style={{ border: "1px solid rgba(255,255,255,0.18)", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffd400" }}>
                  How “confirmed” works
                </span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#d6d6d2" }}>
                  Every listing shows when a host, a comic or our pipeline last saw it running. Went tonight? Tap
                  {" "}
                  <strong style={{ color: "#f5f5f2" }}>
                    Still running
                  </strong>
                  . Showed up to a sports bar? Tap
                  {" "}
                  <strong style={{ color: "#f5f5f2" }}>
                    Report closed
                  </strong>
                  {" "}
                  and we pull it for a recheck.
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#a3a39e" }}>
                  <span>
                    <span style={{ display: "inline-block", width: "10px", height: "10px", background: "#ffd400", marginRight: "8px" }} />
                    Confirmed in the last 14 days
                  </span>
                  <span>
                    <span style={{ display: "inline-block", width: "10px", height: "10px", border: "1px solid #f5f5f2", marginRight: "8px" }} />
                    15–45 days
                  </span>
                  <span>
                    <span style={{ display: "inline-block", width: "10px", height: "10px", border: "1px solid #7a7a76", marginRight: "8px" }} />
                    Older — call ahead
                  </span>
                </span>
              </div>
            </aside>
          </section>
        </>
      ) : null}
      {v.isSubmit ? (
        <>
          <section style={{ maxWidth: "1440px", width: "100%", boxSizing: "border-box", margin: "0 auto", padding: "clamp(36px, 5vw, 72px) clamp(16px, 3vw, 40px) clamp(56px, 7vw, 96px)", display: "flex", flexWrap: "wrap", gap: "48px" }}>
            <div style={{ flex: "1.4 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffd400" }}>
                  Free listing · 25 cities
                </span>
                <h1 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(64px, 9vw, 140px)", lineHeight: "0.8", textTransform: "uppercase" }}>
                  Submit
                  <br />
                  Your
                  {" "}
                  <span style={{ color: "#ffd400" }}>
                    Mic.
                  </span>
                </h1>
                <p style={{ margin: "0", fontFamily: "'Newsreader', serif", fontSize: "20px", lineHeight: "1.4", maxWidth: "46ch", color: "#d6d6d2" }}>
                  Tell us when and where. We sort it into the right city and weekday automatically.
                </p>
              </div>
              {v.justSubmitted ? (
                <>
                  <div style={{ background: "#ffd400", color: "#0a0a0a", padding: "20px 24px", display: "flex", flexWrap: "wrap", gap: "12px 24px", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: "800", fontStretch: "70%", fontSize: "24px", textTransform: "uppercase" }}>
                      {"✓ "}
                      {v.lastName}
                      {" is listed in "}
                      {v.lastCity}
                    </span>
                    <button type="button" onClick={v.viewLast} style={{ background: "#0a0a0a", color: "#ffd400", border: "0", padding: "12px 16px", fontFamily: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                      See it in the schedule
                    </button>
                  </div>
                </>
              ) : null}
              <form onSubmit={v.onSubmit} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "20px" }}>
                <label style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Mic name *
                  </span>
                  <input name="name" required placeholder="e.g. Tuesday Tight Five" style={{ height: "50px", padding: "0 14px", background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    City *
                  </span>
                  <select name="city" required style={{ height: "50px", padding: "0 12px", background: "#0a0a0a", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px" }}>
                    {(v.cities || []).map((c, _i0) => (
                      <Fragment key={_i0}>
                        <option value={c.slug}>
                          {c.label}
                        </option>
                      </Fragment>
                    ))}
                  </select>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Neighborhood
                  </span>
                  <input name="hood" placeholder="e.g. East Village" style={{ height: "50px", padding: "0 14px", background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Venue *
                  </span>
                  <input name="venue" required placeholder="Bar, club or café" style={{ height: "50px", padding: "0 14px", background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Address
                  </span>
                  <input name="address" placeholder="Street address" style={{ height: "50px", padding: "0 14px", background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px" }} />
                </label>
                <fieldset style={{ gridColumn: "1 / -1", border: "0", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <legend style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e", padding: "0", marginBottom: "8px" }}>
                    Day(s) *
                  </legend>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {(v.dayToggles || []).map((d, _i0) => (
                      <Fragment key={_i0}>
                        <button type="button" onClick={d.onClick} aria-pressed={d.pressed} style={{ width: "64px", height: "44px", background: d.bg, color: d.fg, border: `1px solid ${d.bd}`, fontFamily: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer" }}>
                          {d.label}
                        </button>
                      </Fragment>
                    ))}
                  </div>
                </fieldset>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Start time *
                  </span>
                  <input name="time" type="time" required defaultValue="20:00" style={{ height: "50px", padding: "0 14px", background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px", colorScheme: "dark" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Frequency
                  </span>
                  <select name="frequency" style={{ height: "50px", padding: "0 12px", background: "#0a0a0a", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px" }}>
                    <option>
                      Weekly
                    </option>
                    <option>
                      Every other week
                    </option>
                    <option>
                      Monthly
                    </option>
                    <option>
                      One-off
                    </option>
                  </select>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Sign-up
                  </span>
                  <select name="signup" style={{ height: "50px", padding: "0 12px", background: "#0a0a0a", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px" }}>
                    <option>
                      List in person
                    </option>
                    <option>
                      Online sign-up
                    </option>
                    <option>
                      Bucket draw
                    </option>
                    <option>
                      Bringer
                    </option>
                  </select>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Set length
                  </span>
                  <select name="setLen" style={{ height: "50px", padding: "0 12px", background: "#0a0a0a", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px" }} defaultValue="5 min">
                    <option>
                      3 min
                    </option>
                    <option>
                      5 min
                    </option>
                    <option>
                      7 min
                    </option>
                    <option>
                      10 min
                    </option>
                  </select>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    When sign-up opens
                  </span>
                  <input name="window" placeholder="e.g. List at the bar, 7:30 pm" style={{ height: "50px", padding: "0 14px", background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Bringer rule (if any)
                  </span>
                  <input name="bringer" placeholder="e.g. 2 guests = 1 spot" style={{ height: "50px", padding: "0 14px", background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Cost
                  </span>
                  <input name="cost" placeholder="Free, $5, 1-drink min" style={{ height: "50px", padding: "0 14px", background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Host
                  </span>
                  <input name="host" placeholder="Name or @handle" style={{ height: "50px", padding: "0 14px", background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px" }} />
                </label>
                <label style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                    Link (Instagram, event page, website)
                  </span>
                  <input name="url" type="url" placeholder="https://" style={{ height: "50px", padding: "0 14px", background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "0", fontFamily: "inherit", fontSize: "16px" }} />
                </label>
                {v.dayError ? (
                  <>
                    <span style={{ gridColumn: "1 / -1", color: "#ffd400", fontSize: "14px", fontWeight: "600" }}>
                      Pick at least one day.
                    </span>
                  </>
                ) : null}
                <button className="om-5" type="submit" style={{ gridColumn: "1 / -1", justifySelf: "start", height: "56px", padding: "0 28px", background: "#ffd400", color: "#0a0a0a", border: "0", fontFamily: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "16px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                  List my mic
                </button>
              </form>
            </div>
            <aside style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px", alignSelf: "flex-start", position: "sticky", top: "96px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid #ffd400", paddingBottom: "10px" }}>
                <h2 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "36px", lineHeight: "1", textTransform: "uppercase" }}>
                  Submitted, by city
                </h2>
                <span style={{ fontSize: "13px", fontWeight: "700", color: "#ffd400" }}>
                  {v.subTotal}
                </span>
              </div>
              {v.noSubs ? (
                <>
                  <span style={{ fontFamily: "'Newsreader', serif", fontSize: "18px", color: "#b5b5b0" }}>
                    Nothing submitted yet. Yours could be first.
                  </span>
                </>
              ) : null}
              {(v.subsByCity || []).map((sc, _i0) => (
                <Fragment key={_i0}>
                  <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: "12px" }}>
                    <button className="om-6" type="button" onClick={sc.view} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", background: "transparent", color: "inherit", border: "0", padding: "8px 0", fontFamily: "inherit", cursor: "pointer", textAlign: "left" }}>
                      <span style={{ fontWeight: "800", fontStretch: "70%", fontSize: "22px", textTransform: "uppercase" }}>
                        {sc.name}
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: "700", color: "#a3a39e" }}>
                        {sc.count}
                        {" →"}
                      </span>
                    </button>
                    {(sc.items || []).map((it, _i2) => (
                      <Fragment key={_i2}>
                        <div style={{ display: "grid", gridTemplateColumns: "88px minmax(0, 1fr) auto", gap: "10px", alignItems: "baseline", padding: "6px 0", fontSize: "14px" }}>
                          <span style={{ fontWeight: "700", color: "#ffd400" }}>
                            {it.when}
                          </span>
                          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {it.name}
                            {" · "}
                            {it.venue}
                          </span>
                          <button className="om-6" type="button" onClick={it.remove} aria-label="Remove" style={{ background: "transparent", border: "0", color: "#7a7a76", cursor: "pointer", fontSize: "16px", padding: "0 4px" }}>
                            ×
                          </button>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </Fragment>
              ))}
            </aside>
          </section>
        </>
      ) : null}
      <footer style={{ marginTop: "auto", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "24px clamp(16px, 3vw, 40px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", fontSize: "13px", color: "#a3a39e" }}>
          <span>
            © 2026 Heckle Media · Open Mic Finder
          </span>
          <a href="./">
            ← Back to Heckle
          </a>
        </div>
      </footer>
    </div>
  );
}
