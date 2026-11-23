async function Jaar() {
  "use cache";
  return new Date().getFullYear();
}

export default function SiteFooter() {
  return (
    <>
      {/* Footer */}
      <footer className="site-footer">
        <div className="container-page footer-bottom">
          <span>
            © <Jaar /> Vuur van Binnen
          </span>
          <span>In opbouw — binnenkort meer 🔥</span>
        </div>
      </footer>
    </>
  );
}
