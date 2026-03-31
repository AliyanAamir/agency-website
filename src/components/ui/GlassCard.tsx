import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = false,
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-[var(--color-border)] bg-white/[0.03] backdrop-blur-sm",
        hover &&
          "transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(124,58,237,0.12)]",
        glow && "shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]",
        className
      )}
    >
      {children}
    </div>
  );
}
