import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /* lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isHomeDark = location.pathname === '/' && !scrolled && !menuOpen;

  const navBg = scrolled || menuOpen ? 'rgba(245,240,232,0.96)' : 'transparent';

  const navBorder = scrolled
    ? '1px solid rgba(18,16,14,0.08)'
    : '1px solid transparent';

  return (
    <>
      {/* ─── Styles ─────────────────────────────── */}
      <style>{`
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: background 0.3s, border-color 0.3s, backdrop-filter 0.3s;
        }

        /* ── Inner wrapper ── */
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ── Logo ── */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-logo-icon {
          width: 36px; height: 36px;
          background: var(--color-ember);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .nav-logo-text {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          transition: color 0.3s;
        }

        /* ── Desktop links ── */
        .nav-links {
          display: none;           /* hidden on mobile */
          align-items: center;
          gap: 0.25rem;
        }
        .nav-link {
          padding: 0.5rem 1rem;
          border-radius: 8px;
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 500;
          font-family: var(--font-body);
          transition: color 0.2s, background 0.2s;
        }
        .nav-link:hover {
          background: rgba(232,112,42,0.07);
        }

        /* ── Desktop CTA ── */
        .nav-cta {
          display: none;           /* hidden on mobile */
          align-items: center;
          gap: 0.75rem;
        }

        /* ── Hamburger ── */
        .nav-hamburger {
          display: flex;           /* visible on mobile */
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .nav-hamburger:hover { background: rgba(0,0,0,0.05); }
        .nav-hamburger span {
          display: block;
          width: 22px; height: 2px;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }

        /* ── Mobile drawer ── */
        .nav-drawer {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-drawer-inner {
          padding: 0.75rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .nav-drawer-link {
          display: flex;
          align-items: center;
          padding: 0.85rem 0.75rem;
          border-radius: 10px;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          font-family: var(--font-body);
          transition: background 0.2s, color 0.2s;
        }
        .nav-drawer-link:hover {
          background: var(--color-cream-dark);
        }
        .nav-drawer-divider {
          height: 1px;
          background: var(--color-cream-darker);
          margin: 0.5rem 0;
        }

        /* ─── Desktop breakpoint ──────────── */
        @media (min-width: 768px) {
          .nav-links    { display: flex; }
          .nav-cta      { display: flex; }
          .nav-hamburger { display: none; }
          .nav-drawer   { display: none !important; }
        }
      `}</style>

      {/* ─── Nav ────────────────────────────────── */}
      <nav
        className="nav-root"
        style={{
          background: navBg,
          backdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
          borderBottom: navBorder,
        }}
      >
        <div className="nav-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <div className="nav-logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span
              className="nav-logo-text"
              style={{ color: isHomeDark ? 'white' : 'var(--color-ink)' }}
            >
              EduMentor
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="nav-links">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive
                    ? 'var(--color-ember)'
                    : isHomeDark
                      ? 'rgba(255,255,255,0.82)'
                      : 'var(--color-ink-muted)',
                  background: isActive
                    ? 'rgba(232,112,42,0.08)'
                    : 'transparent',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="nav-cta">
            <Link
              to="/courses"
              className="btn-primary"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}
            >
              Start Learning
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              color: isHomeDark && !menuOpen ? 'white' : 'var(--color-ink)',
            }}
          >
            <span
              style={{
                background: 'currentColor',
                transform: menuOpen
                  ? 'rotate(45deg) translate(5px, 5px)'
                  : 'none',
              }}
            />
            <span
              style={{
                background: 'currentColor',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                background: 'currentColor',
                transform: menuOpen
                  ? 'rotate(-45deg) translate(5px, -5px)'
                  : 'none',
              }}
            />
          </button>
        </div>

        {/* ── Mobile Drawer ────────────────────── */}
        <div
          className="nav-drawer"
          style={{
            maxHeight: menuOpen ? '500px' : '0px',
            background: 'rgba(245,240,232,0.98)',
            borderTop: menuOpen
              ? '1px solid var(--color-cream-darker)'
              : '1px solid transparent',
          }}
        >
          <div className="nav-drawer-inner">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className="nav-drawer-link"
                style={({ isActive }) => ({
                  color: isActive
                    ? 'var(--color-ember)'
                    : 'var(--color-ink-muted)',
                  fontWeight: isActive ? 600 : 500,
                  background: isActive
                    ? 'rgba(232,112,42,0.07)'
                    : 'transparent',
                })}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="nav-drawer-divider" />

            <Link
              to="/courses"
              className="btn-primary"
              style={{ justifyContent: 'center', marginTop: '0.25rem' }}
            >
              Start Learning
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
