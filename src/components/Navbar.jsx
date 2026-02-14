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
  if (!navRef.current) return;

  const activeEl = navRef.current.querySelector(
    `[data-name="${active}"]`
  );

  if (activeEl) {
    setPillStyle({
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
    });
  }
}, [active]);





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
    "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out",
    isScrolled
      ? "top-4 w-[92%] max-w-8xl py-3 bg-glass/10 backdrop-blur-xl rounded-3xl shadow-lg  scale-[0.98]"
      : "top-0 w-full py-5 scale-100"
  )
}
>

        <div className="container px-3 sm:px-6 md:px-8 grid grid-cols-2 lg:grid-cols-3 items-center">

  {/* Left - Logo */}
  <a className="text-xl md:text-2xl font-bold text-primary flex items-center cursor-pointer">
    <span className="relative z-10">
      <span className=" text-foreground">Abhinand G </span>
      Portfolio
    </span>
  </a>

  {/* Center - Desktop Nav */}
  <div
  ref={navRef}
className="relative hidden lg:flex items-center justify-center space-x-2 p-1"
>
  {/* Sliding Background */}
  <span
    className="absolute top-0.5 bottom-0.5 rounded-xl bg-primary backdrop-blur-xl transition-all duration-200 ease-out"
    style={pillStyle}
  />

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
        active === item.name
          ? "text-white"
          : "text-foreground hover hover:text-primary transition"
      )}
    >
      {item.name}
    </a>
  ))}
</div>


  {/* Right - Theme + Mobile Menu */}
  <div className="flex justify-end items-center gap-3">
    <div className="hidden lg:flex">
      <ThemeToggle />
    </div>

    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="lg:hidden p-2 text-foreground z-[9999] "
    >
      <Menu size={26} />
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
