// src/hooks/useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0,        // no inertia at all
      easing: (t) => t,   // linear
      smoothWheel: false, // disable smooth wheel
      smoothTouch: false, // disable smooth touch (important for mobile)
      syncTouch: false,   // disable sync on touch
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}
