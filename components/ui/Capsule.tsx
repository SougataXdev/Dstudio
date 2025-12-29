"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Props = {
  title: string;
  desc: string;
  className?: string;
};

const Capsule = ({ title, desc, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`cursor-pointer py-6 border border-black rounded-2xl px-10 mt-2  ${className ?? ""}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="w-full flex justify-between items-center">
        <h2 className="pointer-events-none select-none font-semibold text-lg">
          {title}
        </h2>

        <Plus
          size={24}
          strokeWidth={2}
          className={`
            transition-transform duration-300
            ${isOpen ? "rotate-45" : "rotate-0"}
          `}
        />
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            className="select-none overflow-hidden mt-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {desc}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Capsule;
