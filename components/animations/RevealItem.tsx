"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export const RevealItem = ({ children, delay = 0, className }: Props) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay,
      }}
      viewport={{ once: true }}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
};
