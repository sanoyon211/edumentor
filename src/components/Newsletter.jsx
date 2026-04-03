import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      style={{
        padding: "6rem 1.5rem",
        background: "var(--color-cream-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,112,42,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Icon */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            borderRadius: "18px",
            background: "var(--color-ember)",
            marginBottom: "1.5rem",
            boxShadow: "0 8px 24px rgba(232,112,42,0.35)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" />
            <polyline points="22,6 12,13 2,6" strokeLinecap="round" />
          </svg>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
            fontWeight: 700,
            color: "var(--color-ink)",
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
          }}
        >
          Stay ahead of the curve
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--color-muted)",
            lineHeight: 1.65,
            marginBottom: "2.5rem",
          }}
        >
          Get weekly tutorials, course announcements, and career advice delivered
          to your inbox. Join 18,000+ learners who never miss an update.
        </p>

        {submitted ? (
          <div
            className="animate-fade-up"
            style={{
              background: "rgba(78,115,82,0.1)",
              border: "1.5px solid var(--color-sage)",
              borderRadius: "14px",
              padding: "1.5rem 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "var(--color-sage)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <polyline points="20,6 9,17 4,12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "var(--color-sage)", fontSize: "0.95rem" }}>
                You're on the list!
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>
                Check your inbox for a confirmation email.
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              gap: "0.75rem",
              maxWidth: "480px",
              margin: "0 auto",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              className="input-custom"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ flex: "1", minWidth: "200px" }}
            />
            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              style={{
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 1s linear infinite" }}>
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" strokeLinecap="round" strokeDasharray="60" strokeDashoffset="20" />
                  </svg>
                  Subscribing...
                </>
              ) : (
                "Subscribe Free"
              )}
            </button>
          </form>
        )}

        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.78rem",
            color: "var(--color-muted-light)",
          }}
        >
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
