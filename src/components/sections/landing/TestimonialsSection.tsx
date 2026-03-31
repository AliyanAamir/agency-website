"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/shared/TestimonialCard";
import SectionHeader from "@/components/shared/SectionHeader";

export default function TestimonialsSection() {
  // Duplicate for seamless infinite loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden py-28 px-6">
      <div className="mx-auto max-w-7xl mb-14">
        <SectionHeader
          eyebrow="Client Love"
          title="What Our Clients Say"
          description="Don't take our word for it — here's what the people we've worked with have to say."
        />
      </div>

      {/* Marquee */}
      <div className="group relative flex overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[var(--color-bg-base)] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[var(--color-bg-base)] to-transparent" />

        <motion.div
          className="flex gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ willChange: "transform" }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
