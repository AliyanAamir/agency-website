"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const ringX = useSpring(dotX, { stiffness: 200, damping: 25, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 200, damping: 25, mass: 0.5 });

  const ringScale = useMotionValue(1);
  const ringScaleSpring = useSpring(ringScale, { stiffness: 300, damping: 25 });

  const labelRef = useRef<string>("");

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    }

    function onMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const cursor = target.closest("[data-cursor]");
      if (cursor) {
        const type = cursor.getAttribute("data-cursor");
        if (type === "hover") ringScale.set(1.8);
        else if (type === "view") ringScale.set(2.5);
        else ringScale.set(1);
      } else {
        ringScale.set(1);
      }
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [dotX, dotY, ringScale]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="custom-cursor pointer-events-none fixed z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400"
        style={{ left: dotX, top: dotY }}
      />
      {/* Ring */}
      <motion.div
        className="custom-cursor pointer-events-none fixed z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/50"
        style={{ left: ringX, top: ringY, scale: ringScaleSpring }}
      />
    </>
  );
}
