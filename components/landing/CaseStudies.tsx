"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { SectionReveal } from "../animations/SectionReveal";
import { RevealItem } from "../animations/RevealItem";
import { StaggerGroup, staggerItem } from "../animations/StaggerGroup";
import { motion } from "motion/react";

type Props = {};

const CaseStudies = (props: Props) => {
  const caseStudies = [
    {
      id: 1,
      title: "Taskade",
      description: "The ultimate to-do list app for managing tasks",
      imgSrc: "/alfan.png",

      cta: "View case study",
    },
    {
      id: 2,
      title: "Alfan",
      description: "The Platform for Content Creators",
      imgSrc: "/tasked.png",

      cta: "View case study",
    },
    {
      id: 3,
      title: "Samurai App",
      description: "A.I. Powered Financial Protection",
      imgSrc: "/samurai.png",
      cta: "View case study",
    },
    {
      id: 4,
      title: "Tool Finder",
      description: "The Best Place To Find Productivity Tools",
      imgSrc: "/toolfinder.png",
      cta: "View case study",
    },
  ];

  return (
    <SectionReveal className="px-4 py-10 font-sans">
      <div className="w-full max-w-10/12 mx-auto">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0">
          <RevealItem delay={0.1}>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-sans font-normal max-w-xl tracking-tighter leading-tight">
              A <span className="font-light italic ">Snapshot </span>of Our
              Recent Case Studies
            </p>
          </RevealItem>
          <RevealItem delay={0.15}>
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm sm:text-base">
              View All
            </button>
          </RevealItem>
        </div>
        <StaggerGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-8 md:py-14">
            {caseStudies.map((card) => (
              <motion.div


                key={card.id}
                variants={staggerItem}
                className="flex flex-col overflow-hidden rounded-lg"
              >
                <Image
                  width={600}
                  height={400}
                  alt={card.title}
                  src={card.imgSrc}
                  className="w-full rounded-lg object-cover mb-4 hover:scale-103 transition-all duration-200"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-neutral-900 font-semibold text-xl sm:text-2xl max-w-md mb-4">
                  {card.description}
                </p>
                <button className="flex gap-2 items-center text-black font-medium hover:gap-3 transition-all text-sm sm:text-base">
                  {card.cta} <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </StaggerGroup>
      </div>
    </SectionReveal>
  );
};

export default CaseStudies;
