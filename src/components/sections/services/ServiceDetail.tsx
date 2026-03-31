"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ServiceItem } from "@/types";
import { services } from "@/data/services";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/shared/ServiceCard";

export default function ServiceDetail({ service }: { service: ServiceItem }) {
  const related = services.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <div className="px-6 pb-28">
      <div className="mx-auto max-w-7xl">
        {/* Process */}
        <section className="py-20">
          <ScrollReveal>
            <span className="mb-10 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400">
              <span className="h-1 w-1 rounded-full bg-violet-400" />
              Our Process
            </span>
          </ScrollReveal>

          <div className="relative mt-8">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-violet-500/40 via-blue-500/30 to-transparent md:left-8" />

            <div className="flex flex-col gap-12">
              {service.process.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 0.1}>
                  <div className="relative flex gap-8 pl-16 md:pl-24">
                    {/* Step number */}
                    <div className="absolute left-0 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-violet-500/50 bg-[var(--color-bg-elevated)] md:h-16 md:w-16">
                      <span className="gradient-text font-display text-sm font-bold md:text-base">
                        {step.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[var(--color-text-secondary)]">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Deliverables */}
        <section className="grid gap-8 py-10 lg:grid-cols-2">
          <ScrollReveal>
            <GlassCard className="p-8">
              <h3 className="mb-6 font-display text-2xl font-semibold gradient-text">
                What's Included
              </h3>
              <ul className="flex flex-col gap-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <GlassCard className="p-8">
              <h3 className="mb-6 font-display text-2xl font-semibold gradient-text">
                Deliverables
              </h3>
              <ul className="flex flex-col gap-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                    <span className="mt-1 text-emerald-400">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>
        </section>

        {/* CTA */}
        <ScrollReveal className="py-12 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-lg text-[var(--color-text-secondary)]">
              Ready to get started with {service.title}?
            </p>
            <Button href="/contact" size="lg">
              Start a Project →
            </Button>
          </div>
        </ScrollReveal>

        {/* Related services */}
        {related.length > 0 && (
          <section className="border-t border-[var(--color-border)] pt-16">
            <ScrollReveal>
              <h3 className="mb-8 font-display text-2xl font-semibold text-[var(--color-text-primary)]">
                Related Services
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid gap-5 sm:grid-cols-2">
              {related.map((s) => (
                <motion.div key={s.slug} variants={staggerItem}>
                  <ServiceCard service={s} className="h-full" />
                </motion.div>
              ))}
            </StaggerContainer>
          </section>
        )}
      </div>
    </div>
  );
}
