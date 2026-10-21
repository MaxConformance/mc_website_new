import { useEffect, useRef } from "react";
import { animate, motion, useInView, useScroll, useSpring, type Variants } from "framer-motion";

/** Thin brand-gradient bar showing page scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-navy-600 to-magenta-500"
    />
  );
}

/** Counts a value like "16+", "80%" or "24/7" up when it scrolls into view. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!inView || target === null || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => (node.textContent = Math.round(v) + suffix),
    });
    return () => controls.stop();
  }, [inView, target, suffix]);

  // "24/7" style values (suffix contains digits) are shown as-is.
  const animatable = target !== null && !/\d/.test(suffix);
  return (
    <span ref={ref} className={className}>
      {animatable ? 0 + suffix : value}
    </span>
  );
}

export const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/** Gentle endless float for decorative elements. */
export function Float({ children, className, distance = 10, duration = 5 }: {
  children: React.ReactNode; className?: string; distance?: number; duration?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

const orbs = [
  { cls: "bg-magenta-500/60 w-[22rem] h-[22rem] sm:w-[34rem] sm:h-[34rem] -top-32 -right-16 sm:-top-40 sm:-right-24", x: [0, -90, 40, 0], y: [0, 70, -30, 0], s: [1, 1.2, 0.95, 1], d: 18 },
  { cls: "bg-indigo-500/50 w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] -bottom-32 -left-16 sm:-bottom-48 sm:-left-24", x: [0, 100, -40, 0], y: [0, -60, 40, 0], s: [1, 0.9, 1.15, 1], d: 22 },
  { cls: "bg-pink-400/30 w-[14rem] h-[14rem] sm:w-[22rem] sm:h-[22rem] top-1/3 left-1/4", x: [0, 60, -80, 0], y: [0, 50, -50, 0], s: [1, 1.25, 0.9, 1], d: 26 },
];

/** Moving gradient backdrop for the hero: drifting blurred orbs over a slowly shifting gradient. */
export function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none" style={{ contain: "paint" }}>
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl mix-blend-screen ${o.cls}`}
          animate={{ x: o.x, y: o.y, scale: o.s }}
          transition={{ duration: o.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{ background: "conic-gradient(from 0deg at 70% 40%, transparent, rgba(184,35,111,0.35), transparent 40%, rgba(70,90,210,0.35), transparent)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
