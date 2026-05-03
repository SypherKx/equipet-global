import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL: FormState = { name: "", email: "", message: "" };

export const Contact = () => {
  const headRef = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>({ delay: 120 });
  const formRef = useReveal<HTMLDivElement>({ delay: 80 });
  const mapRef = useReveal<HTMLDivElement>({ delay: 200 });

  const [form, setForm] = useState<FormState>(INITIAL);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "2948a7bf-c138-4322-b70f-f27df7e32056");
      formData.append("from_name", "Equipet Global Website");
      formData.append("subject", `New Enquiry from ${form.name}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        setForm(INITIAL);
      } else {
        console.error("Form submission failed:", result.message);
        alert(`Submission failed: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please check your internet connection.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative bg-foreground text-background overflow-hidden bg-paws-dark">
      {/* Top CTA band */}
      <div className="container-premium pt-16 md:pt-20 pb-8 md:pb-10">
        <div ref={headRef} className="max-w-4xl">
          <div className="eyebrow mb-4 text-background/60">Begin a Partnership</div>
          <h2 className="heading-display text-background text-[clamp(2rem,5vw,3.5rem)] text-balance leading-[1.08]">
            Start business <em className="text-accent not-italic font-light">with us.</em>
          </h2>
          <p className="text-background/60 max-w-xl mt-4 leading-relaxed text-sm">
            Request our distributor brochure, sample kits, or speak directly with our export team.
          </p>
          <a
            href="mailto:info@equipetinternational.com"
            className="inline-flex items-center gap-3 mt-6 text-[12px] tracking-[0.18em] border-b border-accent pb-1.5 group"
          >
            info@equipetinternational.com
            <ArrowRight size={12} className="transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="container-premium">
        <div className="h-px w-full bg-background/10" />
      </div>

      {/* Main grid: Form + Contact cards */}
      <div className="container-premium py-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Enquiry Form */}
        <div ref={formRef} className="lg:col-span-7">
          <h3 className="font-serif text-xl text-background mb-6 tracking-tight">Send an Enquiry</h3>

          {sent ? (
            <div className="flex flex-col items-start gap-3 py-10">
              <CheckCircle size={36} className="text-accent" />
              <p className="font-serif text-2xl text-background">Thank you for reaching out.</p>
              <p className="text-background/60 text-sm">We'll respond within 1–2 business days.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 text-[11px] uppercase tracking-[0.22em] text-background/60 hover:text-background border-b border-background/20 pb-1 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[10px] uppercase tracking-[0.28em] text-background/50">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-background/5 border border-background/15 focus:border-accent outline-none px-4 py-3 text-sm text-background placeholder:text-background/30 transition-colors duration-300"
                />
              </div>


              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[10px] uppercase tracking-[0.28em] text-background/50">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-background/5 border border-background/15 focus:border-accent outline-none px-4 py-3 text-sm text-background placeholder:text-background/30 transition-colors duration-300"
                />
              </div>


              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-[0.28em] text-background/50">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements — products, quantities, destination markets..."
                  className="bg-background/5 border border-background/15 focus:border-accent outline-none px-4 py-3 text-sm text-background placeholder:text-background/30 transition-colors duration-300 resize-none"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-3 bg-accent text-foreground px-8 py-4 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-accent/90 transition-colors duration-300 disabled:opacity-60"
                >
                  {sending ? (
                    <><Loader2 size={14} className="animate-spin" /> Sending…</>
                  ) : (
                    <>Send Enquiry <ArrowRight size={14} /></>
                  )}
                </button>
                <p className="mt-3 text-[10px] text-background/40 tracking-wide">
                  We respond within 1–2 business days · Mon–Sat, 9:00–18:00 IST
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Contact cards + map */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div ref={cardRef} className="grid grid-cols-1 gap-px bg-background/10">
            <ContactBlock 
              icon={<Phone size={16} />} 
              label="Contact" 
              value="+91 92500 20072" 
              sub="Info@equipetinternational.com" 
              href="tel:+919250020072" 
            />
            <ContactBlock 
              icon={<MapPin size={16} />} 
              label="Head Office" 
              value="Kanpur, India" 
              sub="F-201 The Residency Apartment, Kailash Nagar, Jajmau, Kanpur-208010, U.P. India" 
              href="https://www.google.com/maps?q=F-201+The+Residency+Apartment+Kailash+Nagar+Jajmau+Kanpur" 
            />
            <ContactBlock 
              icon={<MapPin size={16} />} 
              label="Manufacturing Plant" 
              value="Kanpur, India" 
              sub="104/90-A, (20), Jajmau, Kanpur, Kanpur Nagar, Uttar Pradesh, 208010, India" 
              href="https://www.google.com/maps?q=26.421667,80.414333" 
            />
          </div>

          {/* Map */}
          <div ref={mapRef}>
            <div className="aspect-[16/9] border border-background/10 relative overflow-hidden rounded-sm">
              <iframe
                title="Equipet International Location — Kanpur, India"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3572.5!2d80.414333!3d26.421667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s26%C2%B025'18.0%22N+80%C2%B024'51.6%22E!5e0!3m2!1sen!2sin!4v1700000000000"
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-background/10">
        <div className="container-premium py-5 text-center text-[10px] uppercase tracking-[0.22em] text-background/50">
          © {new Date().getFullYear()} EQUIPET INTERNATIONAL · All rights reserved
        </div>
      </div>
    </section>
  );
};

const ContactBlock = ({
  icon, label, value, sub, href,
}: { icon: React.ReactNode; label: string; value: string; sub: string; href: string }) => (
  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="bg-foreground p-8 block hover:bg-background/5 transition-colors duration-300 cursor-pointer h-full">
    <div className="text-accent mb-3">{icon}</div>
    <div className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-background/50 mb-2">{label}</div>
    <div className="font-serif text-base md:text-lg text-background mb-1 break-all">{value}</div>
    <div className="text-[11px] md:text-[12px] text-background/60 leading-relaxed break-all">{sub}</div>
  </a>
);
