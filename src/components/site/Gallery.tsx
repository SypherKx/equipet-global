import { useEffect, useState } from "react";
import { X } from "lucide-react";
import warehouse from "@/assets/gallery-warehouse.jpg";
import quality from "@/assets/gallery-quality.jpg";
import packaging from "@/assets/gallery-packaging.jpg";
import exportImg from "@/assets/gallery-export.jpg";
import factory from "@/assets/about-factory.jpg";
import rawhide from "@/assets/product-rawhide.jpg";
import { useReveal } from "@/hooks/use-reveal";

interface GalleryItem {
  src: string;
  alt: string;
  h: string;
}

const items: GalleryItem[] = [
  { src: warehouse, alt: "Warehouse & cold storage facility", h: "row-span-2" },
  { src: quality, alt: "Quality control inspection process", h: "" },
  { src: factory, alt: "Production line at Kanpur facility", h: "" },
  { src: packaging, alt: "Export-grade packaging operations", h: "" },
  { src: exportImg, alt: "Container loading for global export", h: "row-span-2" },
  { src: rawhide, alt: "Natural rawhide chew product detail", h: "" },
];

export const Gallery = () => {
  const headRef = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="relative py-16 md:py-24 bg-background bg-paws">
      <div className="container-premium">
        <div ref={headRef} className="max-w-2xl mb-16">
          <div className="eyebrow mb-5">Inside the Operation</div>
          <h2 className="heading-display text-foreground text-[clamp(2rem,5vw,3.75rem)] text-balance">
            From factory floor to <em className="text-accent not-italic font-light">freight forwarders.</em>
          </h2>
        </div>

        {/* Masonry-ish grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <GalleryTile key={i} {...it} delay={i * 60} onOpen={() => setOpen(it)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] bg-navy-deep/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 animate-fade-in"
          style={{ animationDuration: "0.4s" }}
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Close gallery lightbox"
            className="absolute top-6 right-6 text-background/80 hover:text-background transition-colors"
          >
            <X size={28} />
          </button>
          <img
            src={open.src}
            alt={open.alt}
            className="max-w-[92vw] max-h-[80vh] object-contain shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 text-background/60 text-[11px] uppercase tracking-[0.3em] text-center">
            {open.alt}
          </p>
        </div>
      )}
    </section>
  );
};

const GalleryTile = ({
  src, alt, h, delay, onOpen,
}: { src: string; alt: string; h: string; delay: number; onOpen: () => void }) => {
  const ref = useReveal<HTMLButtonElement>({ delay });
  return (
    <button
      ref={ref}
      onClick={onOpen}
      aria-label={`View: ${alt}`}
      className={`group relative overflow-hidden bg-navy-deep cursor-pointer ${h}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
        style={{ transitionTimingFunction: "var(--ease-premium)" }}
      />
      <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/30 transition-colors duration-700" />
      <div className="absolute bottom-3 left-4 text-background opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 text-[10px] uppercase tracking-[0.25em]">
        {alt}
      </div>
    </button>
  );
};
