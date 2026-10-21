import { motion } from "framer-motion";

/** Two-column page hero: copy on the left, a free-form illustration on the right. */
export default function PageHero({ title, text, visual, children }: {
  title: React.ReactNode; text: React.ReactNode; visual: React.ReactNode; children?: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
      <motion.div
        className="text-center lg:text-left"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">{title}</h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">{text}</p>
        {children && <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">{children}</div>}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {visual}
      </motion.div>
    </div>
  );
}
