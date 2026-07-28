import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

// El ID de Formspree se lee desde una variable de entorno (VITE_FORMSPREE_ID)
// definida en .env.local (no versionado). Ver .env.example.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/chanquiaelias8", icon: "🐙" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eliaschanquia/", icon: "💼" },
  { label: "chanquiaelias8@gmail.com", href: "mailto:chanquiaelias8@gmail.com", icon: "✉️" },
  { label: "+54 9 2236683392", href: "tel:+5492236683392", icon: "📱" },
];

export default function Contact() {
  const ref = useReveal();
  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");
  const feedbackRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!FORMSPREE_ID) {
      console.error("Falta definir VITE_FORMSPREE_ID en .env.local");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Anima el mensaje de feedback cuando ya está renderizado en el DOM.
  useEffect(() => {
    if ((status === "success" || status === "error") && feedbackRef.current) {
      animate(feedbackRef.current, {
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 500,
        ease: "out(3)",
      });
    }
  }, [status]);

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
            <input id="name" name="name" type="text" required placeholder="Tu nombre" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="tucorreo@ejemplo.com" />
          </div>
          <div className="field">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="4" required placeholder="Cuéntame sobre tu proyecto..." />
          </div>

          <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
            {status === "sending" ? "Enviando…" : "Enviar mensaje"}
          </button>

          {status === "success" && (
            <p className="contact__feedback contact__feedback--ok" ref={feedbackRef}>
              ¡Gracias! Tu mensaje se envió correctamente. Te responderé pronto. 🎉
            </p>
          )}
          {status === "error" && (
            <p className="contact__feedback contact__feedback--error" ref={feedbackRef}>
              Ups, algo salió mal. Probá de nuevo o escribime a chanquiaelias8@gmail.com.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
