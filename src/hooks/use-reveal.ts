import { useEffect, useRef } from "react";

/**
 * useReveal — adds reveal-on-scroll behaviour using IntersectionObserver.
 * Lightweight alternative to GSAP ScrollTrigger for a buttery, slow reveal.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(options?: {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = `opacity 1.1s var(--ease-premium) ${options?.delay ?? 0}ms, transform 1.1s var(--ease-premium) ${options?.delay ?? 0}ms`;
    el.style.willChange = "transform, opacity";

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            if (options?.once !== false) obs.unobserve(el);
          } else if (options?.once === false) {
            el.style.opacity = "0";
            el.style.transform = "translateY(28px)";
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px 0px -80px 0px",
      },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [options?.delay, options?.once, options?.rootMargin, options?.threshold]);

  return ref;
}
