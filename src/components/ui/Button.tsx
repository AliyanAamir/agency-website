"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MagneticWrap from "@/components/animations/MagneticWrap";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const sizeClasses = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      href,
      className,
      onClick,
      type = "button",
      disabled,
      external,
    },
    ref
  ) => {
    const baseClasses = cn(
      "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070711]",
      sizeClasses[size],
      variant === "primary" &&
        "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-[0_0_30px_rgba(124,58,237,0.25)] hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]",
      variant === "outline" &&
        "border border-[var(--color-border-strong)] bg-white/[0.03] text-[var(--color-text-primary)] backdrop-blur-sm hover:border-violet-500/60 hover:bg-white/[0.06]",
      variant === "ghost" &&
        "text-[var(--color-text-secondary)] hover:bg-white/[0.05] hover:text-[var(--color-text-primary)]",
      disabled && "cursor-not-allowed opacity-50",
      className
    );

    const content = (
      <motion.span
        className="relative z-10 flex items-center gap-2"
        whileTap={{ scale: 0.97 }}
      >
        {/* Shine sweep on primary */}
        {variant === "primary" && (
          <motion.span
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            whileHover={{ translateX: "200%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
        {children}
      </motion.span>
    );

    if (href) {
      return (
        <MagneticWrap strength={0.25}>
          <Link
            href={href}
            className={baseClasses}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            data-cursor="hover"
          >
            {content}
          </Link>
        </MagneticWrap>
      );
    }

    return (
      <MagneticWrap strength={0.25}>
        <button
          ref={ref}
          type={type}
          className={baseClasses}
          onClick={onClick}
          disabled={disabled}
          data-cursor="hover"
        >
          {content}
        </button>
      </MagneticWrap>
    );
  }
);

Button.displayName = "Button";
export default Button;
