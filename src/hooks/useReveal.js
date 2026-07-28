import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

/**
 * Devuelve un ref. Cuando la sección entra en el viewport, anima con anime.js
 * todos los elementos con la clase `.reveal` que haya dentro (efecto escalonado).
 */
export function useReveal({ selector = ".reveal", y = 28, delay = 90 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll(selector);
    if (!targets.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const els = entry.target.querySelectorAll(selector);
          animate(els, {
            opacity: [0, 1],
            translateY: [y, 0],
            duration: 750,
            delay: stagger(delay),
            ease: "out(3)",
            onComplete: () => {
              // Quita el transform residual (translateY(0px)) para no dejar el
              // elemento en una capa compositada que rompa el texto con gradiente.
              els.forEach((el) => {
                el.style.transform = "none";
              });
            },
          });
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [selector, y, delay]);

  return ref;
}
