import { useEffect, useState } from "react";
import "./Navbar.css";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <a href="#inicio" className="nav__logo">
          <span className="gradient-text">E</span>lias
        </a>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="nav__cta" onClick={() => setOpen(false)}>
            Hablemos
          </a>
        </nav>

        <button
          className="nav__burger"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? "open" : ""} />
          <span className={open ? "open" : ""} />
          <span className={open ? "open" : ""} />
        </button>
      </div>
    </header>
  );
}
