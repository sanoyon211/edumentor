import { Link } from "react-router-dom";

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill={star <= Math.floor(rating) ? "#F59E0B" : "none"}
          stroke="#F59E0B"
          strokeWidth="2"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const levelColors = {
  Beginner: { bg: "rgba(78,115,82,0.1)", text: "var(--color-sage)" },
  Intermediate: { bg: "rgba(197,146,46,0.1)", text: "var(--color-gold)" },
  Advanced: { bg: "rgba(232,112,42,0.1)", text: "var(--color-ember)" },
};

export default function CourseCard({ course }) {
  const levelStyle = levelColors[course.level] || levelColors.Beginner;

  return (
    <div
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        background: "white",
        boxShadow: "var(--shadow-card)",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.3s, transform 0.3s",
        position: "relative",
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
      {/* Badge */}
      {course.badge && (
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            left: "0.75rem",
            zIndex: 2,
            background: course.badgeColor || "var(--color-ember)",
            color: "white",
            padding: "0.28rem 0.7rem",
            borderRadius: "6px",
            fontSize: "0.7rem",
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {course.badge}
        </div>
      )}

      {/* Image */}
      <div style={{ height: "190px", overflow: "hidden", position: "relative" }}>
        <img
          src={course.image}
          alt={course.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
        />
        {/* Overlay on hover would need JS */}
      </div>

      {/* Body */}
      <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Level */}
        <span
          style={{
            display: "inline-block",
            background: levelStyle.bg,
            color: levelStyle.text,
            fontSize: "0.72rem",
            fontWeight: 700,
            padding: "0.22rem 0.65rem",
            borderRadius: "6px",
            letterSpacing: "0.04em",
            marginBottom: "0.65rem",
          }}
        >
          {course.level}
        </span>

        {/* Title */}
        <h3
          className="line-clamp-2"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            fontWeight: 600,
            color: "var(--color-ink)",
            lineHeight: 1.25,
            marginBottom: "0.6rem",
          }}
        >
          {course.title}
        </h3>

        {/* Instructor */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.75rem",
          }}
        >
          <div
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              background: "var(--color-ink-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.65rem",
              fontWeight: 700,
              color: "white",
              flexShrink: 0,
            }}
          >
            {course.instructorInitials}
          </div>
          <span style={{ fontSize: "0.8rem", color: "var(--color-muted)", fontWeight: 500 }}>
            {course.instructor}
          </span>
        </div>

        {/* Rating row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            marginBottom: "0.75rem",
          }}
        >
          <StarRating rating={course.rating} />
          <span
            style={{
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "var(--color-ink)",
            }}
          >
            {course.rating}
          </span>
          <span style={{ fontSize: "0.78rem", color: "var(--color-muted)" }}>
            ({course.reviews.toLocaleString()} reviews)
          </span>
        </div>

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "1rem",
            fontSize: "0.78rem",
            color: "var(--color-muted)",
          }}
        >
          <span>🕐 {course.duration}</span>
          <span>📖 {course.lessons} lessons</span>
          <span>👥 {course.students.toLocaleString()}</span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem", flex: 1 }}>
          {course.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                background: "var(--color-cream)",
                color: "var(--color-ink-muted)",
                fontSize: "0.7rem",
                fontWeight: 600,
                padding: "0.22rem 0.6rem",
                borderRadius: "6px",
                border: "1px solid var(--color-cream-darker)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid var(--color-cream-dark)",
            paddingTop: "1rem",
            marginTop: "auto",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "var(--color-ink)",
              }}
            >
              ${course.price}
            </span>
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.82rem",
                color: "var(--color-muted-light)",
                textDecoration: "line-through",
              }}
            >
              ${course.originalPrice}
            </span>
          </div>
          <Link
            to={`/courses`}
            className="btn-primary"
            style={{ padding: "0.55rem 1.1rem", fontSize: "0.84rem" }}
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}
