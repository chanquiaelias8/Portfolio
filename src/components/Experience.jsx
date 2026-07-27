import { useReveal } from "../hooks/useReveal";
import "./Experience.css";

const JOBS = [
  {
    role: "Full Stack Developer",
    company: "Uteam",
    url: "https://www.uteam.cl",
    period: "Remoto · Noviembre 2024 – Presente",
    stack: ["Java 17", "Spring Boot", "Vue.js", "Spring Security", "MySQL", "PostgreSQL"],
    points: [
      "Desarrollo de features full stack end-to-end en Java 17 / Spring Boot y Vue.js dentro de un equipo ágil (Scrum): 4-5 historias de usuario por sprint con menos del 10% de retrabajo.",
      "Reducción del 30% en bugs post-release escribiendo pruebas unitarias y de integración con JUnit y Mockito, y participando en code reviews diarias.",
      "Optimización del acceso a datos con una reducción del 40% en el tiempo de respuesta de consultas críticas, rediseñando subconsultas y modelado relacional en MySQL y PostgreSQL.",
      "Seguridad de la aplicación con 15+ endpoints protegidos sin incidentes, implementando autenticación/autorización con Spring Security sobre APIs REST.",
      "Cumplimiento del 90% de los compromisos de sprint durante el último año, colaborando con desarrolladores senior en control de versiones (Git) y revisiones de código.",
    ],
  },
];

export default function Experience() {
  const ref = useReveal({ delay: 120 });

  return (
    <section id="experiencia" className="experience" ref={ref}>
      <div className="container">
        <span className="eyebrow reveal">Experiencia</span>
        <h2 className="section-title reveal">
          Mi trayectoria <span className="gradient-text">profesional</span>
        </h2>
        <p className="section-subtitle reveal">
          Impacto medible como Full Stack Developer, combinando backend y frontend en
          equipos ágiles.
        </p>

        <div className="timeline">
          {JOBS.map((job) => (
            <article className="timeline__item reveal" key={job.company}>
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__head">
                  <h3 className="timeline__role">
                    {job.role} <span className="timeline__at">·</span>{" "}
                    <a href={job.url} target="_blank" rel="noreferrer" className="gradient-text">
                      {job.company}
                    </a>
                  </h3>
                  <span className="timeline__period">{job.period}</span>
                </div>

                <ul className="timeline__points">
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                <div className="timeline__stack">
                  {job.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
