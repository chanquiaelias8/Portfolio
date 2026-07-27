import { animate } from "animejs";
import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

const GITHUB = "https://github.com/chanquiaelias8";

const PROJECTS = [
  {
    title: "Pokedex",
    desc: "Pokédex interactiva que consume la API de Pokémon para mostrar y buscar Pokémon con sus estadísticas. Proyecto de práctica de consumo de APIs REST.",
    tags: ["JavaScript", "HTML5", "CSS3", "API REST"],
    emoji: "🔴",
    code: "https://github.com/chanquiaelias8/Pokedex",
  },
  {
    title: "TechNews",
    desc: "Página web de noticias de tecnología con maquetado responsive usando Flexbox, CSS Grid y animaciones al hacer scroll con ScrollReveal.",
    tags: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "JavaScript"],
    emoji: "📰",
    code: "https://github.com/chanquiaelias8/TechNews",
  },
  {
    title: "Mini-Projects",
    desc: "Colección de mini proyectos de frontend para practicar HTML, CSS y JavaScript, con distintos componentes y efectos de interfaz.",
    tags: ["HTML", "CSS", "JavaScript"],
    emoji: "🧩",
    code: "https://github.com/chanquiaelias8/Mini-Projects",
  },
];

export default function Projects() {
  const ref = useReveal({ delay: 110 });

  const onEnter = (e) => {
    animate(e.currentTarget, { translateY: -8, scale: 1.02, duration: 300, ease: "out(3)" });
  };
  const onLeave = (e) => {
    animate(e.currentTarget, { translateY: 0, scale: 1, duration: 350, ease: "out(3)" });
  };

  return (
    <section id="proyectos" className="projects" ref={ref}>
      <div className="container">
        <span className="eyebrow reveal">Proyectos</span>
        <h2 className="section-title reveal">
          Proyectos <span className="gradient-text">personales</span>
        </h2>
        <p className="section-subtitle reveal">
          Proyectos que desarrollé por mi cuenta para practicar y aprender nuevas
          tecnologías. Todo el código está disponible en mi GitHub.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <article
              className="project reveal"
              key={p.title}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <div className="project__top">
                <span className="project__emoji">{p.emoji}</span>
                <div className="project__links">
                  <a href={p.code} target="_blank" rel="noreferrer" aria-label="Ver GitHub" title="GitHub">{"</>"}</a>
                </div>
              </div>
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.desc}</p>
              <div className="project__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="projects__more reveal">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="btn btn--ghost">
            Ver más en GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
