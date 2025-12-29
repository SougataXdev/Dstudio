"use client";

import React from "react";
import Capsule from "../ui/Capsule";
import { SectionReveal } from "../animations/SectionReveal";
import { RevealItem } from "../animations/RevealItem";
import { StaggerGroup, staggerItem } from "../animations/StaggerGroup";
import { motion } from "motion/react";

type Props = {};

const Faq = (props: Props) => {
  const faqs = [
    {
      id: 1,
      title: "How to begin with the project?",
      desc: "To embark on a collaborative project, simply visit our website and access our contact form to get in touch. We collaborate with you to outline the project scope and determine how we can assist you with our services. We will provide you with a cost estimate, prepare a comprehensive statement of work, and schedule kickoff calls with our respective teams. Once all the necessary paperwork is completed and the deposit payment is settled, we dive right into the project, ready to deliver exceptional results.",
    },
    {
      id: 2,
      title: "How do you charge for the project?",
      desc: "We provide our clients with a range of flexible billing options tailored to their needs. These include fixed project fees, hourly rates, as well as monthly and yearly retainers for research, design, and development services. Our goal is to ensure that our billing structures align with the specific requirements of each client, fostering transparency and delivering value for the services rendered.",
    },
    {
      id: 3,
      title: "What's included in the Test Task?",
      desc: "For the Test Task, we operate on a fixed-cost basis, focusing solely on the visual design aspect based on the brief you provided. The goal is to showcase our design quality before proceeding with a larger project. The final deliverable includes the source file, but the service does not cover wireframing, revisions, or responsive design.",
    },
    {
      id: 4,
      title: "What are the services you offer?",
      desc: "We provide an extensive array of services encompassing research, UI/UX design, branding, motion design, as well as frontend and backend development for mobile, web, and diverse devices. Our comprehensive offerings cater to a broad spectrum of client needs and ensure holistic solutions for their digital endeavors.",
    },
    {
      id: 5,
      title: "Where is DstudioAgency located?",
      desc: "We have a strong presence with offices in both New Delhi, India, and Salt Lake City, Utah. Our dual locations allow us to cater to clients from diverse regions and provide localized support and expertise.",
    },
  ];
  return (
    <SectionReveal className="w-full flex flex-col items-center min-h-screen font-sans p-4 md:p-6">
      <RevealItem delay={0.1}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center max-w-md font-semibold pt-10 md:pt-16 tracking-tighter leading-tight">
          Frequently Asked Questions
        </h1>
      </RevealItem>
      <div className="max-w-4xl w-full mt-8 md:mt-15 px-2">
        <StaggerGroup>
          <div className="flex flex-col gap-3 md:gap-4">
            {faqs.map((item) => (
              <motion.div key={item.id} variants={staggerItem}>
                <Capsule title={item.title} desc={item.desc} />
              </motion.div>
            ))}
          </div>
        </StaggerGroup>
      </div>
    </SectionReveal>
  );
};

export default Faq;
