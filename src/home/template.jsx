// Generated from the Claude Design prototype (Heckle.dc.html) — markup and inline styles match the design 1:1.
// `v` is the view model returned by the page component (see the sibling page module).
import { Fragment } from 'react';
import ImageSlot from '../shared/ImageSlot.jsx';
import BeehiivForm from '../shared/BeehiivForm.jsx';
import HeckleMic from '../shared/HeckleMic.jsx';

export default function render(v) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", overflowX: "clip" }}>
      {v.showTicker ? (
        <>
          <div style={{ background: "#ffd400", color: "#0a0a0a", overflow: "hidden", display: "flex", alignItems: "stretch" }}>
            <div style={{ flex: "none", position: "relative", zIndex: "2", background: "#0a0a0a", color: "#ffd400", padding: "9px 16px", fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffd400" }} />
              Live
              {" "}
            </div>
            <div style={{ overflow: "hidden", flex: "1" }}>
              <div ref={v.tickerRef} style={{ display: "flex", gap: "44px", width: "max-content", padding: "9px 0 9px 24px", willChange: "transform" }}>
                {(v.tickerLoop || []).map((t, _i0) => (
                  <Fragment key={_i0}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "baseline", fontSize: "14px", whiteSpace: "nowrap", fontWeight: "500" }}>
                      <span style={{ fontWeight: "800", fontStretch: "75%", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        {t.k}
                      </span>
                      <span>
                        {t.t}
                      </span>
                      <span style={{ marginLeft: "34px", fontWeight: "800" }}>
                        /
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : null}
      <header style={{ position: "sticky", top: "0", zIndex: "30", background: "rgba(10,10,10,0.9)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "12px clamp(16px, 3vw, 40px)", display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)", alignItems: "center", gap: "16px" }}>
          <nav style={{ display: "flex", gap: "20px", flexWrap: "wrap", fontWeight: "700", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <a href="#latest">
              Stand-Up
            </a>
            <a href="#clips">
              Video
            </a>
            <a href="specials.html">
              Specials
            </a>
            <a href="#craft">
              Craft
            </a>
            <a href="festivals.html">
              Festivals
            </a>
            <a href="open-mics.html" style={{ color: "#ffd400" }}>
              Open Mics
            </a>
            <a href="games.html">
              Games
            </a>
          </nav>
          <a href="#top" style={{ fontWeight: "900", fontStretch: "62%", fontSize: "clamp(34px, 4vw, 48px)", lineHeight: "0.9", letterSpacing: "-0.01em", textTransform: "uppercase" }}>
            Heckle
            <span style={{ color: "#ffd400" }}>
              .
            </span>
          </a>
          <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", alignItems: "center" }}>
            <button className="hm-1" type="button" aria-label="Search" style={{ width: "40px", height: "40px", display: "grid", placeItems: "center", background: "transparent", color: "inherit", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <a className="hm-2" href="#setlist" style={{ height: "40px", display: "inline-flex", alignItems: "center", padding: "0 16px", background: "#ffd400", color: "#0a0a0a", fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Subscribe
            </a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="rail" style={{ maxWidth: "1440px", margin: "0 auto", padding: "9px clamp(16px, 3vw, 40px)", display: "flex", gap: "26px", overflowX: "auto", scrollbarWidth: "none", fontSize: "13px", fontWeight: "500", color: "#b5b5b0", whiteSpace: "nowrap" }}>
            <a href="specials.html" style={{ color: "#ffd400" }}>
              Specials
            </a>
            <a href="festivals.html">
              Festivals
            </a>
            <a href="games.html">
              Game Night
            </a>
            <a href="#latest">
              Tours
            </a>
            <a href="#latest">
              Late Night
            </a>
            <a href="#latest">
              Sketch
            </a>
            <a href="#latest">
              Podcasts
            </a>
            <a href="#latest">
              Festivals
            </a>
            <a href="#watch">
              Comics to Watch
            </a>
            <a href="#originals">
              Originals
            </a>
            <a href="#latest">
              {"Film & TV"}
            </a>
            <a href="#latest">
              Internet
            </a>
          </div>
        </div>
      </header>
      <section id="stage" style={{ position: "relative", overflow: "hidden", minHeight: "max(720px, calc(100vh - 100px))", display: "flex", flexDirection: "column", background: "radial-gradient(ellipse 50% 60% at 50% 38%, rgba(255,212,0,0.13), transparent 70%), #0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", right: "0", top: "36%", transform: "translateY(-50%)", textAlign: "center", pointerEvents: "none", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(130px, min(30vw, 44vh), 500px)", lineHeight: "0.78", letterSpacing: "-0.02em", textTransform: "uppercase", color: "#f5f5f2", whiteSpace: "nowrap" }}>
          Heckle
        </div>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", right: "0", top: "36%", transform: "translateY(-50%)", textAlign: "center", pointerEvents: "none", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(130px, min(30vw, 44vh), 500px)", lineHeight: "0.78", letterSpacing: "-0.02em", textTransform: "uppercase", color: "transparent", WebkitTextStroke: "1.5px #ffd400", whiteSpace: "nowrap", zIndex: "2", opacity: "0.55" }}>
          Heckle
        </div>
        <div style={{ position: "absolute", inset: "0", zIndex: "1" }}>
          <HeckleMic autoRotate />
        </div>
        <div style={{ position: "relative", zIndex: "3", marginTop: "auto", pointerEvents: "none", background: "linear-gradient(to top, #0a0a0a 55%, rgba(10,10,10,0))", paddingTop: "64px" }}>
          <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px) clamp(24px, 3vw, 40px)", display: "flex", flexWrap: "wrap", gap: "24px 48px", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "460px", pointerEvents: "auto" }}>
              <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffd400" }}>
                {"Comedy, culture & the people who bomb for it"}
              </span>
              <p style={{ margin: "0", fontFamily: "'Newsreader', serif", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: "1.3" }}>
                Stand-up, sketch, specials and late night — plus 1,400 open mics, updated nightly.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                <a className="hm-2" href="#top" style={{ display: "inline-flex", alignItems: "center", height: "48px", padding: "0 20px", background: "#ffd400", color: "#0a0a0a", fontWeight: "800", fontStretch: "75%", fontSize: "15px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Read today’s issue
                </a>
                <a className="hm-3" href="open-mics.html" style={{ display: "inline-flex", alignItems: "center", height: "48px", padding: "0 20px", border: "1px solid rgba(255,255,255,0.3)", fontWeight: "800", fontStretch: "75%", fontSize: "15px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Find a mic
                </a>
              </div>
            </div>
            <a className="hm-3" href="#joke" style={{ pointerEvents: "auto", flex: "1 1 340px", maxWidth: "460px", display: "flex", flexDirection: "column", gap: "12px", padding: "20px 22px", background: "rgba(10,10,10,0.8)", border: "1px solid rgba(255,212,0,0.55)", backdropFilter: "blur(8px)" }}>
              <span style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <span style={{ color: "#ffd400" }}>
                  “ Joke of the Week
                </span>
                <span style={{ color: "#a3a39e" }}>
                  Week 39
                </span>
              </span>
              <p style={{ margin: "0", fontFamily: "'Newsreader', serif", fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: "1.35", color: "#f5f5f2" }}>
                My dad says comedy isn’t a real job. Rich, coming from a man who’s done the same eleven minutes at Thanksgiving since 1994.
              </p>
              <span style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13px", color: "#a3a39e" }}>
                <span>
                  Dana Okafor · Columbus, OH
                </span>
                <span style={{ color: "#f5f5f2", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Submit yours →
                </span>
              </span>
            </a>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end", textAlign: "right" }}>
              <span style={{ display: "inline-flex", gap: "8px", alignItems: "center", fontSize: "13px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "#a3a39e" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-3-6.7" />
                  <path d="M21 4v5h-5" />
                </svg>
                Drag to spin · Tap to test
                {" "}
              </span>
              <a href="#week" style={{ pointerEvents: "auto", display: "inline-flex", gap: "10px", alignItems: "center", fontWeight: "800", fontStretch: "75%", fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {"Set & Bomb of the Week"}
                {" "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="top" style={{ maxWidth: "1440px", width: "100%", boxSizing: "border-box", margin: "0 auto", padding: "clamp(20px, 3vw, 36px) clamp(16px, 3vw, 40px) clamp(40px, 5vw, 72px)", display: "flex", flexWrap: "wrap", gap: "clamp(20px, 2.5vw, 32px)" }}>
        <article onMouseMove={v.onHeroMove} onMouseLeave={v.onHeroLeave} style={{ flex: "2 1 520px", minWidth: "0", perspective: "1200px" }}>
          <div ref={v.heroCard} style={{ position: "relative", aspectRatio: "16 / 11", minHeight: "460px", transformStyle: "preserve-3d", willChange: "transform" }}>
            <div style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#161616" }}>
              <div ref={v.heroImg} style={{ position: "absolute", inset: "-5%", willChange: "transform" }}>
                <ImageSlot id="hero-a" placeholder="Cover film still — comic mid-set under a single spotlight" />
              </div>
            </div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top, rgba(10,10,10,0.95) 8%, rgba(10,10,10,0.2) 55%, transparent)", pointerEvents: "none" }} />
            <div ref={v.heroType} style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "clamp(20px, 3vw, 40px)", display: "flex", flexDirection: "column", gap: "16px", pointerEvents: "none", willChange: "transform" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ background: "#ffd400", color: "#0a0a0a", padding: "4px 8px", fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Cover Story
                </span>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#d6d6d2" }}>
                  Issue 041
                </span>
              </div>
              <h1 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(56px, 8.6vw, 148px)", lineHeight: "0.84", letterSpacing: "-0.015em", textTransform: "uppercase" }}>
                Nobody Bombs
                {" "}
                <span style={{ color: "#ffd400" }}>
                  Online.
                </span>
              </h1>
              <p style={{ margin: "0", fontFamily: "'Newsreader', serif", fontStyle: "italic", fontSize: "clamp(18px, 1.6vw, 23px)", lineHeight: "1.35", maxWidth: "46ch", color: "#e8e8e4" }}>
                How the sixty-second clip rewired stand-up — and the comics building ninety-minute hours in open defiance of it.
              </p>
              <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap", pointerEvents: "auto" }}>
                <button className="hm-4" type="button" onClick={v.openFilm} style={{ display: "inline-flex", gap: "10px", alignItems: "center", background: "#ffd400", color: "#0a0a0a", border: "0", padding: "12px 18px", fontFamily: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "15px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                  Watch the film · 14:22
                  {" "}
                </button>
                <span style={{ fontSize: "13px", color: "#b5b5b0" }}>
                  By Dana Oyelaran · 22 min read
                </span>
              </div>
            </div>
          </div>
        </article>
        <article style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <a href="#" style={{ display: "block", position: "relative", aspectRatio: "4 / 5", overflow: "hidden", background: "#161616" }}>
            <div data-parallax="0.08" style={{ position: "absolute", inset: "-8% 0", willChange: "transform" }}>
              <ImageSlot id="hero-b" placeholder="Portrait — late-night host at the desk" />
            </div>
            <span style={{ position: "absolute", top: "14px", left: "14px", zIndex: "2", pointerEvents: "none", background: "#0a0a0a", color: "#ffd400", padding: "4px 8px", fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Late Night
            </span>
          </a>
          <h2 style={{ margin: "0", fontFamily: "'Newsreader', serif", fontWeight: "600", fontSize: "clamp(30px, 2.8vw, 42px)", lineHeight: "1.02", letterSpacing: "-0.01em" }}>
            <a href="#">
              The Last Desk Standing: Inside the Final Season of Network Late Night
            </a>
          </h2>
          <span style={{ fontSize: "13px", color: "#b5b5b0" }}>
            By Marisol Tan · 16 min read
          </span>
        </article>
      </section>
      <div aria-hidden="true" style={{ borderTop: "1px solid rgba(255,255,255,0.12)", borderBottom: "1px solid rgba(255,255,255,0.12)", overflow: "hidden", padding: "14px 0" }}>
        <div ref={v.bandRef} style={{ display: "flex", gap: "40px", width: "max-content", whiteSpace: "nowrap", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(64px, 10vw, 150px)", lineHeight: "0.9", textTransform: "uppercase", willChange: "transform" }}>
          <span>
            Stand-Up
          </span>
          <span style={{ color: "#ffd400" }}>
            ✶
          </span>
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px #f5f5f2" }}>
            Sketch
          </span>
          <span style={{ color: "#ffd400" }}>
            ✶
          </span>
          <span>
            Specials
          </span>
          <span style={{ color: "#ffd400" }}>
            ✶
          </span>
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px #f5f5f2" }}>
            Podcasts
          </span>
          <span style={{ color: "#ffd400" }}>
            ✶
          </span>
          <span>
            Late Night
          </span>
          <span style={{ color: "#ffd400" }}>
            ✶
          </span>
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px #f5f5f2" }}>
            Crowd Work
          </span>
        </div>
      </div>
      <section id="latest" style={{ maxWidth: "1440px", width: "100%", boxSizing: "border-box", margin: "0 auto", padding: "clamp(48px, 6vw, 88px) clamp(16px, 3vw, 40px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 40px" }}>
          <div style={{ flex: "3 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid #f5f5f2", paddingBottom: "10px" }}>
              <h2 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "44px", lineHeight: "1", textTransform: "uppercase" }}>
                The Latest
              </h2>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#ffd400" }}>
                Mon, Sep 28
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))", gap: "40px 28px" }}>
              {(v.stories || []).map((s, _i0) => (
                <Fragment key={_i0}>
                  <article style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
                    <a href="#" style={{ display: "block", position: "relative", aspectRatio: "3 / 2", overflow: "hidden", background: "#161616" }}>
                      <div className="hm-5" style={{ position: "absolute", inset: "0", transition: "transform .7s cubic-bezier(.2,.7,.2,1)" }}>
                        <ImageSlot id={s.id} placeholder={s.ph} />
                      </div>
                    </a>
                    <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffd400" }}>
                      {s.k}
                    </span>
                    <h3 style={{ margin: "0", fontFamily: "'Newsreader', serif", fontWeight: "600", fontSize: "25px", lineHeight: "1.1" }}>
                      <a href="#">
                        {s.t}
                      </a>
                    </h3>
                    <span style={{ fontSize: "13px", color: "#a3a39e" }}>
                      {s.by}
                    </span>
                  </article>
                </Fragment>
              ))}
            </div>
          </div>
          <aside style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column" }}>
            <div style={{ borderBottom: "2px solid #ffd400", paddingBottom: "10px" }}>
              <h2 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "44px", lineHeight: "1", textTransform: "uppercase", color: "#ffd400" }}>
                Most Read
              </h2>
            </div>
            {(v.mostRead || []).map((m, _i0) => (
              <Fragment key={_i0}>
                <a href="#" style={{ display: "grid", gridTemplateColumns: "64px minmax(0, 1fr)", gap: "14px", alignItems: "start", padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                  <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "64px", lineHeight: "0.8", color: "transparent", WebkitTextStroke: "1.5px #ffd400" }}>
                    {m.n}
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#a3a39e" }}>
                      {m.k}
                    </span>
                    <span style={{ fontFamily: "'Newsreader', serif", fontWeight: "500", fontSize: "20px", lineHeight: "1.2" }}>
                      {m.t}
                    </span>
                  </span>
                </a>
              </Fragment>
            ))}
          </aside>
        </div>
      </section>
      <section id="week" style={{ maxWidth: "1440px", width: "100%", boxSizing: "border-box", margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px) clamp(56px, 7vw, 104px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", borderBottom: "2px solid #f5f5f2", paddingBottom: "12px", marginBottom: "28px" }}>
          <h2 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(44px, 5vw, 72px)", lineHeight: "0.9", textTransform: "uppercase" }}>
            Killed
            {" "}
            <span style={{ color: "#ffd400" }}>
              /
            </span>
            {" "}
            Died
          </h2>
          <span style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontSize: "18px", color: "#b5b5b0" }}>
            The week’s best set, and its bravest disaster. Every bomb is submitted by the comic.
          </span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          <article style={{ flex: "1 1 440px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px", padding: "clamp(18px, 2vw, 28px)", background: "#ffd400", color: "#0a0a0a" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
              <span style={{ background: "#ffd400", color: "#0a0a0a", padding: "5px 10px", fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                ★ Set of the Week
              </span>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3a3a00" }}>
                {"Week 39 · Don't Tell Comedy"}
              </span>
            </div>
            <a href="https://www.youtube.com/watch?v=_eIhU898UMo" target="_blank" rel="noopener" style={{ display: "block", position: "relative", aspectRatio: "16 / 9", overflow: "hidden", background: "#0a0a0a" }}>
              <img src="https://i.ytimg.com/vi/_eIhU898UMo/maxresdefault.jpg" alt="Rosebud Baker performing for Don't Tell Comedy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <span style={{ position: "absolute", left: "14px", bottom: "14px", zIndex: "2", pointerEvents: "none", display: "inline-flex", gap: "8px", alignItems: "center", background: "#0a0a0a", color: "#f5f5f2", padding: "8px 12px", fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
                Watch on YouTube
                {" "}
              </span>
            </a>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a0a0a" }}>
                Rosebud Baker
              </span>
              <h3 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(40px, 4.4vw, 68px)", lineHeight: "0.88", textTransform: "uppercase" }}>
                Why Women Commit Crimes
              </h3>
              <p style={{ margin: "0", fontFamily: "'Newsreader', serif", fontSize: "20px", lineHeight: "1.4", maxWidth: "46ch", color: "#1a1a1a" }}>
                {"A traitorous couples therapist, being the breadwinner in her marriage, and why single mothers deserve to be love-bombed. Brand new on Don't Tell's channel."}
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", borderTop: "1px solid rgba(10,10,10,0.25)", marginTop: "auto" }}>
              <div style={{ padding: "14px 12px 0 0", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "32px", lineHeight: "0.9" }}>
                  Sep 28
                </span>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3a3a00" }}>
                  Released
                </span>
              </div>
              <div style={{ padding: "14px 12px 0 12px", borderLeft: "1px solid rgba(10,10,10,0.25)", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "32px", lineHeight: "0.9" }}>
                  {"Don't Tell"}
                </span>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3a3a00" }}>
                  Channel
                </span>
              </div>
              <div style={{ padding: "14px 0 0 12px", borderLeft: "1px solid rgba(10,10,10,0.25)", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "32px", lineHeight: "0.9" }}>
                  Mother Lode
                </span>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3a3a00" }}>
                  Latest special
                </span>
              </div>
            </div>
          </article>
          <article style={{ flex: "1 1 440px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px", padding: "clamp(18px, 2vw, 28px)", border: "1px solid rgba(255,255,255,0.25)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
              <span style={{ background: "#f5f5f2", color: "#0a0a0a", padding: "5px 10px", fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                ✕ Bomb of the Week
              </span>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "#a3a39e" }}>
                Week 39 · Laugh Shack, Tampa
              </span>
            </div>
            <a href="#" style={{ display: "block", position: "relative", aspectRatio: "16 / 9", overflow: "hidden", background: "#161616" }}>
              <ImageSlot id="bomb-of-week" placeholder="Bomb of the Week — clip still, 16:9" />
              <span style={{ position: "absolute", left: "14px", bottom: "14px", zIndex: "2", pointerEvents: "none", display: "inline-flex", gap: "8px", alignItems: "center", background: "#0a0a0a", color: "#f5f5f2", padding: "8px 12px", fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
                Watch · 5:12
                {" "}
              </span>
            </a>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffd400" }}>
                Ollie Szabo
              </span>
              <h3 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(40px, 4.4vw, 68px)", lineHeight: "0.88", textTransform: "uppercase" }}>
                The Longest Five Minutes in Florida
              </h3>
              <p style={{ margin: "0", fontFamily: "'Newsreader', serif", fontSize: "20px", lineHeight: "1.4", maxWidth: "46ch", color: "#d6d6d2" }}>
                A new ten-minute bit about tax brackets, debuted at a bachelorette brunch. He narrates the silence himself. It is, somehow, perfect.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", borderTop: "1px solid rgba(255,255,255,0.18)", marginTop: "auto" }}>
              <div style={{ padding: "14px 12px 0 0", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "40px", lineHeight: "0.9" }}>
                  0.3
                </span>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "#a3a39e" }}>
                  Laughs / min
                </span>
              </div>
              <div style={{ padding: "14px 12px 0 12px", borderLeft: "1px solid rgba(255,255,255,0.18)", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "40px", lineHeight: "0.9" }}>
                  1
                </span>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "#a3a39e" }}>
                  Cough, audible
                </span>
              </div>
              <div style={{ padding: "14px 0 0 12px", borderLeft: "1px solid rgba(255,255,255,0.18)", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "40px", lineHeight: "0.9" }}>
                  4.1s
                </span>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "#a3a39e" }}>
                  Longest silence
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section id="joke" style={{ maxWidth: "1440px", width: "100%", boxSizing: "border-box", margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px) clamp(56px, 7vw, 104px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", borderBottom: "2px solid #f5f5f2", paddingBottom: "12px", marginBottom: "28px" }}>
          <h2 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(44px, 5vw, 72px)", lineHeight: "0.9", textTransform: "uppercase" }}>
            Joke of the Week
          </h2>
          <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
            Submissions close Sunday · Winner runs Monday
          </span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          <form onSubmit={v.submitJoke} style={{ flex: "1.3 1 440px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
            <p style={{ margin: "0", fontFamily: "'Newsreader', serif", fontSize: "20px", lineHeight: "1.45", color: "#c8c8c3", maxWidth: "52ch" }}>
              One joke. Your best one. Our editors read every entry and the winner gets top billing here next week, credited to you.
            </p>
            <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                Your joke
              </span>
              <textarea value={v.jokeText} onChange={v.onJokeText} rows="5" maxLength={v.jokeMax} placeholder="Setup, punchline. Tags welcome." required={true} style={{ background: "#141414", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", padding: "16px", fontFamily: "'Newsreader', serif", fontSize: "20px", lineHeight: "1.4", resize: "vertical" }} />
              <span style={{ alignSelf: "flex-end", fontSize: "12px", color: v.jokeCountColor }}>
                {v.jokeCount}
              </span>
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "14px" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                  Name or stage name
                </span>
                <input value={v.jokeName} onChange={v.onJokeName} required={true} style={{ background: "#141414", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", padding: "12px 14px", font: "inherit", fontSize: "16px" }} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                  City
                </span>
                <input value={v.jokeCity} onChange={v.onJokeCity} style={{ background: "#141414", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", padding: "12px 14px", font: "inherit", fontSize: "16px" }} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a3a39e" }}>
                  Instagram / TikTok (optional)
                </span>
                <input value={v.jokeHandle} onChange={v.onJokeHandle} placeholder="@" style={{ background: "#141414", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.25)", padding: "12px 14px", font: "inherit", fontSize: "16px" }} />
              </label>
            </div>
            <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#c8c8c3" }}>
              <input type="checkbox" checked={v.jokeOriginal} onChange={v.onJokeOriginal} required={true} style={{ accentColor: "#ffd400", width: "18px", height: "18px", margin: "1px 0 0" }} />
              <span>
                This joke is mine, and Heckle can publish it with credit.
              </span>
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
              <button className="hm-4" type="submit" style={{ padding: "14px 22px", border: "0", background: "#ffd400", color: "#0a0a0a", cursor: "pointer", font: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "15px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Submit joke
              </button>
              <span style={{ fontSize: "14px", color: "#ffd400" }}>
                {v.jokeMsg}
              </span>
            </div>
          </form>
          <aside style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ background: "#ffd400", color: "#0a0a0a", padding: "22px", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "14px" }}>
              <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                ★ This week’s winner
              </span>
              <p style={{ margin: "0", fontFamily: "'Newsreader', serif", fontSize: "24px", lineHeight: "1.3" }}>
                My dad says comedy isn’t a real job. Rich, coming from a man who’s done the same eleven minutes at Thanksgiving since 1994.
              </p>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3a3a00" }}>
                Dana Okafor · Columbus, OH
              </span>
            </div>
            <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#a3a39e" }}>
              Your entries
            </span>
            {(v.myJokes || []).map((j, _i0) => (
              <Fragment key={_i0}>
                <div style={{ border: "1px solid rgba(255,255,255,0.18)", padding: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <p style={{ margin: "0", fontFamily: "'Newsreader', serif", fontSize: "19px", lineHeight: "1.4", whiteSpace: "pre-wrap" }}>
                    {j.text}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "13px", color: "#a3a39e" }}>
                    <span>
                      {j.byline}
                    </span>
                    <span style={{ color: "#ffd400", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      In review
                    </span>
                  </div>
                </div>
              </Fragment>
            ))}
            {v.noJokes ? (
              <>
                <div style={{ border: "1px dashed rgba(255,255,255,0.25)", padding: "28px 20px", fontSize: "15px", lineHeight: "1.45", color: "#a3a39e" }}>
                  Nothing yet. Your submissions show up here while the editors read them.
                </div>
              </>
            ) : null}
          </aside>
        </div>
      </section>
      <section id="clips" style={{ background: "#141414", padding: "clamp(48px, 6vw, 88px) 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto 32px", padding: "0 clamp(16px, 3vw, 40px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffd400" }}>
              Video · Hover to preview
            </span>
            <h2 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(52px, 7vw, 104px)", lineHeight: "0.85", textTransform: "uppercase" }}>
              The Tight Minute
            </h2>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button className="hm-6" type="button" onClick={v.railPrev} aria-label="Previous" style={{ width: "48px", height: "48px", display: "grid", placeItems: "center", background: "transparent", color: "inherit", border: "1px solid rgba(255,255,255,0.25)", cursor: "pointer" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button className="hm-6" type="button" onClick={v.railNext} aria-label="Next" style={{ width: "48px", height: "48px", display: "grid", placeItems: "center", background: "transparent", color: "inherit", border: "1px solid rgba(255,255,255,0.25)", cursor: "pointer" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="rail" ref={v.railRef} style={{ display: "flex", gap: "16px", overflowX: "auto", scrollSnapType: "x mandatory", scrollBehavior: "smooth", padding: "0 max(clamp(16px, 3vw, 40px), calc((100% - 1440px) / 2 + clamp(16px, 3vw, 40px))) 8px", scrollbarWidth: "none" }}>
          {(v.clips || []).map((c, _i0) => (
            <Fragment key={_i0}>
              <a href="#" onMouseEnter={c.enter} onMouseLeave={c.leave} style={{ flex: "0 0 clamp(210px, 19vw, 270px)", scrollSnapAlign: "start", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ position: "relative", aspectRatio: "9 / 16", overflow: "hidden", background: "#1e1e1e", outline: c.outline, outlineOffset: "-2px", transition: "outline-color .2s" }}>
                  <div style={{ position: "absolute", inset: "0", transform: c.zoom, transition: "transform 6s linear" }}>
                    <ImageSlot id={c.id} placeholder="Vertical clip, 9:16" />
                  </div>
                  <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent 45%)", pointerEvents: "none" }} />
                  <span style={{ position: "absolute", top: "12px", left: "12px", zIndex: "2", pointerEvents: "none", fontSize: "12px", fontWeight: "700", background: c.badgeBg, color: c.badgeFg, padding: "3px 7px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {c.badge}
                  </span>
                  <div style={{ position: "absolute", left: "12px", right: "12px", bottom: "14px", zIndex: "2", pointerEvents: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#ffd400" }}>
                      {c.who}
                    </span>
                    <span style={{ fontWeight: "800", fontStretch: "70%", fontSize: "24px", lineHeight: "0.98", textTransform: "uppercase" }}>
                      {c.t}
                    </span>
                    <div style={{ height: "3px", background: "rgba(255,255,255,0.25)" }}>
                      <div style={{ height: "100%", background: "#ffd400", width: c.prog, transition: c.trans }} />
                    </div>
                  </div>
                </div>
              </a>
            </Fragment>
          ))}
        </div>
      </section>
      <section id="watch" style={{ padding: "clamp(56px, 7vw, 104px) 0", overflow: "hidden" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
          <div style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px", position: "relative", zIndex: "2" }}>
            <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffd400" }}>
              The List · Class of 2026
            </span>
            <h2 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(60px, 7.5vw, 120px)", lineHeight: "0.84", textTransform: "uppercase" }}>
              8 Comics
              <br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px #f5f5f2" }}>
                To Watch
              </span>
            </h2>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#b5b5b0" }}>
              Drag the ring or use the arrows.
            </p>
            <div style={{ borderTop: "2px solid #ffd400", paddingTop: "18px", display: "flex", flexDirection: "column", gap: "10px", minHeight: "180px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffd400" }}>
                <span>
                  {"No. "}
                  {v.active.n}
                </span>
                <span>
                  {v.active.city}
                </span>
              </div>
              <div style={{ fontWeight: "900", fontStretch: "62%", fontSize: "48px", lineHeight: "0.9", textTransform: "uppercase" }}>
                {v.active.name}
              </div>
              <p style={{ margin: "0", fontFamily: "'Newsreader', serif", fontSize: "20px", lineHeight: "1.35" }}>
                {v.active.pitch}
              </p>
              <div style={{ fontSize: "13px", color: "#a3a39e" }}>
                {v.active.credit}
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button className="hm-6" type="button" onClick={v.ringPrev} aria-label="Previous comic" style={{ width: "48px", height: "48px", display: "grid", placeItems: "center", background: "transparent", color: "inherit", border: "1px solid rgba(255,255,255,0.25)", cursor: "pointer" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button className="hm-6" type="button" onClick={v.ringNext} aria-label="Next comic" style={{ width: "48px", height: "48px", display: "grid", placeItems: "center", background: "transparent", color: "inherit", border: "1px solid rgba(255,255,255,0.25)", cursor: "pointer" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
          <div onPointerDown={v.ringDown} style={{ flex: "1.7 1 560px", minWidth: "0", height: "600px", perspective: "1400px", perspectiveOrigin: "50% 35%", display: "grid", placeItems: "center", cursor: "grab", touchAction: "pan-y", userSelect: "none" }}>
            <div ref={v.ringRef} style={{ position: "relative", width: "220px", height: "320px", transformStyle: "preserve-3d", willChange: "transform" }}>
              {(v.comics || []).map((c, _i0) => (
                <Fragment key={_i0}>
                  <div style={{ position: "absolute", inset: "0", transform: c.transform, display: "flex", flexDirection: "column", background: "#161616", border: `1px solid ${c.border}`, transition: "border-color .3s" }}>
                    <div style={{ flex: "1", position: "relative", pointerEvents: "none", overflow: "hidden" }}>
                      <ImageSlot id={c.id} placeholder="Portrait" />
                    </div>
                    <div style={{ padding: "10px 12px", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px", background: "#0a0a0a" }}>
                      <span style={{ fontWeight: "800", fontStretch: "70%", fontSize: "18px", textTransform: "uppercase", lineHeight: "1" }}>
                        {c.name}
                      </span>
                      <span style={{ fontWeight: "800", fontSize: "12px", color: "#ffd400" }}>
                        {c.n}
                      </span>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="ranked" style={{ maxWidth: "1440px", width: "100%", boxSizing: "border-box", margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px) clamp(56px, 7vw, 104px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "2px solid #f5f5f2", paddingBottom: "16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffd400" }}>
              Reviews · Ranked
            </span>
            <h2 style={{ margin: "0", fontFamily: "'Newsreader', serif", fontWeight: "600", fontSize: "clamp(40px, 5vw, 72px)", lineHeight: "0.95", letterSpacing: "-0.02em" }}>
              The Best Specials of 2026,
              {" "}
              <em style={{ fontWeight: "400" }}>
                So Far
              </em>
            </h2>
          </div>
          <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.25)" }}>
            {(v.filters || []).map((fl, _i0) => (
              <Fragment key={_i0}>
                <button type="button" onClick={fl.onClick} style={{ background: fl.bg, color: fl.fg, border: "0", padding: "10px 14px", fontFamily: "inherit", fontWeight: "700", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", whiteSpace: "nowrap" }}>
                  {fl.label}
                </button>
              </Fragment>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {(v.rankedRows || []).map((r, _i0) => (
            <Fragment key={_i0}>
              <a className="hm-7" href="#" style={{ display: "grid", gridTemplateColumns: "clamp(56px, 8vw, 120px) clamp(80px, 9vw, 128px) minmax(0, 1fr)", gap: "clamp(16px, 2.5vw, 36px)", alignItems: "center", padding: "22px 0", borderBottom: "1px solid rgba(255,255,255,0.12)", transition: "background .2s, padding .3s" }}>
                <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "clamp(56px, 7vw, 104px)", lineHeight: "0.8", color: "#ffd400" }}>
                  {r.rank}
                </span>
                <div style={{ position: "relative", aspectRatio: "3 / 4", overflow: "hidden", background: "#161616", pointerEvents: "none" }}>
                  <ImageSlot id={r.id} placeholder="Key art" />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 32px", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1 1 320px", minWidth: "0" }}>
                    <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "clamp(32px, 3.2vw, 48px)", lineHeight: "0.92", textTransform: "uppercase" }}>
                      {r.title}
                    </span>
                    <span style={{ fontFamily: "'Newsreader', serif", fontSize: "19px", lineHeight: "1.4", color: "#d6d6d2" }}>
                      {r.verdict}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", minWidth: "180px" }}>
                    <div style={{ display: "flex", gap: "4px" }} aria-label={r.scoreLabel}>
                      {(r.pips || []).map((p, _i2) => (
                        <Fragment key={_i2}>
                          <span style={{ width: "22px", height: "8px", background: p.bg }} />
                        </Fragment>
                      ))}
                    </div>
                    <span style={{ fontSize: "13px", fontWeight: "600" }}>
                      {r.comic}
                      {" ·"}
                      {" "}
                      <span style={{ color: "#a3a39e" }}>
                        {r.format}
                        {" · "}
                        {r.runtime}
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            </Fragment>
          ))}
        </div>
      </section>
      <section id="craft" ref={v.storyRef} style={{ background: "#ffd400", color: "#0a0a0a" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px)", display: "flex", flexWrap: "wrap", gap: "0 clamp(32px, 5vw, 96px)" }}>
          <div style={{ flex: "1.2 1 480px", minWidth: "0" }}>
            <div style={{ position: "sticky", top: "96px", minHeight: "calc(100vh - 96px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "28px", padding: "40px 0", boxSizing: "border-box" }}>
              <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Craft · Anatomy of a Joke
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {(v.jokeLines || []).map((j, _i0) => (
                  <Fragment key={_i0}>
                    <div style={{ fontFamily: "'Newsreader', serif", fontWeight: "600", fontSize: "clamp(30px, 3.4vw, 52px)", lineHeight: "1.04", letterSpacing: "-0.015em", opacity: j.op, transform: `translateX(${j.x})`, transition: "opacity .5s, transform .6s cubic-bezier(.2,.7,.2,1)" }}>
                      {j.t}
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ border: "2px solid #0a0a0a", padding: "16px 16px 12px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  <span>
                    Room audio
                  </span>
                  <span>
                    {v.meterLabel}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "3px", alignItems: "flex-end", height: "72px" }}>
                  {(v.bars || []).map((b, _i0) => (
                    <Fragment key={_i0}>
                      <span style={{ flex: "1", height: b.h, background: "#0a0a0a", transition: "height .6s cubic-bezier(.2,.7,.2,1)" }} />
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 360px", minWidth: "0", padding: "16vh 0" }}>
            {(v.steps || []).map((s, _i0) => (
              <Fragment key={_i0}>
                <div style={{ minHeight: "72vh", display: "flex", flexDirection: "column", justifyContent: "center", gap: "24px", opacity: s.op, transition: "opacity .4s" }}>
                  <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "120px", lineHeight: "0.8" }}>
                    {s.n}
                  </span>
                  <h3 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "56px", lineHeight: "0.9", textTransform: "uppercase" }}>
                    {s.t}
                  </h3>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", maxWidth: "40ch", fontWeight: "500" }}>
                    {s.d}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <section id="originals" style={{ maxWidth: "1440px", width: "100%", boxSizing: "border-box", margin: "0 auto", padding: "clamp(56px, 7vw, 104px) clamp(16px, 3vw, 40px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", borderBottom: "2px solid #f5f5f2", paddingBottom: "10px", marginBottom: "32px" }}>
          <h2 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "44px", lineHeight: "1", textTransform: "uppercase" }}>
            Heckle Originals
          </h2>
          <a href="#" style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#ffd400" }}>
            All series →
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "32px 20px" }}>
          {(v.series || []).map((s, _i0) => (
            <Fragment key={_i0}>
              <a href="#" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden", background: "#161616" }}>
                  <div data-parallax="0.06" style={{ position: "absolute", inset: "-10% 0", willChange: "transform" }}>
                    <ImageSlot id={s.id} placeholder={s.ph} />
                  </div>
                  <span style={{ position: "absolute", bottom: "12px", left: "12px", zIndex: "2", pointerEvents: "none", background: "#ffd400", color: "#0a0a0a", padding: "3px 8px", fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {s.eps}
                  </span>
                </div>
                <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "40px", lineHeight: "0.9", textTransform: "uppercase" }}>
                  {s.t}
                </span>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#b5b5b0" }}>
                  {s.d}
                </p>
              </a>
            </Fragment>
          ))}
        </div>
      </section>
      <section id="setlist" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(56px, 7vw, 104px) clamp(16px, 3vw, 40px)", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", flex: "1 1 460px" }}>
            <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffd400" }}>
              Newsletter · Daily, 7 a.m.
            </span>
            <h2 style={{ margin: "0", fontWeight: "900", fontStretch: "62%", fontSize: "clamp(64px, 9vw, 140px)", lineHeight: "0.82", textTransform: "uppercase" }}>
              The Setlist
              <span style={{ color: "#ffd400" }}>
                .
              </span>
            </h2>
            <p style={{ margin: "0", fontFamily: "'Newsreader', serif", fontSize: "21px", lineHeight: "1.4", maxWidth: "44ch", color: "#d6d6d2" }}>
              Tour drops, new specials, and the one clip worth your minute. Five items, every morning.
            </p>
          </div>
          {v.beehiivEmbedSrc ? (
            <BeehiivForm src={v.beehiivEmbedSrc} style={{ flex: "1 1 380px", maxWidth: "520px", width: "100%", minHeight: "56px" }} />
          ) : (
            <form onSubmit={v.onSubscribe} style={{ display: "flex", gap: "0", flex: "1 1 380px", maxWidth: "520px", border: "1px solid rgba(255,255,255,0.3)" }}>
              <input type="email" required placeholder="you@example.com" aria-label="Email address" style={{ flex: "1", minWidth: "0", minHeight: "56px", padding: "0 16px", background: "transparent", border: "0", color: "#f5f5f2", fontFamily: "inherit", fontSize: "16px", outline: "none" }} />
              <button className="hm-4" type="submit" style={{ minHeight: "56px", padding: "0 22px", background: "#ffd400", color: "#0a0a0a", border: "0", fontFamily: "inherit", fontWeight: "800", fontStretch: "75%", fontSize: "15px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                {v.subLabel}
              </button>
            </form>
          )}
        </div>
      </section>
      <footer style={{ background: "#ffd400", color: "#0a0a0a", marginTop: "auto" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "48px clamp(16px, 3vw, 40px) 28px", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", fontSize: "15px", fontWeight: "500" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Sections
              </span>
              <a href="#latest">
                Stand-Up
              </a>
              <a href="#clips">
                Video
              </a>
              <a href="#ranked">
                Reviews
              </a>
              <a href="#craft">
                Craft
              </a>
              <a href="games.html">
                Game Night
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Originals
              </span>
              <a href="#originals">
                Tight Five
              </a>
              <a href="#originals">
                Green Room
              </a>
              <a href="#originals">
                Bombed
              </a>
              <a href="#originals">
                Night Shift
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontWeight: "800", fontStretch: "75%", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Heckle
              </span>
              <a href="#">
                About
              </a>
              <a href="#">
                Pitch us
              </a>
              <a href="#">
                Advertise
              </a>
              <a href="#">
                Careers
              </a>
            </div>
          </div>
          <div style={{ fontWeight: "900", fontStretch: "62%", fontSize: "clamp(120px, 26vw, 400px)", lineHeight: "0.75", letterSpacing: "-0.02em", textTransform: "uppercase", marginLeft: "-0.04em" }}>
            Heckle.
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", fontSize: "13px", fontWeight: "500", borderTop: "1px solid #0a0a0a", paddingTop: "16px" }}>
            <span>
              © 2026 Heckle Media. Comedy, culture, and the people who bomb for it.
            </span>
            <span>
              Privacy · Terms
            </span>
          </div>
        </div>
      </footer>
      {v.filmOpen ? (
        <>
          <div onClick={v.closeFilm} style={{ position: "fixed", inset: "0", zIndex: "50", display: "grid", placeItems: "center", padding: "24px", background: "rgba(0,0,0,0.9)" }}>
            <div onClick={v.stop} style={{ width: "min(1100px, 100%)", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ position: "relative", aspectRatio: "16 / 9", background: "#161616" }}>
                <ImageSlot id="film-frame" placeholder="Film poster frame, 16:9" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                <span style={{ fontWeight: "900", fontStretch: "62%", fontSize: "32px", textTransform: "uppercase" }}>
                  Nobody Bombs Online · 14:22
                </span>
                <button className="hm-1" type="button" onClick={v.closeFilm} style={{ background: "transparent", color: "#f5f5f2", border: "1px solid rgba(255,255,255,0.3)", padding: "10px 16px", fontFamily: "inherit", fontWeight: "700", fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
