import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (viewportRef.current) {
        gsap.to(viewportRef.current, {
          y: -window.pageYOffset,
          ease: "power4.out",
          duration: 1
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={viewportRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
