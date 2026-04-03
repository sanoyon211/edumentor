import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import CourseCard from "../components/CourseCard";
import BlogCard from "../components/BlogCard";
import StatsSection from "../components/StatsSection";
import TestimonialSection from "../components/TestimonialSection";
import Newsletter from "../components/Newsletter";
import { courses } from "../data/courses";
import { blogs } from "../data/blogs";

export default function Home() {
  const featuredCourses = courses.filter((c) => c.featured).slice(0, 3);
  const featuredBlog = blogs.find((b) => b.featured);
  const latestBlogs = blogs.filter((b) => !b.featured).slice(0, 3);

  return (
    <>
      <HeroSection />

      {/* ── Featured Courses ─────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "3rem",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-ember)",
                  marginBottom: "0.4rem",
                }}
              >
                START LEARNING TODAY
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Our most popular courses
              </h2>
            </div>
            <Link to="/courses" className="btn-outline" style={{ flexShrink: 0 }}>
              View all courses →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="courses-grid"
          >
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────── */}
      <StatsSection />

      {/* ── Featured Blog ─────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "3rem",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-ember)",
                  marginBottom: "0.4rem",
                }}
              >
                LATEST FROM THE BLOG
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Tutorials & guides
              </h2>
            </div>
            <Link to="/blog" className="btn-outline" style={{ flexShrink: 0 }}>
              Read all posts →
            </Link>
          </div>

          {/* Featured post */}
          {featuredBlog && (
            <div style={{ marginBottom: "2rem" }} className="featured-blog-wrap">
              <BlogCard blog={featuredBlog} featured />
            </div>
          )}

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="blogs-grid"
          >
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────── */}
      <TestimonialSection />

      {/* ── Why EduMentor ─────────────────────────── */}
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
                marginBottom: "0.4rem",
              }}
            >
              WHY CHOOSE US
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "var(--color-ink)",
                letterSpacing: "-0.02em",
              }}
            >
              Education that actually works
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="why-grid"
          >
            {[
              {
                icon: "🎯",
                title: "Project-Based Learning",
                desc: "Every course is built around real-world projects. You graduate with a portfolio, not just a certificate.",
              },
              {
                icon: "🧑‍💻",
                title: "Expert Instructors",
                desc: "Learn from practitioners who work at top tech companies — not academics who have never shipped code.",
              },
              {
                icon: "⚡",
                title: "Learn at Your Own Pace",
                desc: "Lifetime access to all course materials. Watch on your schedule, revisit concepts whenever you need.",
              },
              {
                icon: "🤝",
                title: "Active Community",
                desc: "Join thousands of students in our Discord. Get code reviews, find accountability partners, and network.",
              },
              {
                icon: "📈",
                title: "Career Support",
                desc: "Resume reviews, mock interviews, and direct introductions to hiring companies in our network.",
              },
              {
                icon: "🔒",
                title: "30-Day Guarantee",
                desc: "Not satisfied? Get a full refund within 30 days, no questions asked. We stand behind our quality.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  border: "1px solid var(--color-cream-darker)",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-ember)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-cream-darker)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "0.75rem",
                    lineHeight: 1,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--color-ink)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────── */}
      <Newsletter />

      <style>{`
        @media (max-width: 900px) {
          .courses-grid, .why-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 680px) {
          .courses-grid, .blogs-grid, .why-grid { grid-template-columns: 1fr !important; }
          .featured-blog-wrap > a { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
