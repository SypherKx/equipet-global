import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";

import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Handle scroll to hash on initial load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to ensure content is rendered
    }
  }, []);

  return (
    <main className="relative bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Index;
