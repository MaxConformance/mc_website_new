import { useEffect } from "react";
import { animate, inView } from "framer-motion";

// Scroll-reveal powered by framer-motion: elements with .reveal fade/slide in when they enter the
// viewport, staggered by their position among sibling .reveal elements.
export function useReveal(dep?: unknown) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    if (reduce) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const stops = els.map((el) => {
      const index = Array.from(el.parentElement?.children ?? []).filter((c) => c.classList.contains("reveal")).indexOf(el);
      return inView(
        el,
        () => {
          animate(
            el,
            { opacity: [0, 1], transform: ["translateY(24px) scale(0.98)", "translateY(0px) scale(1)"] },
            { duration: 0.6, delay: Math.min(index, 5) * 0.08, ease: [0.22, 1, 0.36, 1] },
          ).then(() => {
            el.classList.add("in");
            el.style.opacity = "";
            el.style.transform = "";
          });
        },
        { amount: 0.15 },
      );
    });
    return () => stops.forEach((stop) => stop());
  }, [dep]);
}
