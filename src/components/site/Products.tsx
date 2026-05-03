import { Link } from "react-router-dom";
import { ArrowUpRight, Download } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

import img01 from "@/products/WhatsApp Image 2026-05-03 at 15.26.25.jpeg";
import img05 from "@/products/WhatsApp Image 2026-05-03 at 15.26.27.jpeg";
import img14 from "@/products/WhatsApp Image 2026-05-03 at 15.26.33.jpeg";
import img25 from "@/products/WhatsApp Image 2026-05-03 at 15.26.38 (1).jpeg";

const products = [
  {
    no: "01",
    title: "Tripe",
    desc: "Premium dried tripe — a natural, nutrient-rich chew loved by dogs worldwide.",
    img: img01,
  },
  {
    no: "02",
    title: "Pizzle",
    desc: "High-protein bully sticks, slow-dried for long-lasting chewing satisfaction.",
    img: img05,
  },
  {
    no: "03",
    title: "Tendon",
    desc: "Natural beef tendon sticks — a healthy, easily digestible chew for all breeds.",
    img: img14,
  },
  {
    no: "04",
    title: "Braided Skin",
    desc: "Braided rawhide-free skin chews in custom sizes for private-label distribution.",
    img: img25,
  },
];

export const Products = () => {
  const headRef = useReveal<HTMLDivElement>();
  return (
    <section id="products" className="relative py-16 md:py-24 bg-foreground text-background overflow-hidden bg-paws-dark">
      {/* Subtle texture */}
      <div className="absolute inset-0 diagonal-texture pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container-premium relative">
        <div ref={headRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow mb-5 text-background/60">Product Catalogue</div>
            <h2 className="heading-display text-background text-[clamp(2rem,5vw,3.75rem)] max-w-2xl text-balance">
              Products, built for the <em className="text-accent not-italic font-light">global shelf.</em>
            </h2>
            <p className="text-background/50 mt-4 max-w-lg text-sm leading-relaxed">
              Here's a glimpse of our range. We manufactur Products across multiple categories — get in touch to explore the full catalogue.
            </p>
          </div>
          <Link
            to="/products"
            className="btn-outline-premium self-start md:self-end flex items-center gap-2"
          >
            View All <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-px bg-background/10">
          {products.map((p, i) => (
            <ProductCard key={p.title} {...p} delay={i * 80} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-accent text-foreground px-8 py-4 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-accent/90 transition-colors duration-300 w-full sm:w-auto justify-center"
          >
            View All Products
          </Link>
          <a
            href="/catalogue.pdf"
            download
            className="inline-flex items-center gap-3 bg-transparent text-background border border-background/20 px-8 py-4 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-background hover:text-foreground transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Download Catalogue <Download size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({
  no, title, desc, img, delay,
}: {
  no: string; title: string; desc: string; img: string; delay: number;
}) => {
  const ref = useReveal<HTMLDivElement>({ delay });
  return (
    <div ref={ref} className="group relative bg-foreground bg-paws-dark p-4 md:p-10 overflow-hidden flex flex-col justify-center">
      <div className="flex flex-col xl:grid xl:grid-cols-12 gap-4 xl:gap-6 items-center">
        <div className="w-full xl:col-span-5 relative aspect-square overflow-hidden bg-navy-deep">
          <img
            src={img}
            alt={title}
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
            style={{ transitionTimingFunction: "var(--ease-premium)" }}
          />
        </div>

        <div className="w-full xl:col-span-7 flex flex-col">
          <div className="flex items-baseline gap-2 md:gap-4 mb-2 md:mb-3">
            <span className="text-accent text-[10px] md:text-xs tracking-[0.3em]">{no}</span>
            <span className="block flex-1 h-px bg-background/15" />
          </div>
          <h3 className="font-serif text-base md:text-2xl lg:text-3xl text-background mb-4 leading-tight">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};
