"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export default function TextReveal({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  stagger = 0.06,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, amount: 0.5 });

  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
    },
  };

  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.h2;

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={cn("flex flex-wrap gap-x-[0.25em]", className)}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
