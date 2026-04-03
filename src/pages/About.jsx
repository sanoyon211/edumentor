import { Link } from "react-router-dom";

const team = [
  {
    name: "Dr. James Chen",
    role: "Co-Founder & Head of Curriculum",
    initials: "JC",
    color: "#E8702A",
    bio: "Former senior engineer at Google with 12 years of experience. Passionate about making technical education accessible and practical.",
  },
  {
    name: "Sarah Mitchell",
    role: "Co-Founder & Lead Instructor",
    initials: "SM",
    color: "#4E7352",
    bio: "Frontend engineer turned educator. Has taught over 20,000 students web development through workshops and online courses.",
  },
  {
    name: "Aisha Okonkwo",
    role: "Design Curriculum Lead",
    initials: "AO",
    color: "#2563EB",
    bio: "UX Designer with experience at Spotify and Figma. Believes great design education is about developing taste, not just tools.",
  },
  {
    name: "Marcus Rivera",
    role: "Backend & DevOps Instructor",
    initials: "MR",
    color: "#C5922E",
    bio: "Full-stack developer and DevOps specialist. Has built infrastructure for startups serving millions of users.",
  },
];

const values = [
  {
    emoji: "📚",
    title: "Learning Over Credentials",
    desc: "We optimize for genuine understanding and practical skill, not certificate collection. Our measure of success is what you can build.",
  },
  {
    emoji: "🌍",
    title: "Accessible Education",
    desc: "World-class education shouldn't require a world-class budget. We keep prices fair and offer scholarships to those who need them.",
  },
  {
    emoji: "🔍",
    title: "Honesty & Transparency",
    desc: "We tell you what's hard, what's realistic, and how long things actually take. No hype, no false promises.",
  },
  {
    emoji: "🤝",
    title: "Community First",
    desc: "Learning is better together. We invest heavily in community infrastructure because the people you learn with matter as much as the content.",
  },
];

export default function About() {
  return (
    <>
      {/* ── Hero ─────────────────────────────── */}
      <div
        className="grain-overlay"
        style={{
          background: "var(--color-dark-bg)",
          paddingTop: "130px",
          paddingBottom: "5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.78rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--color-ember)",
            marginBottom: "0.6rem",
          }}
        >
          OUR STORY
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
            lineHeight: 1.08,
          }}
        >
          We believe education
          <br />
          <span style={{ color: "var(--color-ember)", fontStyle: "italic" }}>
            should change lives.
          </span>
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "1.1rem",
            maxWidth: "580px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          EduMentor was built by engineers and designers who were frustrated
          with the gap between formal education and real-world skills. We
          decided to close it.
        </p>
      </div>

      {/* ── Origin story ─────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--color-cream)" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-split"
        >
          <div>
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--color-ember)",
                marginBottom: "0.6rem",
              }}
            >
              HOW WE STARTED
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--color-ink)",
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              From a frustration,
              <br />to a platform.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-ink-muted)",
                lineHeight: 1.75,
                marginBottom: "1rem",
              }}
            >
              In 2021, James and Sarah were both teaching coding bootcamps
              independently and kept running into the same problem: students
              were finishing courses with theoretical knowledge but no
              portfolio, no community, and no confidence.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-ink-muted)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              They joined forces to build EduMentor — a platform where
              every course ends with a real project, every student joins a
              real community, and every learning journey comes with genuine
              career support.
            </p>
            <Link to="/courses" className="btn-primary">
              Explore Our Courses →
            </Link>
          </div>

          {/* Stats card */}
          <div
            style={{
              background: "var(--color-dark-bg)",
              borderRadius: "24px",
              padding: "2.5rem",
            }}
          >
            {[
              { value: "2021", label: "Founded" },
              { value: "50K+", label: "Students taught" },
              { value: "120+", label: "Countries represented" },
              { value: "$4.2M", label: "Student salary increase (total)" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.25rem 0",
                  borderBottom: i < 3 ? "1px solid var(--color-dark-border)" : "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--color-ember)",
                  }}
                >
                  {item.value}
                </span>
                <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", textAlign: "right" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--color-cream-dark)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
              WHAT WE BELIEVE
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 700,
                color: "var(--color-ink)",
                letterSpacing: "-0.02em",
              }}
            >
              Our core values
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
            className="values-grid"
          >
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid var(--color-cream-darker)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>{v.emoji}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "var(--color-ink)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
              MEET THE TEAM
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 700,
                color: "var(--color-ink)",
                letterSpacing: "-0.02em",
              }}
            >
              The people behind EduMentor
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
            }}
            className="team-grid"
          >
            {team.map((member, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                  border: "1px solid var(--color-cream-darker)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: member.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "white",
                    margin: "0 auto 1rem",
                    boxShadow: `0 4px 16px ${member.color}55`,
                  }}
                >
                  {member.initials}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--color-ink)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: member.color,
                    marginBottom: "0.75rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {member.role}
                </p>
                <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "var(--color-ember)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          Ready to start learning?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "1.05rem",
            marginBottom: "2rem",
          }}
        >
          Join 50,000+ learners who chose EduMentor to transform their careers.
        </p>
        <Link
          to="/courses"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "white",
            color: "var(--color-ember)",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "1rem",
            padding: "0.9rem 2.25rem",
            borderRadius: "12px",
            textDecoration: "none",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Browse All Courses →
        </Link>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-split { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .team-grid   { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .team-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
