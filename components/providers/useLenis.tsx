import Lenis from "@studio-freight/lenis";

let lenisInstance: Lenis | null = null;

export const setLenis = (lenis: Lenis | null) => {
  lenisInstance = lenis;
};

export const getLenis = () => lenisInstance;
