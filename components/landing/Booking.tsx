import React from "react";
import { SectionReveal } from "../animations/SectionReveal";
import { RevealItem } from "../animations/RevealItem";

type Props = {};

const Booking = (props: Props) => {
  return (
    <SectionReveal className="font-sans relative">
      <div className="w-full max-w-10/12 mx-auto p-4 md:p-2 pt-5 relative">
        <RevealItem delay={0.1}>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl max-w-4xl leading-normal">
            At Dstudio, we craft exceptional{" "}
            <span className="italic font-light">digital products</span> with
            expertise in{" "}
            <span className="italic font-light"> branding, UI/UX </span>design,
            and <span className="italic font-light">mobile</span> &{" "}
            <span className="italic font-light">web</span> development.
          </h1>
        </RevealItem>
        <RevealItem delay={0.15}>
          <button className="bg-black px-5 py-3 rounded-full text-white mt-6 md:mt-8 text-sm sm:text-base">
            Book a Slot
          </button>
        </RevealItem>
        <div className="mt-8 md:mt-12 flex flex-col lg:flex-row w-full justify-between gap-6 lg:gap-0">
          <RevealItem delay={0.2}>
            <h3 className="uppercase font-semibold text-base md:text-lg">
              Digital Design Studio
            </h3>
          </RevealItem>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-25">
            <RevealItem delay={0.25}>
              <div className="max-w-sm tracking-tight text-base md:text-lg text-[#5A5A5A] flex flex-col gap-4 md:gap-5">
                <p>
                  Our team of skilled creative designers collaborates with you to
                  develop customised strategies that showcase your unique value,
                  engage your audience, and drive conversions.
                </p>
                <p>
                  We're dedicated to delivering outcomes that go beyond
                  aesthetics.
                </p>
              </div>
            </RevealItem>

            <RevealItem delay={0.3}>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/video-poster.jpg"
                className="object-cover rounded-3xl w-full md:w-auto max-w-full md:max-w-md"
              >
                <source src="/about-v1.mp4" type="video/mp4" />
              </video>
            </RevealItem>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};

export default Booking;
