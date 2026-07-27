import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import "./Skills.css";

const CATEGORIES = [
  {
    icon: "⚙️",
    title: "Backend",
    items: ["Java 17", "Java 8", "Spring Boot", "Spring Framework", "Spring Security", "REST APIs"],
  },
  {
    icon: "🎨",
    title: "Frontend",
    items: ["React.js", "Vue.js", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: "🗄️",
    title: "Bases de datos",
    items: ["MySQL", "PostgreSQL", "Modelado relacional", "Consultas avanzadas", "Subconsultas"],
  },
  {
    icon: "🧪",
    title: "Testing & Herramientas",
    items: ["JUnit", "Mockito", "Git", "Scrum", "Code Review"],
  },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          // Entrada de las tarjetas
          animate(root.querySelectorAll(".skill-card"), {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 650,
            delay: stagger(110),
            ease: "out(3)",
          });
          // Chips de tecnologías, escalonados en cascada
          animate(root.querySelectorAll(".skill-card__item"), {
            opacity: [0, 1],
            scale: [0.85, 1],
            duration: 450,
            delay: stagger(35, { start: 250 }),
            ease: "out(3)",
          });

          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="habilidades" className="skills" ref={ref}>
      <div className="container">
        <span className="eyebrow">Habilidades</span>
        <h2 className="section-title">
          Mi <span className="gradient-text">stack técnico</span>
        </h2>
        <p className="section-subtitle">
          Las tecnologías con las que trabajo día a día para llevar una idea desde el
          diseño hasta producción.
        </p>

        <div className="skills__grid">
          {CATEGORIES.map((cat) => (
            <div className="skill-card" key={cat.title}>
              <div className="skill-card__head">
                <span className="skill-card__icon">{cat.icon}</span>
                <h3 className="skill-card__title">{cat.title}</h3>
              </div>
              <div className="skill-card__items">
                {cat.items.map((item) => (
                  <span className="skill-card__item" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
