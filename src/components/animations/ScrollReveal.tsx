"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

function getInitial(direction: Direction, distance: number) {
  switch (direction) {
    case "up": return { opacity: 0, y: distance };
    case "down": return { opacity: 0, y: -distance };
    case "left": return { opacity: 0, x: distance };
    case "right": return { opacity: 0, x: -distance };
    case "none": return { opacity: 0 };
  }
}

export default function ScrollReveal({
  children,
  className,
  direction = "up",
  distance = 40,
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={getInitial(direction, distance)}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : getInitial(direction, distance)}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
