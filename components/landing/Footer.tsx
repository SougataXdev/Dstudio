import Image from "next/image";
import React from "react";
import { SectionReveal } from "../animations/SectionReveal";
import { RevealItem } from "../animations/RevealItem";

type Props = {};

const Footer = (props: Props) => {
  return (
    <SectionReveal className="min-h-screen bg-black text-white font-sans">
      <div className="max-w-10/12 w-full mx-auto px-4 md:px-0">
        <div className="pt-10 md:pt-14 pb-8 md:pb-10">
          <RevealItem delay={0.1}>
            <h3 className="text-base md:text-lg font-semibold">
              Let's Create Something Better Together
            </h3>
          </RevealItem>
          <RevealItem delay={0.15}>
            <h2 className="mt-6 md:mt-10 text-3xl md:text-5xl font-semibold">
              Write us on
            </h2>
          </RevealItem>
          <RevealItem delay={0.2}>
            <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mt-3 break-all sm:break-normal">
              hello@dstudio.agency
            </h3>
          </RevealItem>

          <RevealItem delay={0.25}>
            <button
              className="
                relative inline-flex items-center justify-center
                rounded-full p-0.5 mt-10 md:mt-17 mb-8 md:mb-10
                bg-linear-to-r from-lime-400 via-purple-500 to-cyan-400
              "
            >
              <span
                className="
                  rounded-full
                  bg-black
                  px-6 md:px-8 py-3
                  text-white
                  text-sm md:text-base
                  font-medium
                  transition
                "
              >
                Start New Project
              </span>
            </button>
          </RevealItem>
        </div>
        <div className="h-px w-full bg-slate-600/60"></div>

        <RevealItem delay={0.3}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 pt-10 md:pt-16">
            <div>
              <Image
                height={100}
                width={120}
                alt="logo"
                src="/logo-white.svg"
                className="w-24 md:w-[120px]"
              />
              <h1 className="text-2xl md:text-3xl font-bold mt-4">5.0</h1>
              <p className="mt-3 text-sm md:text-base">Rated on Clutch</p>
            </div>
            <div className="flex flex-col gap-4 md:gap-5">
              <h2 className="text-xl md:text-2xl">Location</h2>
              <h2 className="font-semibold">India</h2>
              <h3 className="text-sm md:text-base">100% Remote Team</h3>
              <div className="flex flex-col gap-2 md:gap-3 mt-2 md:mt-4">
                <h2 className="font-semibold text-lg md:text-xl">
                  United States
                </h2>
                <p className="text-sm md:text-base max-w-sm">
                  585 West 500 south, Suite 130 Bountiful, Salt Lake City, Utah
                  84010
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl">Social</h1>
              <div className="flex flex-row flex-wrap sm:flex-col gap-3 mt-4 text-sm md:text-base">
                <p>Dribbble</p>
                <p>Instagram</p>
                <p>Behance</p>
                <p>Linkedin</p>
                <p>Facebook</p>
                <p>Clutch</p>
              </div>
            </div>
          </div>
        </RevealItem>

        <RevealItem delay={0.35}>
                  <p className="text-center mt-4 text-neutral-400">Made with love ❤️ by - SougataXdev</p>

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mt-10 md:mt-14 text-xs md:text-sm px-1 pb-6">
            <div className="flex gap-4 md:gap-6">
              <p>About Us</p>
              <p>Case Study</p>
              <p>Contact</p>
            </div>
            <p className="text-center">powered by - Design Pixelone Pvt. Ltd</p>
            <p className="text-center">
              © 2025 Dstudio Agency - All rights Reserved
            </p>
          </div>
        </RevealItem>
      </div>
    </SectionReveal>
  );
};

export default Footer;
