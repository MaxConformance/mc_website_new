import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import Header from "./Header";
import Footer from "./Footer";
import { useReveal } from "@/lib/useReveal";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  // Start every page at the top and (re)attach scroll-reveal observers.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useReveal(location);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1 pt-16 md:pt-[72px]">
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
