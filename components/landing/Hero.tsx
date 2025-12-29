import { ChevronRight } from "lucide-react";
import React from "react";
import { RevealItem } from "../animations/RevealItem";

const Hero = () => {
  return (
    <div
      className="
        relative flex flex-col items-center
        bg-[url('/hero-grid-bg.png')]
        bg-repeat
        bg-center
        bg-size[520px_520px]
        pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24
        px-4 md:px-6
      "
    >
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />

      <RevealItem delay={0}>
        <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl text-center font-sans font-semibold tracking-tighter leading-tight mx-auto">
          Empowering Brands with Visual Excellence
        </h1>
      </RevealItem>

      <RevealItem delay={0.1}>
        <p className="relative z-10 font-sans text-base md:text-lg max-w-xl text-center mt-3 px-4">
          Delivering fully functional websites, mobile apps, eCommerce
          platforms, and digital solutions is our specialty.
        </p>
      </RevealItem>

      <RevealItem delay={0.2}>
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 w-full sm:w-auto px-4 sm:px-0">
          <button className="rounded-full bg-black px-8 sm:px-14 py-3 text-neutral-100 font-semibold tracking-tighter font-sans text-sm sm:text-base">
            Get Quote ⎯ For Free
          </button>

          <button className="flex items-center justify-center gap-2 rounded-full border border-black bg-white text-black px-6 sm:px-10 py-3 font-sans text-sm sm:text-base">
            Schedule a Call <ChevronRight size={18} />
          </button>
        </div>
      </RevealItem>
    </div>
  );
};

export default Hero;
