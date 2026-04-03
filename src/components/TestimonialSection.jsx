import { useState } from "react";
import { testimonials } from "../data/testimonials";

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section
      style={{
        padding: "6rem 1.5rem",
        background: "var(--color-dark-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative quote mark */}
      <div
        style={{
          position: "absolute",
          top: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-display)",
          fontSize: "20rem",
          color: "rgba(255,255,255,0.02)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        "
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        {/* Label */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
            STUDENT SUCCESS STORIES
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Real results from real learners
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          key={active}
          className="animate-fade-in"
          style={{
            background: "var(--color-dark-card)",
            border: "1px solid var(--color-dark-border)",
            borderRadius: "24px",
            padding: "clamp(2rem, 5vw, 3.5rem)",
            marginBottom: "2rem",
            position: "relative",
          }}
        >
          {/* Top accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "3rem",
              width: "60px",
              height: "3px",
              background: t.avatarColor,
              borderRadius: "0 0 4px 4px",
            }}
          />

          {/* Quote */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.65,
              marginBottom: "2rem",
            }}
          >
            "{t.quote}"
          </p>

          {/* Author */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: t.avatarColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "white",
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "white", fontSize: "1rem" }}>{t.name}</div>
                <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)" }}>{t.role}</div>
              </div>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                padding: "0.4rem 0.85rem",
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {t.course}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
          <button
            onClick={prev}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "var(--color-dark-card)",
              border: "1px solid var(--color-dark-border)",
              color: "rgba(255,255,255,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-ember)";
              e.currentTarget.style.color = "var(--color-ember)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-dark-border)";
              e.currentTarget.style.color = "rgba(255,255,255,0.7)";
            }}
          >
            ←
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: i === active ? "var(--color-ember)" : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "var(--color-dark-card)",
              border: "1px solid var(--color-dark-border)",
              color: "rgba(255,255,255,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-ember)";
              e.currentTarget.style.color = "var(--color-ember)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-dark-border)";
              e.currentTarget.style.color = "rgba(255,255,255,0.7)";
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
