import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo gradient-text">Elias Chanquía</span>
        <p>© {new Date().getFullYear()} Elias Chanquía · Hecho con React + anime.js</p>
        <a href="#inicio" className="footer__top">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
