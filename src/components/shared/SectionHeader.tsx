import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleAs = "h2",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <ScrollReveal delay={0}>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400">
            <span className="h-1 w-1 rounded-full bg-violet-400" />
            {eyebrow}
          </span>
        </ScrollReveal>
      )}
      <TextReveal
        text={title}
        as={titleAs}
        className={cn(
          "font-display font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)]",
          "text-3xl sm:text-4xl md:text-5xl"
        )}
        delay={0.05}
      />
      {description && (
        <ScrollReveal delay={0.15}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
