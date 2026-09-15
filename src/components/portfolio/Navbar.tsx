import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, profile } from "./data";

/** Sticky navigation with a hamburger menu on small screens. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto grid min-h-16 w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 sm:px-8 lg:flex"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3 font-semibold text-foreground">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-foreground text-xs font-bold text-background">
            {profile.initials}
          </span>
          <span className="truncate text-sm uppercase">Siyabonga Mtshali</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "location" : undefined}
                className={`border-b-2 px-2 py-5 text-xs font-semibold uppercase transition-colors ${active === link.id ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden xl:inline-flex">
            <a href="#contact">Contact Me</a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 py-2 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.id ? "location" : undefined}
                  className={`block border-l-2 px-3 py-3 text-sm font-medium transition-colors ${active === link.id ? "border-primary bg-secondary text-foreground" : "border-transparent text-muted-foreground hover:bg-secondary hover:text-foreground"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-2">
              <Button asChild className="w-full">
                <a href="#contact" onClick={() => setOpen(false)}>
                  Contact Me
                </a>
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
