import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          paddingTop: "100px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>😕</div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            color: "var(--color-ink)",
            marginBottom: "0.75rem",
          }}
        >
          Article not found
        </h1>
        <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/blog" className="btn-primary">← Back to Blog</Link>
      </div>
    );
  }

  const related = blogs
    .filter((b) => b.id !== blog.id && (b.category === blog.category || b.tags.some((t) => blog.tags.includes(t))))
    .slice(0, 3);

  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <div
        style={{
          background: "var(--color-dark-bg)",
          paddingTop: "100px",
          paddingBottom: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "3rem 1.5rem 4rem",
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem",
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" style={{ color: "inherit", textDecoration: "none" }}>
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: "var(--color-ember)" }}>{blog.category}</span>
          </div>

          {/* Category */}
          <span
            style={{
              display: "inline-block",
              background: blog.categoryColor,
              color: "white",
              padding: "0.3rem 0.85rem",
              borderRadius: "6px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              marginBottom: "1.25rem",
            }}
          >
            {blog.category}
          </span>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.12,
              letterSpacing: "-0.025em",
              marginBottom: "1.25rem",
            }}
          >
            {blog.title}
          </h1>

          {/* Meta */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: blog.categoryColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                {blog.authorInitials}
              </div>
              <div>
                <div style={{ fontWeight: 600, color: "white", fontSize: "0.88rem" }}>
                  {blog.author}
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>
                  {blog.authorRole}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              <span>📅 {blog.date}</span>
              <span>⏱ {blog.readTime}</span>
              <span>👁 {blog.views?.toLocaleString()} views</span>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60V30C180 10 360 0 720 0s540 10 720 30V60H0z" fill="#F5F0E8" />
          </svg>
        </div>
      </div>

      {/* ── Article ──────────────────────────────── */}
      <main style={{ background: "var(--color-cream)", padding: "0 1.5rem 5rem" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: "3rem",
            paddingTop: "3rem",
            alignItems: "start",
          }}
          className="post-layout"
        >
          {/* Main content */}
          <article>
            {/* Hero image */}
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                marginBottom: "2.5rem",
                boxShadow: "var(--shadow-hover)",
              }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Excerpt */}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontStyle: "italic",
                color: "var(--color-ink-muted)",
                lineHeight: 1.65,
                borderLeft: "3px solid var(--color-ember)",
                paddingLeft: "1.25rem",
                marginBottom: "2rem",
              }}
            >
              {blog.excerpt}
            </p>

            {/* Content */}
            <div
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--color-cream-darker)" }}>
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "var(--color-cream-dark)",
                    color: "var(--color-ink-muted)",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "6px",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    border: "1px solid var(--color-cream-darker)",
                  }}
                >
                  # {tag}
                </span>
              ))}
            </div>

            {/* Author bio card */}
            <div
              style={{
                marginTop: "3rem",
                background: "white",
                borderRadius: "16px",
                padding: "1.75rem",
                border: "1px solid var(--color-cream-darker)",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: blog.categoryColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "white",
                  flexShrink: 0,
                }}
              >
                {blog.authorInitials}
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-ember)", marginBottom: "0.25rem" }}>
                  WRITTEN BY
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "0.3rem" }}>
                  {blog.author}
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--color-muted)", marginBottom: "0.5rem" }}>
                  {blog.authorRole}
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--color-ink-muted)", lineHeight: 1.6 }}>
                  An experienced educator and practitioner who brings real-world expertise to every article and course.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside style={{ position: "sticky", top: "90px" }}>
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "1.5rem",
                border: "1px solid var(--color-cream-darker)",
                marginBottom: "1.5rem",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "1rem" }}>
                Article Details
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { label: "Category", value: blog.category },
                  { label: "Published", value: blog.date },
                  { label: "Read Time", value: blog.readTime },
                  { label: "Views", value: blog.views?.toLocaleString() },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                    <span style={{ color: "var(--color-muted)" }}>{item.label}</span>
                    <span style={{ fontWeight: 600, color: "var(--color-ink)" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/courses" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              🚀 Start a Course
            </Link>
          </aside>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div style={{ maxWidth: "1100px", margin: "4rem auto 0" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "var(--color-ink)",
                marginBottom: "1.5rem",
              }}
            >
              Related Articles
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5rem",
              }}
              className="related-grid"
            >
              {related.map((b) => (
                <BlogCard key={b.id} blog={b} />
              ))}
            </div>
          </div>
        )}
      </main>

      <style>{`
        @media (max-width: 900px) {
          .post-layout { grid-template-columns: 1fr !important; }
          .related-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
