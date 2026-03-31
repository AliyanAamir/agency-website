import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex w-[380px] flex-shrink-0 flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-white/[0.03] p-7",
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-amber-400 text-sm">★</span>
        ))}
      </div>

      <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 border-t border-[var(--color-border)] pt-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">
            {testimonial.author}
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
