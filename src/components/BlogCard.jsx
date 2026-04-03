import { Link } from "react-router-dom";

export default function BlogCard({ blog, featured = false }) {
  if (featured) {
    return (
      <Link
        to={`/blog/${blog.id}`}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderRadius: "20px",
          overflow: "hidden",
          background: "white",
          boxShadow: "var(--shadow-card)",
          textDecoration: "none",
          color: "inherit",
          transition: "box-shadow 0.3s, transform 0.3s",
          minHeight: "320px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "var(--shadow-hover)";
          e.currentTarget.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "var(--shadow-card)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
        className="featured-blog-card"
      >
        {/* Image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              background: blog.categoryColor || "var(--color-ember)",
              color: "white",
              padding: "0.3rem 0.75rem",
              borderRadius: "6px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            {blog.category}
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
                fontSize: "0.82rem",
                color: "var(--color-muted)",
              }}
            >
              <span>{blog.date}</span>
              <span>·</span>
              <span>{blog.readTime}</span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "var(--color-ink)",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              {blog.title}
            </h3>
            <p
              className="line-clamp-3"
              style={{
                fontSize: "0.9rem",
                color: "var(--color-ink-muted)",
                lineHeight: 1.65,
              }}
            >
              {blog.excerpt}
            </p>
          </div>

          {/* Author + CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: blog.categoryColor || "var(--color-ember)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "white",
                  flexShrink: 0,
                }}
              >
                {blog.authorInitials}
              </div>
              <div>
                <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--color-ink)" }}>
                  {blog.author}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--color-muted)" }}>
                  {blog.authorRole}
                </div>
              </div>
            </div>
            <span className="btn-ghost">
              Read →
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${blog.id}`}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        background: "white",
        boxShadow: "var(--shadow-card)",
        textDecoration: "none",
        color: "inherit",
        transition: "box-shadow 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-hover)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-card)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: "200px" }}>
        <img
          src={blog.image}
          alt={blog.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            left: "0.75rem",
            background: blog.categoryColor || "var(--color-ember)",
            color: "white",
            padding: "0.25rem 0.65rem",
            borderRadius: "6px",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          {blog.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.6rem",
            fontSize: "0.78rem",
            color: "var(--color-muted)",
          }}
        >
          <span>{blog.date}</span>
          <span>·</span>
          <span>{blog.readTime}</span>
        </div>
        <h3
          className="line-clamp-2"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            fontWeight: 600,
            color: "var(--color-ink)",
            lineHeight: 1.25,
            marginBottom: "0.5rem",
          }}
        >
          {blog.title}
        </h3>
        <p
          className="line-clamp-2"
          style={{
            fontSize: "0.84rem",
            color: "var(--color-ink-muted)",
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {blog.excerpt}
        </p>

        {/* Author */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: blog.categoryColor || "var(--color-ember)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.68rem",
              fontWeight: 700,
              color: "white",
              flexShrink: 0,
            }}
          >
            {blog.authorInitials}
          </div>
          <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-ink)" }}>
            {blog.author}
          </span>
        </div>
      </div>
    </Link>
  );
}
