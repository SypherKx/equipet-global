import { Navbar } from "@/components/site/Navbar";
import { Contact } from "@/components/site/Contact";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import rawhide from "@/assets/product-rawhide.jpg";
import dental from "@/assets/product-dental.jpg";
import treats from "@/assets/product-treats.jpg";
import bones from "@/assets/product-bones.jpg";

const allProducts = Array.from({ length: 35 }).map((_, i) => {
  const categories = [
    { title: "Natural Rawhide Bone", img: rawhide, desc: "Classic hand-rolled rawhide for long-lasting chewing." },
    { title: "Dental Chew Stick", img: dental, desc: "Formulated for oral health and plaque reduction." },
    { title: "Chicken Jerky Strip", img: treats, desc: "Premium slow-dried chicken, high in protein." },
    { title: "Knotted Bone", img: bones, desc: "Twisted and knotted for extra durability." },
    { title: "Pressed Rawhide Ring", img: rawhide, desc: "Dense pressed rawhide for aggressive chewers." },
    { title: "Beef Flavored Stick", img: treats, desc: "Savory beef treats dogs love." },
    { title: "Braided Rawhide Stick", img: bones, desc: "Braided texture to help clean teeth." },
  ];
  const cat = categories[i % categories.length];
  return {
    no: String(i + 1).padStart(2, '0'),
    title: `${cat.title} ${Math.floor(i / categories.length) + 1}`,
    desc: cat.desc,
    img: cat.img,
  };
});

export default function AllProducts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-background text-foreground min-h-screen">
      <Navbar />
      
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-foreground text-background overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0 diagonal-texture pointer-events-none" />
        
        <div className="container-premium relative">
          <div className="mb-16 md:mb-24 text-center">
            <div className="eyebrow mb-5 text-background/60 justify-center">Complete Catalogue</div>
            <h1 className="heading-display text-background text-[clamp(2.5rem,6vw,4.5rem)]">
              All <em className="text-accent not-italic font-light">Products</em>
            </h1>
            <p className="text-background/50 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Explore our full range of 35+ premium pet products, including rawhide, dental chews, treats, and more. Available for global export.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-background/10">
            {allProducts.map((p, i) => (
              <div key={i} className="group relative bg-foreground p-4 md:p-8 overflow-hidden flex flex-col">
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
