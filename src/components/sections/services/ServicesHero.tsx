"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/config/animations";

interface ServicesHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export default function ServicesHero({ title, description, eyebrow = "Services" }: ServicesHeroProps) {
  return (
    <section className="relative flex min-h-[50vh] items-end overflow-hidden px-6 pb-16 pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[400px] w-[600px] rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[300px] w-[400px] rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.span
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
        >
          <span className="h-1 w-1 rounded-full bg-violet-400" />
          {eyebrow}
        </motion.span>

        <motion.h1
          className="mt-3 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-[var(--color-text-primary)] md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: EASE_OUT_EXPO }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
