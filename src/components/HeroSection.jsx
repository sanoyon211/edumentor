import { Link } from "react-router-dom";

const floatingTags = [
  { label: "React",        top: "22%", left:  "6%",  delay: "0s"   },
  { label: "Python",       top: "65%", left:  "4%",  delay: "0.4s" },
  { label: "UI/UX",        top: "18%", right: "6%",  delay: "0.2s" },
  { label: "Node.js",      top: "70%", right: "5%",  delay: "0.6s" },
  { label: "Data Science", top: "42%", right: "3%",  delay: "0.3s" },
];

const stats = [
  { value: "50K+",  label: "Active Students"    },
  { value: "200+",  label: "Expert-Led Courses"  },
  { value: "96%",   label: "Completion Rate"     },
  { value: "4.9★",  label: "Average Rating"      },
];

export default function HeroSection() {
  return (
    <>
      <style>{`
        /* ── Floating tags: hidden on mobile, shown on desktop ── */
        .hero-float-tag {
          display: none;
          position: absolute;
          animation: float 3s ease-in-out infinite;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border-radius: 8px;
          padding: 0.45rem 0.9rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        /* ── Stats: 4 cols on desktop, 2×2 on mobile ── */
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.08);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .hero-stat-item {
          padding: 1.5rem 1rem;
          background: rgba(255,255,255,0.03);
          text-align: center;
        }

        /* ── CTA buttons: row on desktop, column on small ── */
        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .hero-blog-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
          font-family: var(--font-body);
          padding: 0.85rem 2rem;
          border: 1.5px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          transition: border-color 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .hero-blog-btn:hover {
          border-color: rgba(255,255,255,0.4);
          color: white;
        }

        /* ── Content padding ── */
        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 4rem 1.25rem 3rem;
          text-align: center;
        }

        /* ─── Responsive overrides ─────────────────── */
        @media (min-width: 768px) {
          .hero-float-tag  { display: block; }
          .hero-content    { padding: 5rem 1.5rem 4rem; }
        }

        @media (max-width: 600px) {
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .hero-stat-item {
            /* re-draw dividers for 2-col layout */
            border-right: none !important;
          }
          .hero-stat-item:nth-child(odd) {
            border-right: 1px solid rgba(255,255,255,0.08) !important;
          }
          .hero-stat-item:nth-child(1),
          .hero-stat-item:nth-child(2) {
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-blog-btn {
            justify-content: center;
          }
        }
      `}</style>

      <section
        className="grain-overlay"
        style={{
          minHeight: "100vh",
          background: "var(--color-dark-bg)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "68px",
        }}
      >
        {/* ── Glow blobs ── */}
        <div style={{
          position: "absolute", top: "20%", left: "15%",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,112,42,0.15) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "15%", right: "10%",
          width: "350px", height: "350px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(78,115,82,0.12) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />

        {/* ── Floating tags (desktop only) ── */}
        {floatingTags.map((tag, i) => (
          <div
            key={i}
            className="hero-float-tag"
            style={{
              top: tag.top,
              left: tag.left,
              right: tag.right,
              animationDelay: tag.delay,
            }}
          >
            {tag.label}
          </div>
        ))}

        {/* ── Main content ── */}
        <div className="hero-content">

          {/* Eyebrow badge */}
          <div
            className="animate-fade-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(232,112,42,0.15)",
              border: "1px solid rgba(232,112,42,0.3)",
              borderRadius: "999px",
              padding: "0.4rem 1rem",
              marginBottom: "1.75rem",
            }}
          >
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "var(--color-ember)",
              animation: "pulse-dot 2s ease-in-out infinite",
              flexShrink: 0,
            }} />
            <span style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "var(--color-ember-light)",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}>
              NEW COURSES ADDED EVERY WEEK
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 8vw, 5.5rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
            }}
          >
            Learn Boldly.
            <br />
            <span style={{ color: "var(--color-ember)", fontStyle: "italic" }}>
              Grow Endlessly.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-up delay-200"
            style={{
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "580px",
              margin: "0 auto 2rem",
              lineHeight: 1.72,
            }}
          >
            Expert-crafted courses in web development, data science, design, and
            more. Join 50,000+ learners who transformed their careers with EduMentor.
          </p>

          {/* CTA buttons */}
          <div className="hero-cta-group animate-fade-up delay-300">
            <Link
              to="/courses"
              className="btn-primary"
              style={{ fontSize: "1rem", padding: "0.85rem 2rem", justifyContent: "center" }}
            >
              Explore Courses
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link to="/blog" className="hero-blog-btn">
              Read the Blog
            </Link>
          </div>

          {/* Stats grid */}
          <div className="hero-stats-grid animate-fade-up delay-400">
            {stats.map((s, i) => (
              <div
                key={i}
                className="hero-stat-item"
                style={{
                  borderRight: i < 3
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1,
                  marginBottom: "0.3rem",
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontSize: "0.76rem",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div style={{
          position: "absolute", bottom: -1, left: 0, right: 0, lineHeight: 0,
        }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60V30C180 10 360 0 720 0s540 10 720 30V60H0z" fill="#F5F0E8" />
          </svg>
        </div>
      </section>
    </>
  );
}
