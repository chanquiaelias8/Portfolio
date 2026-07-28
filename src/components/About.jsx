import { useReveal } from "../hooks/useReveal";
import "./About.css";

const STATS = [
  { value: "+10", label: "Años programando" },
  { value: "2", label: "Años profesionales" },
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
            Soy desarrollador Full Stack radicado en Buenos Aires, Argentina. Programo desde
            2016 (más de 10 años entre la práctica y el aprendizaje) y cuento con 2 años de
            experiencia profesional en el área. Trabajo tanto en backend como en frontend:
            desarrollo features end-to-end con <strong>Java 17 / Spring Boot</strong> y
            <strong> React / Vue.js</strong>, escribo pruebas con JUnit y Mockito, y optimizo el
            acceso a datos en MySQL y PostgreSQL.
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
            <span>&nbsp;&nbsp;ubicacion: <i>"Buenos Aires, AR"</i>,</span>
            <span>&nbsp;&nbsp;disponible: <b>true</b>,</span>
            <span>{"}"};</span>
          </div>
        </div>
      </div>
    </section>
  );
}
