import { animate } from "animejs";
import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

const GITHUB = "https://github.com/chanquiaelias8";

const PROJECTS = [
  {
    title: "Bazar App",
    desc: "Aplicación fullstack para la gestión de un bazar: una API REST en Java / Spring Boot (con login, y ABM de productos, clientes y ventas) y un frontend en React que la consume. Proyecto final del curso de desarrollo de APIs con Spring Boot.",
    tags: ["Java", "Spring Boot", "REST API", "React", "JavaScript", "Login"],
    emoji: "🛒",
    featured: true,
    links: [
      { label: "Demo", href: "https://chanquiaelias8.github.io/Demo_Bazar/login", title: "Ver demo en vivo" },
      { label: "Backend", href: "https://github.com/chanquiaelias8/Bazar_App", title: "Código del backend" },
      { label: "Frontend", href: "https://github.com/chanquiaelias8/Demo_Bazar", title: "Código del frontend" },
    ],
  },
  {
    title: "Pokedex",
    desc: "Pokédex interactiva que consume la API de Pokémon para mostrar y buscar Pokémon con sus estadísticas. Proyecto de práctica de consumo de APIs REST.",
    tags: ["JavaScript", "HTML5", "CSS3", "API REST"],
    emoji: "🔴",
    links: [{ label: "Código", href: "https://github.com/chanquiaelias8/Pokedex", title: "Ver en GitHub" }],
  },
  {
    title: "TechNews",
    desc: "Página web de noticias de tecnología con maquetado responsive usando Flexbox, CSS Grid y animaciones al hacer scroll con ScrollReveal.",
    tags: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "JavaScript"],
    emoji: "📰",
    links: [{ label: "Código", href: "https://github.com/chanquiaelias8/TechNews", title: "Ver en GitHub" }],
  },
  {
    title: "Mini-Projects",
    desc: "Colección de mini proyectos de frontend para practicar HTML, CSS y JavaScript, con distintos componentes y efectos de interfaz.",
    tags: ["HTML", "CSS", "JavaScript"],
    emoji: "🧩",
    links: [{ label: "Código", href: "https://github.com/chanquiaelias8/Mini-Projects", title: "Ver en GitHub" }],
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
              className={`project reveal ${p.featured ? "project--featured" : ""}`}
              key={p.title}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <div className="project__top">
                <span className="project__emoji">{p.emoji}</span>
                {p.featured && <span className="project__badge">Fullstack</span>}
              </div>
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.desc}</p>
              <div className="project__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project__links">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    title={l.title}
                    className={l.label === "Demo" ? "project__link project__link--demo" : "project__link"}
                  >
                    {l.label === "Demo" ? "↗ " : "</> "}
                    {l.label}
                  </a>
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
