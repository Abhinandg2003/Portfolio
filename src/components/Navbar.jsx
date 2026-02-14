import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useRef } from "react";


const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const [active, setActive] = useState("Home");
const navRef = useRef(null);
const [pillStyle, setPillStyle] = useState({});

const [isAutoScrolling, setIsAutoScrolling] = useState(false);

const [showPill, setShowPill] = useState(false);

const [navReady, setNavReady] = useState(true);






useEffect(() => {
  const handleScrollSpy = () => {
    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (!isAutoScrolling && rect.top <= 120 && rect.bottom >= 120) {
  setActive(item.name);
}

    });
  };

  window.addEventListener("scroll", handleScrollSpy);
  return () => window.removeEventListener("scroll", handleScrollSpy);
}, [isAutoScrolling]);



useEffect(() => {
  if (!navRef.current || !navReady || !isScrolled) return;

  const activeEl = navRef.current.querySelector(
    `[data-name="${active}"]`
  );

  if (!activeEl) return;

  requestAnimationFrame(() => {
    setPillStyle({
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
    });
  });
}, [active, navReady, isScrolled]);






useEffect(() => {
  let timeout;

  const handleScroll = () => {
    const scrolled = window.scrollY > 10;
    setIsScrolled(scrolled);

    setNavReady(false);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setNavReady(true);
    }, 20); // matches your navbar animation timing
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
    clearTimeout(timeout);
  };
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
    "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out",
    isScrolled
      ? "top-4 w-[92%] max-w-8xl py-3 bg-glass/10 backdrop-blur-xl rounded-full shadow-lg scale-[0.98]"
      : "top-0 w-full py-5 scale-100 "
  )}
>
        <div className="w-full px-0 sm:px-0 md:px-0 lg:px-0 grid grid-cols-2 lg:grid-cols-3 items-center">
          {/* Left - Logo */}
          <a
  href="#home"
  onClick={(e) => {
    e.preventDefault();
    setIsAutoScrolling(true);
    setActive("Home");

    const target = document.querySelector("#home");
    if (!target) return;

    const offset = 80;
    const position = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: position - offset,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsAutoScrolling(false);
    }, 600);
  }}
  className="text-xl md:text-2xl font-bold text-primary flex items-center cursor-pointer justify-start pl-8 sm:pl-10 md:pl-16"
>

            <span className="relative z-10 text-left">
              <span className="text-primary block">Abhinand G</span>
              <span className="block text-sm md:text-base font-normal text-foreground -mt-1">Portfolio</span>
            </span>
          </a>

          {/* Center - Desktop Nav */}
          <div
            ref={navRef}
            className="relative hidden lg:flex items-center justify-center space-x-2 p-1"
          >
            {/* Sliding Background */}
{isScrolled && (
  <span
    className="absolute top-0.5 bottom-0.5 rounded-xl bg-primary transition-all duration-300 ease-out"
    style={pillStyle}
  />
)}



            {navItems.map((item) => (
              <a
                key={item.name}
                data-name={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsAutoScrolling(true);
                  setActive(item.name);

                  const target = document.querySelector(item.href);
                  if (!target) return;

                  const offset = 80;
                  const position = target.getBoundingClientRect().top + window.scrollY;

                  window.scrollTo({
                    top: position - offset,
                    behavior: "smooth",
                  });

                  setTimeout(() => {
                    setIsAutoScrolling(false);
                  }, 600);
                }}
                className={cn(
                  "relative z-10 px-4 py-1.5 text-sm font-medium transition-colors duration-300",
                  active === item.name && isScrolled
  ? "text-white"
  : "text-foreground hover:text-primary transition"

                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right - Theme + Mobile Menu */}
          <div className="flex justify-end items-center gap-3 px-4">
            <div className="hidden lg:flex">
              <ThemeToggle />
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 z-[9999] bg-primary rounded-full text-white"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-lg flex flex-col gap-10 items-center justify-center transition-all duration-300 lg:hidden z-[9998]",
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