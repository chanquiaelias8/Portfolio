<div align="center">

# 🚀 Portfolio · Elias Chanquía

### Full Stack Developer · Argentina 🇦🇷

*Un portfolio colorido, animado y hecho a mano con mucho café ☕*

Construido con **React** + **Vite** y animaciones fluidas gracias a **anime.js** ✨

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![anime.js](https://img.shields.io/badge/anime.js-4-FF5F9E?logo=javascript&logoColor=white)](https://animejs.com)

</div>

---

## 🎬 ¿Qué tiene de especial?

No es otro portfolio estático más. Cada sección cobra vida cuando la miras 👀

- 🔤 **Título que se escribe solo** — las letras del hero aparecen una a una
- 🎈 **Formas flotantes** que respiran en el fondo, en bucle infinito
- 🪄 **Reveal al hacer scroll** — el contenido entra en escena cuando llega su momento
- 🃏 **Tarjetas con vida propia** — se elevan y reaccionan al pasar el mouse
- 🌈 **Estilo colorido y creativo** — gradientes de rosa a violeta a celeste
- 📱 **100% responsive** y respetuoso con `prefers-reduced-motion` (accesible de verdad)

---

## 🧭 Secciones

| Sección | Qué encontrás |
|---------|---------------|
| 🏠 **Inicio** | Presentación con título animado y stack principal |
| 👤 **Sobre mí** | Quién soy, mis stats y un bloque de código sobre mí |
| 🛠️ **Habilidades** | Mi stack organizado por categorías |
| 💼 **Experiencia** | Mi trayectoria profesional con impacto medible |
| 🧩 **Proyectos** | Proyectos personales (¡directo de mi GitHub!) |
| 📬 **Contacto** | Formulario y todas mis redes |

---

## 🧰 Stack técnico

```txt
Frontend    →  React 19 · JavaScript · CSS puro (sin frameworks 💪)
Animaciones →  anime.js 4
Build tool  →  Vite 8
Linter      →  Oxlint
Fuentes     →  Sora · Space Grotesk
```

---

## ⚡ Cómo levantarlo

> Necesitás [Node.js](https://nodejs.org) 18+ instalado.

```bash
# 1. Cloná el repo
git clone https://github.com/chanquiaelias8/portfolio.git
cd portfolio

# 2. Instalá las dependencias
npm install

# 3. Arrancá el servidor de desarrollo
npm run dev
```

Y listo 🎉 — abrí **http://localhost:5173** y a disfrutar.

### 📦 Otros comandos

```bash
npm run build     # Compila para producción (carpeta /dist)
npm run preview   # Previsualiza el build de producción
npm run lint      # Revisa el código con Oxlint
```

---

## 🗂️ Estructura del proyecto

```
portfolio/
├── public/                # Recursos estáticos (favicon)
└── src/
    ├── components/        # Cada sección con su .jsx + .css
    │   ├── Navbar
    │   ├── Hero
    │   ├── About
    │   ├── Skills
    │   ├── Experience
    │   ├── Projects
    │   ├── Contact
    │   └── Footer
    ├── hooks/
    │   └── useReveal.js    # Reveal reutilizable con anime.js 🪄
    ├── App.jsx            # Ensambla todas las secciones
    └── index.css          # Tema, colores y variables globales
```

> 💡 ¿Querés cambiar los colores? Todo vive en las variables `--grad-*` de [`src/index.css`](src/index.css).

---

## 📬 Contacto

<div align="center">

¿Un proyecto en mente? ¿Una oportunidad? ¡Hablemos! 👋

[![Email](https://img.shields.io/badge/Email-chanquiaelias8@gmail.com-EA4335?logo=gmail&logoColor=white)](mailto:chanquiaelias8@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-eliaschanquia-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/eliaschanquia/)
[![GitHub](https://img.shields.io/badge/GitHub-chanquiaelias8-181717?logo=github&logoColor=white)](https://github.com/chanquiaelias8)

</div>

---

<div align="center">

Hecho con 💜, React y anime.js por **Elias Chanquía**

⭐ Si te gustó, dejá una estrella al repo

</div>
