import React, { useEffect, useState, useRef } from "react";
import { PawPrint } from "lucide-react";

export const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device is mobile/touch
    const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    if (isTouch) return;

    const updateMousePos = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Direct update for zero lag
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`;
      }

      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };

    window.addEventListener("mousemove", updateMousePos);

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
    };
  }, [isPointer]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference will-change-transform hidden md:block"
      style={{
        transition: "transform 0.1s ease-out", // Very short transition only for the SCALE effect
      }}
    >
      <PawPrint
        size={24}
        className="text-accent"
        strokeWidth={1.5}
        style={{ transform: "scaleX(-1)" }}
      />
    </div>
  );
};
