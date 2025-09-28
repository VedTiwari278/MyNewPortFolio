// src/hooks/useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5, // no inertia
      easing: (t) => t, // linear
      smoothWheel: false, // disable inertia on wheel
      smoothTouch: true, // disable inertia on touch
      syncTouch: true, // no touch sync
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}
