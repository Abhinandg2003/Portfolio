import { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = [
  "logos/react.png",
  "logos/next.png",
  "logos/node.png",
  "logos/tailwin.png",
  "logos/mongo.png",
  "logos/vite.png",
  "logos/bootstrap.png",
  "logos/css.png",
  "logos/git.png",
  "logos/github.png",
  "logos/html.png",
  "logos/js.png",
  "logos/post.png",
  "logos/vs.png",
];

export default function LogoSlider() {
  const trackRef = useRef(null);
  const speedRef = useRef(1);

  useEffect(() => {
  const track = trackRef.current;

  const totalWidth = track.scrollWidth / 2;

  gsap.set(track, { x: 0 });

  const tween = gsap.to(track, {
    x: `-=${totalWidth}`,
    duration: 40,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: (x) => `${parseFloat(x) % totalWidth}px`,
    },
  });

  let lastScroll = window.scrollY;
  let velocity = 0;

  const onScroll = () => {
    const delta = window.scrollY - lastScroll;
    lastScroll = window.scrollY;

    velocity = gsap.utils.clamp(-15, 15, delta * 0.35);

    gsap.to(tween, {
      timeScale: 1 + velocity,
      duration: 0.15,
      ease: "power3.out",
    });
  };

  const resetSpeed = () => {
    gsap.to(tween, {
      timeScale: 1,
      duration: 1,
      ease: "power3.out",
    });
  };

  window.addEventListener("scroll", onScroll);
  window.addEventListener("scrollend", resetSpeed);

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("scrollend", resetSpeed);
    tween.kill();
  };
}, []);


  return (
    <div className="relative overflow-hidden w-full py-15 md:py-20 mask-fade">
      <div ref={trackRef} className="flex gap-9 md:gap-14 w-max">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            className=" h-15 md:h-20 opacity-80 hover:opacity-100 transition"
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
}
