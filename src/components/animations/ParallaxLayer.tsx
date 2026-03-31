"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  offset?: any;
}

export default function ParallaxLayer({
  children,
  className,
  speed = 0.5,
  offset = ["start end", "end start"],
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
