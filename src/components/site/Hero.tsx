import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  // Parallax — background moves slower than content.
  // The scroll cue is excluded from the fade so it stays visible.
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
      // Scroll cue fades out quickly but independently — doesn't get stuck at 0
      if (scrollCueRef.current) {
        const cueFade = Math.max(0, 1 - y / 180);
        scrollCueRef.current.style.opacity = String(cueFade);
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
      <div className="absolute inset-0 bg-paws-dark opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/30 via-transparent to-navy-deep" />

      {/* Subtle glow accents */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-navy-soft/20 blur-[160px]" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 container-premium min-h-screen flex flex-col pt-24 pb-8"
      >
        <div className="flex-1 flex flex-col items-center justify-center text-center w-full mt-10 md:mt-0">
          {/* Brand mark */}
          <div className="mb-6 md:mb-8 flex flex-col items-center animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            <div className="relative inline-block mt-4 md:mt-6">
              <div className="absolute -inset-3 md:-inset-4 rounded-full border border-background/20" />
              <div className="absolute -inset-5 md:-inset-6 rounded-full border border-background/10" />
              <img src="/logo.png" alt="EQUIPET INTERNATIONAL" className="h-28 md:h-44 w-28 md:w-44 object-cover rounded-full ring-2 ring-background/30" />
            </div>
          </div>

          <h1
            className="heading-display text-background text-[clamp(2.2rem,7vw,5.5rem)] leading-[1.1] mb-6 text-balance animate-fade-up opacity-0 uppercase"
            style={{ animationDelay: "0.3s" }}
          >
            EQUIPET INTERNATIONAL
          </h1>

          {/* Animated underline accent */}
          <div className="relative h-px w-32 md:w-40 mb-8 overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent origin-center animate-underline-grow"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          <p
            className="text-background/75 text-base md:text-xl font-light tracking-[0.15em] uppercase mb-4 animate-fade-up opacity-0"
            style={{ animationDelay: "0.7s" }}
          >
            Premium Dog Chews <span className="text-accent">&</span> Treats
          </p>
          <p
            className="text-background/55 max-w-xl text-xs md:text-base mb-10 md:mb-12 animate-fade-up opacity-0 leading-relaxed px-4 md:px-0"
            style={{ animationDelay: "0.9s" }}
          >
            Manufacturing excellence and export-grade quality for distributors, wholesalers and importers across the globe.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 mb-8"
            style={{ animationDelay: "1.1s" }}
          >
            <a href="#contact" className="btn-premium bg-accent text-background hover:bg-accent/90">
              Contact Us
            </a>
          </div>
        </div>

        {/* Scroll cue — has its own ref so it doesn't get stuck at opacity:0 from parallax */}
        <div
          ref={scrollCueRef}
          className="mt-auto pt-4 flex flex-col items-center gap-3 text-background/50 animate-fade-in opacity-0"
          style={{ animationDelay: "1.5s" }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};
