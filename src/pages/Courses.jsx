import { useState, useMemo } from "react";
import CourseCard from "../components/CourseCard";
import { courses, courseCategories } from "../data/courses";

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All Levels");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filtered = useMemo(() => {
    let result = courses.filter((c) => {
      const matchCat = activeCategory === "All" || c.category === activeCategory;
      const matchLevel = activeLevel === "All Levels" || c.level === activeLevel;
      const matchSearch =
        !search ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.toLowerCase().includes(search.toLowerCase()) ||
        c.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchLevel && matchSearch;
    });

    if (sortBy === "popular") result = [...result].sort((a, b) => b.students - a.students);
    if (sortBy === "rating")  result = [...result].sort((a, b) => b.rating - a.rating);
    if (sortBy === "price-lo") result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "price-hi") result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === "newest")  result = [...result].sort((a, b) => b.id - a.id);

    return result;
  }, [activeCategory, activeLevel, search, sortBy]);

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
          ALL COURSES
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
          Build real skills.
          <br />
          <span style={{ color: "var(--color-ember)", fontStyle: "italic" }}>
            Land real jobs.
          </span>
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
          200+ courses across web development, data science, design, and DevOps.
          All project-based. All beginner-friendly.
        </p>

        {/* Search */}
        <div style={{ maxWidth: "480px", margin: "0 auto", position: "relative" }}>
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
            placeholder="Search courses, instructors, topics..."
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
          {/* Filters row */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              marginBottom: "2rem",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Categories */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {courseCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: "999px",
                    border: "1.5px solid",
                    borderColor:
                      activeCategory === cat ? "var(--color-ember)" : "var(--color-cream-darker)",
                    background: activeCategory === cat ? "var(--color-ember)" : "white",
                    color: activeCategory === cat ? "white" : "var(--color-ink-muted)",
                    fontSize: "0.82rem",
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

            {/* Sort + Level */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <select
                value={activeLevel}
                onChange={(e) => setActiveLevel(e.target.value)}
                style={{
                  padding: "0.55rem 0.9rem",
                  borderRadius: "10px",
                  border: "1.5px solid var(--color-cream-darker)",
                  background: "white",
                  color: "var(--color-ink)",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-body)",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                {levels.map((l) => <option key={l}>{l}</option>)}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: "0.55rem 0.9rem",
                  borderRadius: "10px",
                  border: "1.5px solid var(--color-cream-darker)",
                  background: "white",
                  color: "var(--color-ink)",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-body)",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
                <option value="price-lo">Price: Low to High</option>
                <option value="price-hi">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Count */}
          <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", marginBottom: "2rem" }}>
            {filtered.length} course{filtered.length !== 1 ? "s" : ""} found
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5rem",
              }}
              className="courses-grid"
            >
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
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
                No courses found
              </h3>
              <p style={{ fontSize: "0.9rem" }}>Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </main>

      <style>{`
        @media (max-width: 900px) {
          .courses-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .courses-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
