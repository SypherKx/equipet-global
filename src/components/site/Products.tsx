import { ArrowUpRight } from "lucide-react";
import rawhide from "@/assets/product-rawhide.jpg";
import dental from "@/assets/product-dental.jpg";
import treats from "@/assets/product-treats.jpg";
import bones from "@/assets/product-bones.jpg";
import { useReveal } from "@/hooks/use-reveal";

const products = [
  {
    no: "01",
    title: "Natural Rawhide",
    desc: "Hand-rolled rawhide bones, sticks and pressed varieties — the global staple of the dog-chew category.",
    img: rawhide,
  },
  {
    no: "02",
    title: "Dental Chews",
    desc: "Functional chews engineered for plaque control and oral health, available in extruded and baked formats.",
    img: dental,
  },
  {
    no: "03",
    title: "Meat Treats & Jerky",
    desc: "Slow-dried protein strips, chicken and beef jerky lines — a premium tier for the discerning pet shelf.",
    img: treats,
  },
  {
    no: "04",
    title: "Twisted & Knotted",
    desc: "Twisted sticks, knotted bones and braided rolls in custom sizes for private-label distribution.",
    img: bones,
  },
];

export const Products = () => {
  const headRef = useReveal<HTMLDivElement>();
  return (
    <section id="products" className="relative py-28 md:py-40 bg-foreground text-background overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 diagonal-texture pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container-premium relative">
        <div ref={headRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow mb-5 text-background/60">Product Catalogue</div>
            <h2 className="heading-display text-background text-[clamp(2rem,5vw,3.75rem)] max-w-2xl text-balance">
              50+ products, built for the <em className="text-accent not-italic font-light">global shelf.</em>
            </h2>
            <p className="text-background/50 mt-4 max-w-lg text-sm leading-relaxed">
              Here's a glimpse of our range. We manufacture over 50 products across multiple categories — get in touch to explore the full catalogue.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-outline-premium self-start md:self-end flex items-center gap-2"
          >
            Contact Us <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-background/10">
          {products.map((p, i) => (
            <ProductCard key={p.title} {...p} delay={i * 80} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 border border-background/15 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-serif text-2xl md:text-3xl text-background mb-2">
              Looking for something specific?
            </div>
            <p className="text-background/50 text-sm max-w-md">
              Our catalogue includes 50+ products across rawhide, dental chews, jerky, twisted bones, equestrian gear and more — with custom sizing and private-label options.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-3 bg-accent text-foreground px-8 py-4 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-accent/90 transition-colors duration-300"
          >
            Contact Us
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
    <div ref={ref} className="group relative bg-foreground p-8 md:p-10 overflow-hidden">
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 sm:col-span-5 relative aspect-square overflow-hidden bg-navy-deep">
          <img
            src={img}
            alt={title}
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
            style={{ transitionTimingFunction: "var(--ease-premium)" }}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-background border border-background/40 px-4 py-2">
              View Brochure
            </span>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-7">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="text-accent text-xs tracking-[0.3em]">{no}</span>
            <span className="block flex-1 h-px bg-background/15" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-background mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-background/60 text-sm leading-relaxed mb-5 max-w-md">{desc}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-background/80 underline-grow"
          >
            Request specs <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
