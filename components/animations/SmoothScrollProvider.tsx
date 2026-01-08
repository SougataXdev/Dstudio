"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { setLenis } from "../providers/useLenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (lenisRef.current) return;

    const lenis = new Lenis({
      lerp: 0.03,
      smoothWheel: true,
      duration:1.2
    });

    lenisRef.current = lenis;
    setLenis(lenis); 

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      setLenis(null as any);
    };
  }, []);

  return <>{children}</>;
}
