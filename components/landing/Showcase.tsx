"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionReveal } from "../animations/SectionReveal";
import { RevealItem } from "../animations/RevealItem";

const showcaseItems = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "We craft intuitive digital experiences that delight users and drive engagement through thoughtful design.",
    media: "/showcase-svgs/taskade.svg",
  },
  {
    id: 2,
    title: "Brand Identity",
    description:
      "Our team creates compelling brand identities that communicate your message with your target audience.",
    media: "/showcase-svgs/brand.svg",
  },
  {
    id: 3,
    title: "Mobile Development",
    description:
      "We deliver user-friendly apps with engaging interfaces and seamless functionality across platforms.",
    media: "/showcase-svgs/mdev.svg",
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Our team create responsive websites with sleek designs and optimised performance to enhance user experience.",
    media: "/showcase-svgs/wdev.svg",
  },
];

const AUTOPLAY_INTERVAL = 3000;
const PROGRESS_DURATION = 3;

const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseItems.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleItemClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <SectionReveal className="mx-auto max-w-10/12 px-4 md:px-6 py-16 md:py-24 lg:py-32 font-sans">
      <RevealItem delay={0.1}>
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Explore <span className="italic font-light">Our Design</span>
            <br />
            Capabilities
          </h2>
        </div>
      </RevealItem>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative pb-6 md:pb-10">
          <div className="max-w-2xl flex justify-between flex-col">
            {/* Subtitle */}
            <div className="mb-4">
              <p className="my-4 md:my-6 pr-4 md:pr-20 text-base md:text-lg text-[#6F6F6F]">
                Expanding the Limits of Possibility with Tailored Solutions
              </p>
            </div>

            {/* Service List */}
            <ol className="list-none mt-6 md:mt-10 max-w-xl text-base leading-7 lg:max-w-none">
              {showcaseItems.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <li
                    key={item.id}
                    className="relative features-item"
                    onClick={() => handleItemClick(index)}
                  >
                    <div className="py-2 md:py-3">
                      {/* Title row */}
                      <div className="relative flex justify-between cursor-pointer">
                        <h2
                          className={`feature-title text-lg md:text-xl font-semibold transition-colors duration-300 ${
                            isActive ? "text-black" : "text-[#535353]"
                          }`}
                        >
                          <span className="inline-flex mr-3 md:mr-4 text-base md:text-lg">
                            {index + 1}.{" "}
                          </span>
                          {item.title}
                        </h2>

                        {/* Arrow icon - only visible when active */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.svg
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="#000"
                              className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                              />
                            </motion.svg>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Description - only visible when active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="text-base md:text-lg text-[#888888] font-sans pl-4 md:pl-6 pt-2 ml-1 w-full md:w-3/4 overflow-hidden"
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {/* SVG Progress Line */}
                      <svg className="w-full h-1 mt-4">
                        {/* Animated progress line (only for active) */}
                        {isActive && (
                          <motion.line
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                            strokeWidth="4.5"
                            stroke="#000"
                            className="z-10"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: isPaused ? 0 : PROGRESS_DURATION,
                              ease: "linear",
                            }}
                            key={`progress-${activeIndex}-${isPaused}`}
                          />
                        )}
                        {/* Background line */}
                        <line
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                          strokeWidth="2.5"
                          stroke="#d6d6d6"
                        />
                      </svg>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <div className="relative overflow-hidden items-baseline flex mt-8 lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -10 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative h-full w-full flex items-baseline justify-center"
            >
              <div className="mt-6">
                <div className="feature-img-bg w-full h-full">
                  <Image
                    src={showcaseItems[activeIndex].media}
                    alt={showcaseItems[activeIndex].title}
                    width={500}
                    height={400}
                    className="max-w-full object-contain w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionReveal>
  );
};

export default Showcase;
