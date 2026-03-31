"use client";
import { stats } from "@/data/stats";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      {/* Background band */}
      <div className="absolute inset-0 bg-[var(--color-bg-surface)]" />
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} className="flex flex-col items-center text-center">
              <span className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  className="gradient-text"
                />
              </span>
              <span className="mt-2 text-sm text-[var(--color-text-secondary)]">{stat.label}</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
