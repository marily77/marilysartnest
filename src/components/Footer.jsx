import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__row">
        <span className="footer__brand">Marily's Art Nest</span>
        <div className="footer__socials">
          <a href="https://instagram.com/marilysartnest" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com/marilysartnest" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="mailto:marily77@gmail.com">Email</a>
        </div>
        <span className="footer__copy">© {year} Marily</span>
      </div>
    </footer>
  );
}
