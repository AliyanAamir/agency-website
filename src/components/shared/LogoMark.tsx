import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LogoMark({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      {/* Geometric mark */}
      <div className="relative h-8 w-8 flex-shrink-0">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 opacity-90 transition-opacity group-hover:opacity-100" />
        <div className="absolute inset-[2px] rounded-[6px] bg-[var(--color-bg-base)]" />
        <div className="absolute inset-[5px] rounded-[4px] bg-gradient-to-br from-violet-400 to-cyan-400" />
      </div>
      <span className="font-display text-[1.1rem] font-semibold tracking-tight text-[var(--color-text-primary)]">
        Nexus<span className="gradient-text">Studio</span>
      </span>
    </Link>
  );
}
