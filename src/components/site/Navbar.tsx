import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#gallery", label: "Gallery" },
  { href: "/certifications", label: "Certifications" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const isHome = window.location.pathname === "/";
    if (!isHome) {
      setActive(window.location.pathname);
      return;
    }

    const sectionIds = ["about", "products", "gallery", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_4px_24px_hsl(218_65%_12%/0.12)] py-3"
          : "bg-transparent py-6"
      }`}
      style={{ transitionTimingFunction: "var(--ease-premium)" }}
    >
      <div className="container-premium flex items-center justify-between">
        <a href={window.location.pathname === "/" ? "#top" : "/"} className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Equipet International"
            className="h-14 md:h-16 w-14 md:w-16 object-cover rounded-full"
          />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const isHome = window.location.pathname === "/";
            // Hide Home link if already on home page
            if (l.label === "Home" && isHome) return null;
            
            const targetHref = l.href.startsWith("/") ? l.href : (isHome ? l.href : `/${l.href}`);
            const isActive = active === l.href || active === targetHref;

            return (
              <a
                key={l.href}
                href={targetHref}
                className={`underline-grow text-[12px] uppercase tracking-[0.22em] font-medium transition-colors duration-500 ${
                  scrolled
                    ? isActive
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground"
                    : isActive
                    ? "text-background"
                    : "text-background/70 hover:text-background"
                } ${isActive ? "is-active" : ""}`}
              >
                {l.label}
              </a>
            );
          })}
          <a
            href={window.location.pathname === "/" ? "#contact" : "/#contact"}
            className={`text-[11px] uppercase tracking-[0.22em] font-medium px-5 py-2.5 border transition-all duration-500 ${
              scrolled
                ? active === "#contact"
                  ? "bg-foreground text-background border-foreground"
                  : "border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                : active === "#contact"
                ? "bg-background text-foreground border-background"
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
        className={`md:hidden overflow-hidden transition-all duration-500 absolute w-full left-0 bg-background shadow-xl ${
          open ? "max-h-96 opacity-100 border-b border-foreground/10" : "max-h-0 opacity-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-premium)" }}
      >
        <div className="container-premium py-8 flex flex-col gap-5 border-t border-foreground/10 mt-3">
          {links.map((l) => {
            const isHome = window.location.pathname === "/";
            // Hide Home link if already on home page
            if (l.label === "Home" && isHome) return null;

            const targetHref = l.href.startsWith("/") ? l.href : (isHome ? l.href : `/${l.href}`);
            const isActive = active === l.href || active === targetHref;

            return (
              <a
                key={l.href}
                href={targetHref}
                onClick={() => setOpen(false)}
                className={`text-sm uppercase tracking-[0.22em] py-2 border-b border-foreground/5 ${
                  isActive ? "text-accent font-medium is-active" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            );
          })}
          <a
            href={window.location.pathname === "/" ? "#contact" : "/#contact"}
            onClick={() => setOpen(false)}
            className="mt-2 w-full inline-flex items-center justify-center bg-foreground text-background py-3 text-[11px] uppercase tracking-[0.22em] font-medium transition-colors hover:bg-foreground/90"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};
