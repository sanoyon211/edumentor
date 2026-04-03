const stats = [
  {
    value: "50,000+",
    label: "Students Enrolled",
    sub: "from 120+ countries",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
      </svg>
    ),
    color: "var(--color-ember)",
  },
  {
    value: "200+",
    label: "Courses Available",
    sub: "updated for 2025",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "var(--color-sage)",
  },
  {
    value: "96%",
    label: "Completion Rate",
    sub: "industry avg: 67%",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "var(--color-gold)",
  },
  {
    value: "4.9 / 5",
    label: "Average Rating",
    sub: "from 28,000+ reviews",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "var(--color-ember)",
  },
];

export default function StatsSection() {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        background: "var(--color-cream-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid var(--color-cream-darker)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "1px solid var(--color-cream-darker)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--color-ember)",
              marginBottom: "0.5rem",
            }}
          >
            BY THE NUMBERS
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--color-ink)",
              letterSpacing: "-0.02em",
            }}
          >
            Results that speak for themselves
          </h2>
        </div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "2rem 1.5rem",
                textAlign: "center",
                boxShadow: "var(--shadow-card)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-card)";
              }}
            >
              {/* Top bar accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: stat.color,
                  borderRadius: "16px 16px 0 0",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: `${stat.color}15`,
                  color: stat.color,
                  marginBottom: "1rem",
                }}
              >
                {stat.icon}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "var(--color-ink-muted)",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--color-muted)",
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
