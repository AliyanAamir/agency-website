"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/config/site";
import LogoMark from "@/components/shared/LogoMark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.06] bg-[#070711]/80 py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <LogoMark />

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                )}
                data-cursor="hover"
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-violet-500 to-blue-500"
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full border border-violet-500/50 bg-gradient-to-r from-violet-600/20 to-blue-600/20 px-5 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-all duration-300 hover:border-violet-400 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              data-cursor="hover"
            >
              <span className="relative z-10">Let's Talk</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet-600 to-blue-600 transition-transform duration-300 group-hover:translate-x-0" />
              <span className="absolute inset-0 z-10 flex items-center justify-center text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Let's Talk
              </span>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <motion.span
              className="h-px w-6 bg-white origin-center block"
              animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="h-px w-6 bg-white block"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-px w-6 bg-white origin-center block"
              animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#070711] px-8 lg:hidden"
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 48px) 40px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 48px) 40px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 48px) 40px)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 text-4xl font-display font-semibold tracking-tight text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-3 text-lg font-semibold text-white"
                >
                  Let's Talk
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
