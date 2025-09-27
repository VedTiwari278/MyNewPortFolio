// src/hooks/useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Instant scroll
      easing: (t) => t, // No easing
      smoothWheel: false, // Disable smooth wheel
      smoothTouch: false, // Disable smooth touch
      syncTouch: true,
    });

    // Force instant scroll on wheel events
    lenis.on("scroll", () => {
      lenis.scrollTo(lenis.scroll, { immediate: true });
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}
