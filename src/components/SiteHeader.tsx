import Link from "next/link";

export default function SiteHeader() {
  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="container-page header-inner">
          <Link href="/" className="logo">
            <span className="logo-flame" aria-hidden="true">
              🔥
            </span>
            Vuur van Binnen
          </Link>
          <nav className="nav-links" aria-label="Hoofdmenu">
            <a href="#" className="nav-link">
              Mijn verhaal
            </a>
            <a href="#pijlers" className="nav-link">
              Pijlers
            </a>
            <a href="#" className="nav-link">
              Blog
            </a>
            <a href="#" className="nav-link">
              Agenda
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
