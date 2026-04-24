import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#gallery", label: "Gallery" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-6"
      }`}
      style={{ transitionTimingFunction: "var(--ease-premium)" }}
    >
      <div className="container-premium flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Equipet International"
            className="h-10 md:h-12 w-10 md:w-12 object-cover rounded-full"
          />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`underline-grow text-[12px] uppercase tracking-[0.22em] font-medium transition-colors duration-500 ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-background/80 hover:text-background"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`text-[11px] uppercase tracking-[0.22em] font-medium px-5 py-2.5 border transition-all duration-500 ${
              scrolled
                ? "border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                : "border-background/30 text-background hover:bg-background hover:text-foreground"
            }`}
          >
            Contact Us
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-background"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-premium)" }}
      >
        <div className="container-premium py-6 flex flex-col gap-5 bg-background border-t border-border mt-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.22em] text-foreground/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-outline-dark self-start"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};
