// src/hooks/useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    // Device detection
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    // Lenis instance
    const lenis = new Lenis({
      duration: isMobile ? 0.5 : 1.5, // mobile fast, desktop smooth
      easing: (t) => t,
      smoothWheel: !isMobile, // desktop smooth wheel
      smoothTouch: isMobile, // mobile smooth touch
      syncTouch: !isMobile, // desktop sync touch, mobile handled naturally
    });

    // RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => lenis.destroy();
  }, []);
}
