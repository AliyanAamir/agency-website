"use client";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ParallaxLayer from "@/components/animations/ParallaxLayer";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/animations/TextReveal";

export default function AboutTeaserSection() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Text */}
        <div>
          <ScrollReveal delay={0}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400">
              <span className="h-1 w-1 rounded-full bg-violet-400" />
              About Us
            </span>
          </ScrollReveal>

          <TextReveal
            text="We're a team of obsessive creators, strategists, and builders."
            as="h2"
            className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] md:text-5xl"
            delay={0.05}
          />

          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">
              Founded in 2016, Nexus Studio has spent nearly a decade helping ambitious brands build
              their digital edge. We don't just make things look good — we make them perform.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              {["Strategy-first", "Data-driven", "Human-centered"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--color-border)] bg-white/[0.03] px-4 py-1.5 text-sm text-[var(--color-text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-10">
              <Button href="/about" variant="outline">
                Meet the Team →
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Visual */}
        <ParallaxLayer speed={0.3} className="relative">
          <div className="relative h-[500px] overflow-hidden rounded-3xl border border-[var(--color-border)]">
            {/* Abstract visual */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-[var(--color-bg-surface)] to-blue-900/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-64 w-64">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border border-violet-500/20"
                    style={{ transform: `scale(${1 + i * 0.35})` }}
                  />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 blur-xl opacity-60" />
                  <div className="absolute h-16 w-16 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400" />
                </div>
              </div>
            </div>
            {/* Floating stats */}
            <div className="absolute bottom-6 left-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/80 px-5 py-3 backdrop-blur-sm">
              <p className="text-xs text-[var(--color-text-muted)]">Years active</p>
              <p className="font-display text-2xl font-bold gradient-text">8+</p>
            </div>
            <div className="absolute right-6 top-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/80 px-5 py-3 backdrop-blur-sm">
              <p className="text-xs text-[var(--color-text-muted)]">Team members</p>
              <p className="font-display text-2xl font-bold gradient-text">20</p>
            </div>
          </div>
        </ParallaxLayer>
      </div>
    </section>
  );
}
