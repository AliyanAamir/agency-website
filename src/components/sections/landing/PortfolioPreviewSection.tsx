"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioItems } from "@/data/portfolio";
import SectionHeader from "@/components/shared/SectionHeader";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import Button from "@/components/ui/Button";

export default function PortfolioPreviewSection() {
  const featured = portfolioItems.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-28 px-6 bg-[var(--color-bg-surface)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Our Work"
            title="Selected Projects"
            align="left"
          />
          <Button href="/portfolio" variant="outline" size="sm">
            View All →
          </Button>
        </div>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item, i) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className={i === 0 || i === 3 ? "sm:row-span-1 lg:col-span-2" : ""}
            >
              <Link
                href="/portfolio"
                className="group relative block h-64 overflow-hidden rounded-2xl"
                data-cursor="view"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="mb-1 block text-xs font-medium uppercase tracking-widest text-violet-400">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                </div>
                {/* Year badge */}
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-black/40 px-2.5 py-1 text-xs text-white/70 backdrop-blur-sm">
                    {item.year}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
