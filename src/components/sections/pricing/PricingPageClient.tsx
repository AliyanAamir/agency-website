"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pricingTiers } from "@/data/pricing";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import Button from "@/components/ui/Button";
import { EASE_OUT_EXPO } from "@/config/animations";

export default function PricingPageClient() {
  const [yearly, setYearly] = useState(false);

  function formatPrice(p: number) {
    if (p === 0) return "Custom";
    return `$${p.toLocaleString()}`;
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-10 pt-36 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl">
          <motion.span
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          >
            <span className="h-1 w-1 rounded-full bg-violet-400" />
            Pricing
          </motion.span>
          <motion.h1
            className="mt-3 font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
          >
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </motion.h1>
          <motion.p
            className="mt-5 text-lg text-[var(--color-text-secondary)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE_OUT_EXPO }}
          >
            No hidden fees. No surprises. Just honest pricing for world-class work.
          </motion.p>

          {/* Toggle */}
          <motion.div
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-1.5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <button
              onClick={() => setYearly(false)}
              className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors"
              style={{ color: !yearly ? "#f0efff" : "#8b8ba7" }}
              data-cursor="hover"
            >
              {!yearly && (
                <motion.span
                  layoutId="billing-toggle"
                  className="absolute inset-0 rounded-full bg-violet-600"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">Monthly</span>
            </button>
            <button
              onClick={() => setYearly(true)}
              className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors"
              style={{ color: yearly ? "#f0efff" : "#8b8ba7" }}
              data-cursor="hover"
            >
              {yearly && (
                <motion.span
                  layoutId="billing-toggle"
                  className="absolute inset-0 rounded-full bg-violet-600"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">Yearly</span>
              <AnimatePresence>
                {yearly && (
                  <motion.span
                    className="absolute -right-2 -top-3 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                  >
                    -20%
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <StaggerContainer className="grid items-start gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.id}
                variants={staggerItem}
                className={`relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300 ${
                  tier.featured
                    ? "border-violet-500/50 bg-gradient-to-b from-violet-950/50 to-[var(--color-bg-surface)] shadow-[0_0_60px_rgba(124,58,237,0.15)]"
                    : "border-[var(--color-border)] bg-white/[0.02]"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -right-8 top-5 rotate-45 bg-gradient-to-r from-violet-600 to-blue-600 px-10 py-1 text-xs font-bold text-white">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <h3 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{tier.description}</p>

                  {/* Price */}
                  <div className="mt-6 flex items-end gap-1">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${tier.id}-${yearly ? "y" : "m"}`}
                        className="font-display text-5xl font-bold text-[var(--color-text-primary)]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {formatPrice(yearly ? tier.yearlyPrice : tier.monthlyPrice)}
                      </motion.span>
                    </AnimatePresence>
                    {(yearly ? tier.yearlyPrice : tier.monthlyPrice) > 0 && (
                      <span className="mb-2 text-sm text-[var(--color-text-muted)]">/mo</span>
                    )}
                  </div>
                </div>

                <Button
                  href="/contact"
                  variant={tier.featured ? "primary" : "outline"}
                  className="mt-6 w-full justify-center"
                >
                  {tier.cta}
                </Button>

                <ul className="mt-8 flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature.name}
                      className={`flex items-center gap-3 text-sm ${
                        feature.included
                          ? feature.highlight
                            ? "text-[var(--color-text-primary)]"
                            : "text-[var(--color-text-secondary)]"
                          : "text-[var(--color-text-muted)] line-through"
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 text-base ${
                          feature.included ? "text-emerald-400" : "text-[var(--color-text-muted)]"
                        }`}
                      >
                        {feature.included ? "✓" : "×"}
                      </span>
                      {feature.name}
                      {feature.highlight && feature.included && (
                        <span className="ml-auto rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-medium text-violet-300">
                          Pro
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ note */}
      <section className="pb-24 px-6">
        <ScrollReveal className="mx-auto max-w-2xl rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-8 text-center">
          <h3 className="font-display text-2xl font-semibold text-[var(--color-text-primary)]">
            Not sure which plan is right for you?
          </h3>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            Let&apos;s talk. We&apos;ll figure out exactly what you need and build a custom proposal — no
            pressure, no commitment.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="outline">
              Book a Free Discovery Call
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
