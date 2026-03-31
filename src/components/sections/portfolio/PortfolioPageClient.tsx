"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { EASE_OUT_EXPO } from "@/config/animations";
import Button from "@/components/ui/Button";

export default function PortfolioPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden px-6 pb-16 pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[400px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.span
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          >
            <span className="h-1 w-1 rounded-full bg-violet-400" />
            Portfolio
          </motion.span>
          <motion.h1
            className="mt-3 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] as [number,number,number,number] }}
          >
            Work That <span className="gradient-text">Speaks</span> For Itself
          </motion.h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="px-6 pb-28 pt-4">
        <div className="mx-auto max-w-7xl">
          {/* Filter Bar */}
          <ScrollReveal className="mb-10">
            <div className="flex flex-wrap gap-2">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  data-cursor="hover"
                  className="relative overflow-hidden rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300"
                  style={{
                    borderColor: activeCategory === cat ? "rgba(124,58,237,0.6)" : "rgba(255,255,255,0.07)",
                    color: activeCategory === cat ? "#f0efff" : "#8b8ba7",
                    background: activeCategory === cat ? "rgba(124,58,237,0.15)" : "transparent",
                  }}
                >
                  {activeCategory === cat && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-violet-500/10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <motion.div
            layout
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                >
                  <div
                    className="group relative h-72 cursor-none overflow-hidden rounded-2xl"
                    data-cursor="view"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

                    <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-6 transition-transform duration-300 group-hover:translate-y-0">
                      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-violet-400">
                        {item.category} · {item.year}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1.5 text-sm text-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {item.client}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-20 text-center text-[var(--color-text-muted)]">No projects found.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6 text-center">
        <ScrollReveal className="mx-auto max-w-xl">
          <p className="text-lg text-[var(--color-text-secondary)]">
            Like what you see? Let&apos;s build something together.
          </p>
          <div className="mt-6">
            <Button href="/contact" size="lg">
              Start a Project →
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
