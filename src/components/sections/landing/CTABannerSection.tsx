"use client";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";

export default function CTABannerSection() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-600 p-px">
          <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-violet-950/90 via-blue-950/90 to-cyan-950/90 px-8 py-20 text-center backdrop-blur-xl sm:px-16">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl" />
            </div>

            {/* Decorative orbs */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-violet-500/20 blur-3xl" />

            <ScrollReveal>
              <h2 className="relative font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                Ready to Build
                <br />
                Something Exceptional?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="relative mx-auto mt-6 max-w-xl text-lg text-white/70">
                Let's talk about your project. We'll respond within 24 hours.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href="/contact"
                  size="lg"
                  className="bg-white text-violet-900 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                  Start a Project
                </Button>
                <Button href="/portfolio" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                  See Our Work →
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
