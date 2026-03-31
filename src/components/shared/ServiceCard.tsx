"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/types";

interface ServiceCardProps {
  service: ServiceItem;
  variant?: "compact" | "full";
  className?: string;
}

export default function ServiceCard({ service, variant = "compact", className }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.slug}`} data-cursor="hover">
      <motion.div
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white/[0.03] p-7 transition-all duration-300",
          "hover:border-violet-500/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]",
          className
        )}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Glow on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-2xl">
            {service.icon}
          </div>

          <h3 className="mb-2 font-display text-xl font-semibold text-[var(--color-text-primary)] transition-colors group-hover:text-white">
            {service.title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {service.shortDescription}
          </p>

          {variant === "full" && (
            <ul className="mb-5 flex flex-col gap-2">
              {service.features.slice(0, 4).map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                  <span className="h-1 w-1 rounded-full bg-violet-400" />
                  {f}
                </li>
              ))}
            </ul>
          )}

          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 transition-all group-hover:gap-3">
            Explore
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
