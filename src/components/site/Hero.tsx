import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Parallax — background moves slower than content.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(1.08)`;
      }
      if (contentRef.current) {
        const fade = Math.max(0, 1 - y / 600);
        contentRef.current.style.opacity = String(fade);
        contentRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-navy-deep">
      {/* Parallax background image layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transformOrigin: "center" }}
      >
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1280}
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-navy-radial opacity-95" />
      <div className="absolute inset-0 diagonal-texture" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/30 via-transparent to-navy-deep" />

      {/* Subtle glow accents */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-navy-soft/20 blur-[160px]" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 container-premium min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-20"
      >
        {/* Brand mark */}
        <div className="mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="block w-12 h-px bg-background/30" />
              <span className="text-[10px] uppercase tracking-[0.45em] text-background/70">
                Est · Worldwide Export
              </span>
              <span className="block w-12 h-px bg-background/30" />
            </div>
            <div className="relative">
              <div className="absolute -inset-3 rounded-full border border-background/20" />
              <div className="absolute -inset-5 rounded-full border border-background/10" />
              <img src="/logo.png" alt="Equipet International" className="h-28 md:h-36 w-28 md:w-36 object-cover rounded-full ring-2 ring-background/30" />
            </div>
          </div>
        </div>

        <h1
          className="heading-display text-background text-[clamp(3rem,9vw,7.5rem)] mb-6 text-balance animate-fade-up opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          Equipet International
        </h1>

        {/* Animated underline accent */}
        <div className="relative h-px w-40 mb-8 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent origin-center animate-underline-grow"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        <p
          className="text-background/75 text-lg md:text-xl font-light tracking-[0.15em] uppercase mb-3 animate-fade-up opacity-0"
          style={{ animationDelay: "0.7s" }}
        >
          Premium Dog Chews <span className="text-accent">&</span> Treats
        </p>
        <p
          className="text-background/55 max-w-xl text-sm md:text-base mb-12 animate-fade-up opacity-0"
          style={{ animationDelay: "0.9s" }}
        >
          Manufacturing excellence and export-grade quality for distributors, wholesalers and importers across the globe.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0"
          style={{ animationDelay: "1.1s" }}
        >
          <a href="#contact" className="btn-premium bg-accent text-background hover:bg-accent/90">
            Contact Us
          </a>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-background/50 animate-fade-in opacity-0" style={{ animationDelay: "1.5s" }}>
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};
