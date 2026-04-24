import factoryImg from "@/assets/about-factory.jpg";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { value: "1993", label: "Founded in Kanpur" },
  { value: "30+", label: "Years of Excellence" },
  { value: "2000", label: "Pet Division Launched" },
  { value: "Global", label: "Distribution Network" },
];

export const About = () => {
  const eyebrowRef = useReveal<HTMLDivElement>();
  const headingRef = useReveal<HTMLHeadingElement>({ delay: 80 });
  const textRef = useReveal<HTMLDivElement>({ delay: 200 });
  const imgRef = useReveal<HTMLDivElement>({ delay: 100 });

  return (
    <section id="about" className="relative py-28 md:py-40 bg-background">
      <div className="container-premium grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Image side */}
        <div ref={imgRef} className="lg:col-span-6 relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden bg-navy-deep">
            <img
              src={factoryImg}
              alt="Equipet International manufacturing facility"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              style={{ transitionTimingFunction: "var(--ease-premium)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
          </div>
          {/* Floating accent block */}
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-foreground text-background py-6 px-8 max-w-[260px] shadow-elegant">
            <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">Since 1993</div>
            <div className="font-serif text-xl leading-tight">
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

          <div ref={textRef} className="space-y-6 text-muted-foreground leading-relaxed max-w-xl">
            <p>
              In 1993, from the small city of Kanpur, founder late <span className="text-foreground font-medium">Mr Shahid Aslam</span> started with simple production of horse rugs from canvas fabric. His passion and the exceptional quality of those products soon created a name for itself — and <span className="text-foreground font-medium">Eastern Exports</span> was born.
            </p>
            <p>
              As demand grew, Eastern scaled from manual production to establishing several manufacturing facilities for equestrian clothing, rider gear, and horse products — becoming one of the first companies in Kanpur to manufacture horse rugs.
            </p>
            <p>
              In 2000, the company launched its <span className="text-foreground font-medium">pet products division</span>, designing a range that was special, strong, durable and completely new to the market. We let things take the time they need, because we want every product to be the best in quality.
            </p>
            <p>
              Our core values — <span className="text-foreground font-medium">innovation, quality, teamwork and respect</span> — have shaped our success for over three decades. Today, our team continues to bring innovative products to the equine and pet world, with a global network that turns imagination into creation.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border mt-12">
            {stats.map((s) => (
              <div key={s.label} className="bg-background p-5">
                <div className="font-serif text-3xl md:text-4xl text-foreground mb-1">{s.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
