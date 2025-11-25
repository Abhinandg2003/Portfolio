import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
  }, [isMenuOpen]);

  const handleMenuNavigation = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    setTimeout(() => {
      const target = document.querySelector(href);
      if (!target) return;
      const offset = 80;
      const position = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: position - offset, behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a className="text-xl font-bold text-primary flex items-center cursor-pointer">
            <span className="relative z-10">
              <span className="text-glow text-foreground">Abhinand G </span>
              Portfolio
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          {/* Mobile Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground z-[9999]"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-lg flex flex-col gap-10 items-center justify-center transition-all duration-300 md:hidden z-[9998]",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-foreground"
        >
          <X size={32} strokeWidth={2.2} />
        </button>

        <ThemeToggle />

        <div className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/90 text-2xl font-medium hover:text-primary transition-colors duration-300"
              onClick={(e) => handleMenuNavigation(e, item.href)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
