"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import { timelineEvents, values } from "@/data/about";
import { stats } from "@/data/stats";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { EASE_OUT_EXPO } from "@/config/animations";

export default function AboutPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden px-6 pb-16 pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.span
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          >
            <span className="h-1 w-1 rounded-full bg-violet-400" />
            About Us
          </motion.span>
          <motion.h1
            className="mt-3 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] as [number,number,number,number] }}
          >
            We&apos;re Obsessed With{" "}
            <span className="gradient-text">Making You Exceptional</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT_EXPO }}
          >
            Founded in 2016, Nexus Studio is a team of 20 creatives, strategists, and engineers
            building digital experiences that matter.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-[var(--color-bg-surface)] py-16 px-6">
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} className="flex flex-col items-center text-center">
              <span className="font-display text-4xl font-bold sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} className="gradient-text" />
              </span>
              <span className="mt-2 text-sm text-[var(--color-text-secondary)]">{stat.label}</span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Our Values" title="What Drives Us Every Day" className="mb-14" />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div key={value.title} variants={staggerItem}>
                <GlassCard hover className="h-full p-7">
                  <div className="mb-4 text-3xl">{value.icon}</div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-[var(--color-text-primary)]">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {value.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[var(--color-bg-surface)] py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Team"
            title="Meet the People Behind the Magic"
            description="A diverse group united by a shared obsession: making your brand exceptional."
            className="mb-14"
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={staggerItem}>
                <div className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white/[0.02]">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-base)] via-transparent to-transparent" />
                  </div>
                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-violet-400">{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {member.bio}
                    </p>
                    <div className="mt-4 flex gap-2">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[var(--color-text-muted)] transition-colors hover:text-violet-400"
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[var(--color-text-muted)] transition-colors hover:text-violet-400"
                        >
                          Twitter
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Our Story" title="How We Got Here" className="mb-16" />
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-violet-500/60 via-blue-500/40 to-transparent sm:left-1/2" />
            <div className="flex flex-col gap-12">
              {timelineEvents.map((event, i) => (
                <ScrollReveal
                  key={event.year}
                  direction={i % 2 === 0 ? "left" : "right"}
                  delay={0.1}
                  className={`relative flex w-full ${i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
                >
                  <div className={`relative w-full sm:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "sm:pr-10" : "sm:pl-10"} pl-8 sm:pl-0`}>
                    {/* Dot */}
                    <div className={`absolute top-3 ${i % 2 === 0 ? "-left-2 sm:left-auto sm:-right-[2.25rem]" : "-left-2 sm:-left-[2.25rem]"} h-4 w-4 rounded-full border-2 border-violet-500 bg-[var(--color-bg-base)]`} />
                    <GlassCard className="p-6">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-violet-400">
                        {event.year}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                        {event.description}
                      </p>
                    </GlassCard>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6 text-center">
        <ScrollReveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-bold text-[var(--color-text-primary)] md:text-5xl">
            Want to work with us?
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            We&apos;re selective about the clients we take on — which means when we work together, you
            get our full attention.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Get in Touch →
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
