import factoryImg from "@/assets/about-factory.jpg";
import { useReveal } from "@/hooks/use-reveal";



export const About = () => {
  const eyebrowRef = useReveal<HTMLDivElement>();
  const headingRef = useReveal<HTMLHeadingElement>({ delay: 80 });
  const textRef = useReveal<HTMLDivElement>({ delay: 200 });
  const imgRef = useReveal<HTMLDivElement>({ delay: 100 });

  return (
    <section id="about" className="relative pt-16 pb-24 md:pt-20 md:pb-32 bg-background">
      <div className="container-premium grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Image side */}
        <div ref={imgRef} className="lg:col-span-6 relative order-2 lg:order-1 pb-10 md:pb-0">
          <div className="relative aspect-[4/5] overflow-hidden bg-navy-deep">
            <img
              src={factoryImg}
              alt="Equipet International manufacturing facility in Kanpur, India"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              style={{ transitionTimingFunction: "var(--ease-premium)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
          </div>
          {/* Floating accent block — offset adjusted so it doesn't clip on mobile */}
          <div className="absolute bottom-0 right-0 md:-bottom-8 md:-right-8 bg-foreground text-background py-5 px-7 max-w-[220px] md:max-w-[260px] shadow-elegant">
            <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">Since 2005</div>
            <div className="font-serif text-lg md:text-xl leading-tight">
              From Kanpur to the world
            </div>
          </div>
          {/* Corner accent */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border-l border-t border-accent/60" />
        </div>

        {/* Text side */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div ref={eyebrowRef} className="eyebrow mb-6">Our Story</div>
          <h2
            ref={headingRef}
            className="heading-display text-foreground text-[clamp(2rem,5vw,3.75rem)] mb-8 text-balance"
          >
            A legacy of craft,<br />
            built on <em className="text-accent not-italic font-light">values.</em>
          </h2>

          <div ref={textRef} className="space-y-6 text-muted-foreground leading-relaxed max-w-xl text-sm md:text-base">
            <p className="text-foreground font-medium text-base md:text-lg">
              Equipet International is built on a foundation of legacy, experience, and a forward-looking vision.
            </p>
            <p>
              Our journey dates back to 2005, when <span className="text-foreground font-medium">Late Mr. Tariq Lari</span> began his work in manufacturing with a strong focus on craftsmanship, discipline, and quality. What started as a hands-on manufacturing practice gradually evolved into years of deep industry expertise, setting strong roots in the field.
            </p>
            <p>
              Over time, this experience was refined, expanded, and carried forward to meet modern global demands. With a new vision to take this expertise beyond traditional boundaries, Equipet International was established — transforming years of knowledge into a brand focused on international markets.
            </p>
            <p>
              Today, we specialize in premium natural dog chews, treats, and pet products, combining traditional manufacturing strength with modern quality standards. Every product reflects our commitment to:
            </p>
            <ul className="list-none space-y-2 pl-5 border-l-2 border-accent/40 text-foreground/80">
              <li>• Consistent quality and safety</li>
              <li>• Ethical and responsible sourcing</li>
              <li>• Precision-driven manufacturing</li>
              <li>• Global compliance and expectations</li>
            </ul>
            <p>
              At Equipet International, we are not just creating products — we are continuing a legacy, built on years of dedication and evolving it into a brand trusted across borders.
            </p>
            <p className="text-foreground italic font-medium">
              From experience to excellence, from roots to global reach — this is Equipet International.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
