import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Contact = () => {
  const headRef = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>({ delay: 120 });
  const mapRef = useReveal<HTMLDivElement>({ delay: 200 });

  return (
    <section id="contact" className="relative bg-foreground text-background overflow-hidden">
      {/* Top CTA band */}
      <div className="container-premium pt-20 md:pt-28 pb-10 md:pb-14">
        <div ref={headRef} className="max-w-4xl">
          <div className="eyebrow mb-4 text-background/60">Begin a Partnership</div>
          <h2 className="heading-display text-background text-[clamp(2rem,5vw,3.5rem)] text-balance leading-[1.08]">
            Start business <em className="text-accent not-italic font-light">with us.</em>
          </h2>
          <p className="text-background/60 max-w-xl mt-4 leading-relaxed text-sm">
            Request our distributor brochure, sample kits, or speak directly with our export team.
          </p>
          <a
            href="mailto:export@equipetinternational.com"
            className="inline-flex items-center gap-3 mt-6 text-sm uppercase tracking-[0.22em] border-b border-accent pb-2 group"
          >
            export@equipetinternational.com
            <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="container-premium">
        <div className="h-px w-full bg-background/10" />
      </div>

      {/* Info grid */}
      <div className="container-premium py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact cards */}
        <div ref={cardRef} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-px bg-background/10">
          <ContactBlock icon={<Phone size={16} />} label="Telephone" value="07947120574" sub="Mon–Sat · 9:00–18:00 IST" href="tel:07947120574" />
          <ContactBlock icon={<Mail size={16} />} label="Email" value="export@equipetinternational.com" sub="Distributor enquiries" href="mailto:export@equipetinternational.com" />
          <ContactBlock icon={<MapPin size={16} />} label="Headquarters" value="Kanpur, India" sub="100 New Defence Colony, Jajmau, Kanpur-208010" href="https://www.google.com/maps?q=26.4291,80.4022" />
        </div>

        {/* Map */}
        <div ref={mapRef} className="lg:col-span-5">
          <div className="aspect-[16/9] border border-background/10 relative overflow-hidden rounded-sm">
            <iframe
              title="Equipet International Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3572.5!2d80.4022!3d26.4291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s26%C2%B025'44.8%22N+80%C2%B024'08.1%22E!5e0!3m2!1sen!2sin!4v1700000000000"
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-background/10">
        <div className="container-premium py-5 text-center text-[10px] uppercase tracking-[0.22em] text-background/50">
          © {new Date().getFullYear()} Equipet International · All rights reserved
        </div>
      </div>
    </section>
  );
};

const ContactBlock = ({
  icon, label, value, sub, href,
}: { icon: React.ReactNode; label: string; value: string; sub: string; href: string }) => (
  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="bg-foreground p-5 block hover:bg-background/5 transition-colors duration-300 cursor-pointer">
    <div className="text-accent mb-3">{icon}</div>
    <div className="text-[10px] uppercase tracking-[0.28em] text-background/50 mb-1.5">{label}</div>
    <div className="font-serif text-sm text-background mb-1 break-all">{value}</div>
    <div className="text-[11px] text-background/50 leading-snug">{sub}</div>
  </a>
);
