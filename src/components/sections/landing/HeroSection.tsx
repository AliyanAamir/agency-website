"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { EASE_OUT_EXPO } from "@/config/animations";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial glow top center */}
        <div className="absolute left-1/2 top-0 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-600/20 via-blue-600/10 to-transparent blur-3xl" />
        {/* Secondary glow bottom */}
        <div className="absolute bottom-0 right-0 h-[40vh] w-[50vw] rounded-full bg-blue-600/10 blur-3xl" />
        {/* Mesh grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new projects
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden">
          <motion.h1
            className="max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[6rem]"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          >
            We Build{" "}
            <span className="gradient-text">Digital Experiences</span>
            <br />
            That{" "}
            <span className="relative">
              Elevate
              <motion.span
                className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-violet-500 to-blue-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: EASE_OUT_EXPO }}
                style={{ transformOrigin: "left" }}
              />
            </span>{" "}
            Brands
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE_OUT_EXPO }}
        >
          Strategy-first design agency crafting websites, brands, and marketing systems for companies
          that want to lead — not follow.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE_OUT_EXPO }}
        >
          <Button href="/contact" size="lg">
            Start a Project
          </Button>
          <Button href="/portfolio" variant="outline" size="lg">
            View Our Work →
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          className="mt-14 flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex -space-x-2">
            {["1", "2", "3", "4"].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border-2 border-[var(--color-bg-base)] bg-gradient-to-br from-violet-400 to-blue-400"
              />
            ))}
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Trusted by{" "}
            <span className="font-semibold text-[var(--color-text-primary)]">40+ companies</span>{" "}
            worldwide
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
          Scroll
        </span>
        <motion.div
          className="h-10 w-px bg-gradient-to-b from-violet-500 to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
