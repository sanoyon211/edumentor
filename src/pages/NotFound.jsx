import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function NotFound() {
  // When used as errorElement, useRouteError() gives the thrown error.
  // When used as a normal <Route element>, it returns undefined — that's fine.
  const error = useRouteError();
  const is404 = !error || isRouteErrorResponse(error) && error.status === 404;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-cream)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      {/* Big number */}
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(6rem, 20vw, 14rem)",
          fontWeight: 700,
          color: "var(--color-cream-darker)",
          lineHeight: 1,
          letterSpacing: "-0.05em",
          marginBottom: "1rem",
          userSelect: "none",
        }}
      >
        {is404 ? "404" : "Oops"}
      </div>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: 700,
          color: "var(--color-ink)",
          letterSpacing: "-0.02em",
          marginBottom: "0.75rem",
        }}
      >
        {is404 ? "Page not found" : "Something went wrong"}
      </h1>

      <p
        style={{
          fontSize: "1rem",
          color: "var(--color-muted)",
          maxWidth: "400px",
          lineHeight: 1.65,
          marginBottom: "2.5rem",
        }}
      >
        {is404
          ? "The page you're looking for doesn't exist or has been moved. Let's get you back on track."
          : "An unexpected error occurred. Please try refreshing the page."}
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link to="/" className="btn-primary">
          ← Back to Home
        </Link>
        <Link to="/courses" className="btn-outline">
          Browse Courses
        </Link>
      </div>
    </div>
  );
}
