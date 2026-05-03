import { Navbar } from "@/components/site/Navbar";
import { Contact } from "@/components/site/Contact";
import { useEffect } from "react";

import img01 from "@/products/WhatsApp Image 2026-05-03 at 15.26.25.jpeg";
import img02 from "@/products/WhatsApp Image 2026-05-03 at 15.26.26.jpeg";
import img03 from "@/products/WhatsApp Image 2026-05-03 at 15.26.26 (1).jpeg";
import img04 from "@/products/WhatsApp Image 2026-05-03 at 15.26.26 (2).jpeg";
import img05 from "@/products/WhatsApp Image 2026-05-03 at 15.26.27.jpeg";
import img06 from "@/products/WhatsApp Image 2026-05-03 at 15.26.29.jpeg";
import img07 from "@/products/WhatsApp Image 2026-05-03 at 15.26.30.jpeg";
import img08 from "@/products/WhatsApp Image 2026-05-03 at 15.26.30 (1).jpeg";
import img09 from "@/products/WhatsApp Image 2026-05-03 at 15.26.31.jpeg";
import img10 from "@/products/WhatsApp Image 2026-05-03 at 15.26.31 (1).jpeg";
import img11 from "@/products/WhatsApp Image 2026-05-03 at 15.26.32.jpeg";
import img12 from "@/products/WhatsApp Image 2026-05-03 at 15.26.32 (1).jpeg";
import img13 from "@/products/WhatsApp Image 2026-05-03 at 15.26.32 (2).jpeg";
import img14 from "@/products/WhatsApp Image 2026-05-03 at 15.26.33.jpeg";
import img15 from "@/products/WhatsApp Image 2026-05-03 at 15.26.34.jpeg";
import img16 from "@/products/WhatsApp Image 2026-05-03 at 15.26.34 (1).jpeg";
import img17 from "@/products/WhatsApp Image 2026-05-03 at 15.26.34 (2).jpeg";
import img18 from "@/products/WhatsApp Image 2026-05-03 at 15.26.35.jpeg";
import img19 from "@/products/WhatsApp Image 2026-05-03 at 15.26.36.jpeg";
import img20 from "@/products/WhatsApp Image 2026-05-03 at 15.26.36 (1).jpeg";
import img21 from "@/products/WhatsApp Image 2026-05-03 at 15.26.37.jpeg";
import img22 from "@/products/WhatsApp Image 2026-05-03 at 15.26.37 (1).jpeg";
import img23 from "@/products/WhatsApp Image 2026-05-03 at 15.26.37 (2).jpeg";
import img24 from "@/products/WhatsApp Image 2026-05-03 at 15.26.38.jpeg";
import img25 from "@/products/WhatsApp Image 2026-05-03 at 15.26.38 (1).jpeg";
import img26 from "@/products/WhatsApp Image 2026-05-03 at 15.26.38 (2).jpeg";
import img27 from "@/products/WhatsApp Image 2026-05-03 at 15.26.39.jpeg";
import img28 from "@/products/WhatsApp Image 2026-05-03 at 15.26.39 (1).jpeg";
import img29 from "@/products/WhatsApp Image 2026-05-03 at 15.26.40.jpeg";
import img30 from "@/products/WhatsApp Image 2026-05-03 at 15.26.40 (1).jpeg";
import img31 from "@/products/WhatsApp Image 2026-05-03 at 15.26.40 (2).jpeg";
import img32 from "@/products/WhatsApp Image 2026-05-03 at 15.26.41.jpeg";

const allProducts = [
  { no: "01", title: "Tripe", img: img01 },
  { no: "02", title: "Gullet", img: img02 },
  { no: "03", title: "Trachea", img: img03 },
  { no: "04", title: "Lungs", img: img04 },
  { no: "05", title: "Pizzle", img: img05 },
  { no: "06", title: "Flat Bladder", img: img06 },
  { no: "07", title: "Twisted Bladder", img: img07 },
  { no: "08", title: "Ring Boiled Ears", img: img08 },
  { no: "09", title: "Flap Ears Boiled", img: img09 },
  { no: "10", title: "Nosebone", img: img10 },
  { no: "11", title: "Shoulder Bone", img: img11 },
  { no: "12", title: "Paddywack", img: img12 },
  { no: "13", title: "Intestine", img: img13 },
  { no: "14", title: "Tendon", img: img14 },
  { no: "15", title: "Buffalo Ears With Hair", img: img15 },
  { no: "16", title: "Goat Ears With Hair", img: img16 },
  { no: "17", title: "Natural Ears Flap", img: img17 },
  { no: "18", title: "Natural Ears Pointed", img: img18 },
  { no: "19", title: "Natural Tail", img: img19 },
  { no: "20", title: "Natural Headskin", img: img20 },
  { no: "21", title: "Natural Chips Plate", img: img21 },
  { no: "22", title: "Natural Chips", img: img22 },
  { no: "23", title: "Collagen Stick", img: img23 },
  { no: "24", title: "Cheek Roll", img: img24 },
  { no: "25", title: "Braided Skin", img: img25 },
  { no: "26", title: "Split Skin Braided", img: img26 },
  { no: "27", title: "Pressed Stick", img: img27 },
  { no: "28", title: "Pressed Bone", img: img28 },
  { no: "29", title: "Femur Bone", img: img29 },
  { no: "30", title: "Horn", img: img30 },
  { no: "31", title: "Tip Horn", img: img31 },
  { no: "32", title: "Hooves", img: img32 },
];

export default function AllProducts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-background text-foreground min-h-screen">
      <Navbar />
      
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-foreground text-background overflow-hidden min-h-[60vh] bg-paws-dark">
        <div className="absolute inset-0 diagonal-texture pointer-events-none" />
        
        <div className="container-premium relative">
          <div className="mb-16 md:mb-24 text-center">
            <div className="eyebrow mb-5 text-background/60 justify-center">Complete Catalogue</div>
            <h1 className="heading-display text-background text-[clamp(2.5rem,6vw,4.5rem)]">
              All <em className="text-accent not-italic font-light">Products</em>
            </h1>
            <p className="text-background/50 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Explore our full range of 32 premium natural dog chew products. Available for global export.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-background/10">
            {allProducts.map((p, i) => (
              <div key={i} className="group relative bg-foreground bg-paws-dark p-4 md:p-8 overflow-hidden flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-navy-deep mb-4 md:mb-6">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
                    style={{ transitionTimingFunction: "var(--ease-premium)" }}
                  />
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex items-baseline gap-2 md:gap-4 mb-2 md:mb-3">
                    <span className="text-accent text-[10px] md:text-xs tracking-[0.3em]">{p.no}</span>
                    <span className="block flex-1 h-px bg-background/15" />
                  </div>
                  <h3 className="font-serif text-base md:text-xl text-background mb-4 leading-tight">
                    {p.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Contact />
    </main>
  );
}
