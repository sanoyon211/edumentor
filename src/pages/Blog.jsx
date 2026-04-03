import { useState, useMemo } from "react";
import BlogCard from "../components/BlogCard";
import { blogs, categories } from "../data/blogs";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return blogs.filter((b) => {
      const matchCat = activeCategory === "All" || b.category === activeCategory;
      const matchSearch =
        !search ||
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        b.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      {/* ── Header ─────────────────────────────── */}
      <div
        className="grain-overlay"
        style={{
          background: "var(--color-dark-bg)",
          paddingTop: "130px",
          paddingBottom: "4rem",
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
          EDUMENTOR BLOG
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
          }}
        >
          Tutorials & Guides
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "1.05rem",
            maxWidth: "520px",
            margin: "0 auto 2rem",
            lineHeight: 1.65,
          }}
        >
          Deep dives, practical guides, and career advice from engineers and
          designers at the world's top companies.
        </p>

        {/* Search */}
        <div
          style={{
            maxWidth: "480px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2"
            style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.07)",
              border: "1.5px solid rgba(255,255,255,0.12)",
              borderRadius: "12px",
              padding: "0.85rem 1rem 0.85rem 3rem",
              color: "white",
              fontSize: "0.95rem",
              fontFamily: "var(--font-body)",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-ember)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
          />
        </div>
      </div>

      {/* ── Content ─────────────────────────────── */}
      <main style={{ padding: "3rem 1.5rem 6rem", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Category filter */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "0.5rem 1.1rem",
                  borderRadius: "999px",
                  border: "1.5px solid",
                  borderColor:
                    activeCategory === cat
                      ? "var(--color-ember)"
                      : "var(--color-cream-darker)",
                  background:
                    activeCategory === cat
                      ? "var(--color-ember)"
                      : "white",
                  color:
                    activeCategory === cat
                      ? "white"
                      : "var(--color-ink-muted)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-body)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Count */}
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--color-muted)",
              marginBottom: "2rem",
            }}
          >
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && ` in ${activeCategory}`}
            {search && ` matching "${search}"`}
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5rem",
              }}
              className="blog-grid"
            >
              {filtered.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "5rem 1rem",
                color: "var(--color-muted)",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  color: "var(--color-ink)",
                  marginBottom: "0.5rem",
                }}
              >
                No articles found
              </h3>
              <p style={{ fontSize: "0.9rem" }}>
                Try a different search term or category.
              </p>
            </div>
          )}
        </div>
      </main>

      <style>{`
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
