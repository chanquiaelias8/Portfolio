import { useEffect, useRef } from "react";
import { animate, stagger, createTimeline } from "animejs";
import "./Hero.css";

const ROLES = ["Java 17", "Spring Boot", "React.js", "Vue.js", "PostgreSQL"];

export default function Hero() {
  const root = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    // Guard: en React StrictMode el efecto se ejecuta dos veces (montar →
    // limpiar → montar). Sin esto, dos animaciones sobre las mismas letras
    // entran en conflicto y quedan mal (aparecen y se desvanecen).
    if (started.current) return;
    started.current = true;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Línea de tiempo de entrada
    const tl = createTimeline({ defaults: { ease: "out(3)" } });

    tl.add(".hero__eyebrow", { opacity: [0, 1], translateY: [16, 0], duration: 600 })
      .add(
        ".hero__title .char",
        {
          opacity: [0, 1],
          translateY: [40, 0],
          rotateZ: [8, 0],
          duration: 700,
          delay: stagger(35),
        },
        "-=300"
      )
      .add(".hero__desc", { opacity: [0, 1], translateY: [20, 0], duration: 600 }, "-=400")
      .add(
        ".hero__actions > *",
        { opacity: [0, 1], translateY: [16, 0], duration: 500, delay: stagger(90) },
        "-=300"
      )
      .add(
        ".hero__chip",
        { opacity: [0, 1], scale: [0.8, 1], duration: 500, delay: stagger(70) },
        "-=300"
      );

    // Formas flotantes en bucle infinito
    animate(".hero__shape", {
      translateY: [0, -22],
      duration: 3200,
      delay: stagger(400),
      ease: "inOut(2)",
      loop: true,
      alternate: true,
    });
  }, []);

  // Divide el título en caracteres para animarlos individualmente
  const title = "Construyo aplicaciones web de punta a punta";
  const chars = title.split("").map((c, i) => (
    <span className="char" key={i} style={{ display: "inline-block", whiteSpace: c === " " ? "pre" : "normal" }}>
      {c === " " ? " " : c}
    </span>
  ));

  return (
    <section id="inicio" className="hero" ref={root}>
      <div className="hero__shapes" aria-hidden="true">
        <span className="hero__shape hero__shape--1" />
        <span className="hero__shape hero__shape--2" />
        <span className="hero__shape hero__shape--3" />
      </div>

      <div className="container hero__inner">
        <span className="hero__eyebrow eyebrow">Full Stack Developer · Buenos Aires, AR</span>

        <h1 className="hero__title">{chars}</h1>

        <p className="hero__desc">
          Hola, soy <strong>Elias Chanquía</strong>. Desarrollador Full Stack con más de 10
          años programando y 2 de experiencia profesional, construyendo aplicaciones web con
          <strong> Java / Spring Boot</strong> en el backend y <strong>React / Vue.js </strong>
          en el frontend, dentro de equipos ágiles.
        </p>

        <div className="hero__actions">
          <a href="#proyectos" className="btn btn--primary">Ver proyectos</a>
          <a href="#contacto" className="btn btn--ghost">Contactarme</a>
        </div>

        <div className="hero__chips">
          {ROLES.map((r) => (
            <span className="hero__chip" key={r}>{r}</span>
          ))}
        </div>
      </div>

      <a href="#sobre-mi" className="hero__scroll" aria-label="Bajar">
        <span />
      </a>
    </section>
  );
}
