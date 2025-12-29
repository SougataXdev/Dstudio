"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const SectionReveal = ({ children, className }: Props) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      
    >
      {children}
    </motion.section>
  );
};
