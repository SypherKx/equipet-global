import { Navbar } from "@/components/site/Navbar";
import { Contact } from "@/components/site/Contact";
import { useReveal } from "@/hooks/use-reveal";
import { useEffect } from "react";

const certifications = [
  { 
    title: "ISO Certification", 
    src: "/certifications/certification-1.png", 
    desc: "International standard for quality management systems." 
  },
  { 
    title: "HACCP Certification", 
    src: "/certifications/haccp-certification.png", 
    desc: "Hazard Analysis and Critical Control Points for food safety." 
  },
  { 
    title: "IEC Certification", 
    src: "/certifications/iec-certification.png", 
    desc: "Import Export Code issued by the Directorate General of Foreign Trade." 
  },
];

const Certifications = () => {
  const headRef = useReveal<HTMLDivElement>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 bg-navy-deep text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-paws-dark opacity-30" />
        <div className="container-premium relative z-10">
          <div ref={headRef} className="max-w-4xl">
            <div className="eyebrow mb-6 text-accent">Quality Assurance</div>
            <h1 className="heading-display text-background text-[clamp(2.5rem,8vw,5rem)] leading-[0.95] mb-8">
              Certified <em className="text-accent not-italic font-light">excellence.</em>
            </h1>
            <p className="text-background/70 max-w-2xl text-lg md:text-xl leading-relaxed">
              Equipet International maintains the highest global standards in pet treat manufacturing. 
              Our certifications are a testament to our commitment to quality, safety, and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 md:py-32 bg-background bg-paws">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {certifications.map((cert, i) => (
              <CertificationCard key={i} {...cert} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Contact />
      
      {/* Footer bar */}
      <div className="border-t border-background/10 bg-foreground">
        <div className="container-premium py-5 text-center text-[10px] uppercase tracking-[0.22em] text-background/50">
          © {new Date().getFullYear()} EQUIPET INTERNATIONAL · All rights reserved
        </div>
      </div>
    </main>
  );
};

const CertificationCard = ({ title, src, desc, index }: { title: string; src: string; desc: string; index: number }) => {
  const ref = useReveal<HTMLDivElement>({ delay: index * 100 });
  return (
    <div ref={ref} className="group flex flex-col items-center text-center p-6 bg-white border border-foreground/5 shadow-sm hover:shadow-elegant transition-all duration-700">
      <div className="w-full aspect-[1/1.414] bg-foreground/5 mb-8 overflow-hidden border border-foreground/10 relative">
        <img 
          src={src}
          className="w-full h-full object-contain p-2"
          alt={title}
          loading="lazy"
        />
      </div>
      <h3 className="font-serif text-xl text-foreground mb-3">{title}</h3>
      <p className="text-foreground/60 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export default Certifications;
