import { useReveal } from "../hooks/useReveal";
import "./About.css";

const STATS = [
  { value: "2+", label: "Años de experiencia" },
  { value: "4-5", label: "Historias por sprint" },
  { value: "15+", label: "Endpoints protegidos" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="sobre-mi" className="about" ref={ref}>
      <div className="container about__grid">
        <div className="about__text">
          <span className="eyebrow reveal">Sobre mí</span>
          <h2 className="section-title reveal">
            Un poco sobre <span className="gradient-text">quién soy</span>
          </h2>
          <p className="reveal">
            Soy desarrollador Full Stack radicado en Mar del Plata, Argentina. Trabajo tanto
            en backend como en frontend: desarrollo features end-to-end con <strong>Java 17 /
            Spring Boot</strong> y <strong>Vue.js</strong>, escribo pruebas con JUnit y Mockito,
            y optimizo el acceso a datos en MySQL y PostgreSQL.
          </p>
          <p className="reveal">
            Me adapto rápido, valoro el trabajo en equipo y aplico buenas prácticas: code
            reviews diarias, control de versiones con Git y seguridad con Spring Security.
            Busco seguir creciendo en entornos corporativos y de alto impacto.
          </p>

          <div className="about__stats">
            {STATS.map((s) => (
              <div className="about__stat reveal" key={s.label}>
                <span className="about__stat-value gradient-text">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__card reveal" aria-hidden="true">
          <div className="about__avatar">👨‍💻</div>
          <div className="about__code">
            <span><b>const</b> elias = {"{"}</span>
            <span>&nbsp;&nbsp;rol: <i>"Full Stack Developer"</i>,</span>
            <span>&nbsp;&nbsp;backend: [<i>"Java"</i>, <i>"Spring Boot"</i>],</span>
            <span>&nbsp;&nbsp;frontend: [<i>"React"</i>, <i>"Vue.js"</i>],</span>
            <span>&nbsp;&nbsp;ubicacion: <i>"Mar del Plata, AR"</i>,</span>
            <span>&nbsp;&nbsp;disponible: <b>true</b>,</span>
            <span>{"}"};</span>
          </div>
        </div>
      </div>
    </section>
  );
}
