import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";

const Index = () => {
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
