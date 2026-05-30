import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="app-shell">
      <nav className="site-nav">
        <Link to="/" className="nav-home">
          Gina Kim
        </Link>
        <Link
          to="/projects"
          className={`nav-link ${location.pathname.startsWith("/projects") ? "active" : ""}`}
        >
          PROJECT
        </Link>
        <Link
          to="/about"
          className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
        >
          ABOUT
        </Link>
      </nav>

      <aside className="contact-panel">
        <span className="contact-label">CONTACT</span>
        <a href="mailto:gina091021@gmail.com" className="contact-email">
        gina091021@gmail.com
        </a>
      </aside>

      <div className="content-layer">{children}</div>

      {!isHome && (
        <footer className="footer">
          © {new Date().getFullYear()} Gina Kim. 프론트엔드 개발자
        </footer>
      )}
    </div>
  );
}
