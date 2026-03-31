"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import { EASE_OUT_EXPO } from "@/config/animations";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormValues = z.infer<typeof schema>;

const services = ["Web Design & Development", "Brand Identity", "Digital Marketing", "SEO & Content", "Multiple Services"];
const budgets = ["$2,000 – $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+", "Not sure yet"];

const contactInfo = [
  { label: "Email", value: siteConfig.email, icon: "✉" },
  { label: "Phone", value: siteConfig.phone, icon: "☎" },
  { label: "Address", value: siteConfig.address, icon: "⌖" },
];

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormValues) {
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    console.log(data);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden px-6 pb-16 pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[400px] w-[500px] rounded-full bg-violet-600/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-[300px] w-[400px] rounded-full bg-blue-600/8 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.span
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          >
            <span className="h-1 w-1 rounded-full bg-violet-400" />
            Contact Us
          </motion.span>
          <motion.h1
            className="mt-3 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] as [number,number,number,number] }}
          >
            Let&apos;s Build Something <span className="gradient-text">Exceptional</span>
          </motion.h1>
          <motion.p
            className="mt-5 max-w-md text-lg leading-relaxed text-[var(--color-text-secondary)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT_EXPO }}
          >
            Tell us about your project. We&apos;ll respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_380px]">
          {/* Form */}
          <ScrollReveal>
            <GlassCard className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-12 text-center"
                  >
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-4xl">
                      ✓
                    </div>
                    <h3 className="font-display text-3xl font-bold text-[var(--color-text-primary)]">
                      Message Sent!
                    </h3>
                    <p className="mt-3 text-[var(--color-text-secondary)]">
                      Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--color-text-secondary)]">
                          Full Name <span className="text-violet-400">*</span>
                        </label>
                        <motion.div
                          animate={{
                            borderColor: focusedField === "name"
                              ? "rgba(124,58,237,0.6)"
                              : errors.name
                              ? "rgba(239,68,68,0.6)"
                              : "rgba(255,255,255,0.07)",
                          }}
                          className="rounded-xl border bg-white/[0.03] transition-colors"
                        >
                          <input
                            {...register("name")}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Alex Rivera"
                            className="w-full bg-transparent px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none"
                          />
                        </motion.div>
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--color-text-secondary)]">
                          Email <span className="text-violet-400">*</span>
                        </label>
                        <motion.div
                          animate={{
                            borderColor: focusedField === "email"
                              ? "rgba(124,58,237,0.6)"
                              : errors.email
                              ? "rgba(239,68,68,0.6)"
                              : "rgba(255,255,255,0.07)",
                          }}
                          className="rounded-xl border bg-white/[0.03] transition-colors"
                        >
                          <input
                            {...register("email")}
                            type="email"
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="alex@company.com"
                            className="w-full bg-transparent px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none"
                          />
                        </motion.div>
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[var(--color-text-secondary)]">
                        Company <span className="text-[var(--color-text-muted)]">(optional)</span>
                      </label>
                      <motion.div
                        animate={{
                          borderColor: focusedField === "company"
                            ? "rgba(124,58,237,0.6)"
                            : "rgba(255,255,255,0.07)",
                        }}
                        className="rounded-xl border bg-white/[0.03]"
                      >
                        <input
                          {...register("company")}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Acme Inc."
                          className="w-full bg-transparent px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none"
                        />
                      </motion.div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* Service */}
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--color-text-secondary)]">
                          Service <span className="text-violet-400">*</span>
                        </label>
                        <div className="rounded-xl border border-[var(--color-border)] bg-white/[0.03]">
                          <select
                            {...register("service")}
                            className="w-full bg-transparent px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none"
                          >
                            <option value="" className="bg-[#0d0d1c]">Select a service</option>
                            {services.map((s) => (
                              <option key={s} value={s} className="bg-[#0d0d1c]">{s}</option>
                            ))}
                          </select>
                        </div>
                        {errors.service && (
                          <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>
                        )}
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--color-text-secondary)]">
                          Budget <span className="text-violet-400">*</span>
                        </label>
                        <div className="rounded-xl border border-[var(--color-border)] bg-white/[0.03]">
                          <select
                            {...register("budget")}
                            className="w-full bg-transparent px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none"
                          >
                            <option value="" className="bg-[#0d0d1c]">Select a range</option>
                            {budgets.map((b) => (
                              <option key={b} value={b} className="bg-[#0d0d1c]">{b}</option>
                            ))}
                          </select>
                        </div>
                        {errors.budget && (
                          <p className="mt-1 text-xs text-red-400">{errors.budget.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[var(--color-text-secondary)]">
                        Project Details <span className="text-violet-400">*</span>
                      </label>
                      <motion.div
                        animate={{
                          borderColor: focusedField === "message"
                            ? "rgba(124,58,237,0.6)"
                            : errors.message
                            ? "rgba(239,68,68,0.6)"
                            : "rgba(255,255,255,0.07)",
                        }}
                        className="rounded-xl border bg-white/[0.03]"
                      >
                        <textarea
                          {...register("message")}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          rows={5}
                          placeholder="Tell us about your project, goals, and timeline..."
                          className="w-full resize-none bg-transparent px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none"
                        />
                      </motion.div>
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </span>
                      ) : (
                        "Send Message →"
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </ScrollReveal>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <StaggerContainer className="flex flex-col gap-5">
              {contactInfo.map((info) => (
                <motion.div key={info.label} variants={staggerItem}>
                  <GlassCard className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-lg">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                          {info.label}
                        </p>
                        <p className="mt-1 text-sm text-[var(--color-text-primary)]">{info.value}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </StaggerContainer>

            {/* Social links */}
            <ScrollReveal delay={0.3}>
              <GlassCard className="p-5">
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {Object.entries(siteConfig.social).map(([platform, href]) => (
                    <a
                      key={platform}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-xs font-medium uppercase text-[var(--color-text-secondary)] transition-all hover:border-violet-500/50 hover:text-white"
                      data-cursor="hover"
                    >
                      {platform.slice(0, 2)}
                    </a>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Response time note */}
            <ScrollReveal delay={0.4}>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
                <p className="text-sm text-emerald-400">
                  ⚡ We typically respond within 2–4 business hours
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
