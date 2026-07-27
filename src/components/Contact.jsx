import { useState } from "react";
import { animate } from "animejs";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/chanquiaelias8", icon: "🐙" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eliaschanquia/", icon: "💼" },
  { label: "chanquiaelias8@gmail.com", href: "mailto:chanquiaelias8@gmail.com", icon: "✉️" },
  { label: "+54 9 2236683392", href: "tel:+5492236683392", icon: "📱" },
];

export default function Contact() {
  const ref = useReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    animate(e.currentTarget.querySelector(".contact__success"), {
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 500,
      ease: "out(3)",
    });
  };

  return (
    <section id="contacto" className="contact" ref={ref}>
      <div className="container contact__inner">
        <div className="contact__intro">
          <span className="eyebrow reveal">Contacto</span>
          <h2 className="section-title reveal">
            ¿Tienes una idea? <span className="gradient-text">Hablemos</span>
          </h2>
          <p className="reveal">
            Estoy disponible para nuevas oportunidades y colaboraciones, especialmente en
            entornos corporativos y de alto impacto. Escríbeme y te respondo lo antes posible.
          </p>

          <div className="contact__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="contact__social reveal" target="_blank" rel="noreferrer">
                <span>{s.icon}</span> {s.label}
              </a>
            ))}
          </div>
        </div>

        <form className="contact__form reveal" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Nombre</label>
            <input id="name" type="text" required placeholder="Tu nombre" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required placeholder="chanquiaelias8@gmail.com"/>
          </div>
          <div className="field">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" rows="4" required placeholder="Cuéntame sobre tu proyecto..." />
          </div>
          <button type="submit" className="btn btn--primary">Enviar mensaje</button>
          {sent && (
            <p className="contact__success">¡Gracias! Tu mensaje se ha enviado (demo). 🎉</p>
          )}
        </form>
      </div>
    </section>
  );
}
