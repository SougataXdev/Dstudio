"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("hasLoaded");
    }
    return true;
  });
  const [hasLoaded] = useState(() => {
    if (typeof window !== "undefined") {
      return !!sessionStorage.getItem("hasLoaded");
    }
    return false;
  });

  useEffect(() => {
    if (hasLoaded) return;

    // Simulate loading progress
    const duration = 2500; 
    const interval = 25; 
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment + Math.random() * 2;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [hasLoaded]);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("hasLoaded", "true");
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (hasLoaded) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-linear-to-br from-purple-600/20 via-transparent to-transparent rounded-full blur-3xl"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            <motion.div
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-linear-to-tl from-blue-600/20 via-transparent to-transparent rounded-full blur-3xl"
              animate={{
                rotate: -360,
                scale: [1, 1.3, 1],
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-12">
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[120px] md:text-[180px] font-bold text-white leading-none tracking-tighter font-(family-name:--font-graphik)">
                {Math.floor(progress)}
              </span>
              <span className="absolute -right-8 md:-right-12 top-4 md:top-8 text-3xl md:text-5xl font-light text-white/60">
                %
              </span>
            </motion.div>

            <div className="w-64 md:w-80 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-linear-to-r from-purple-500 via-pink-500 to-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <motion.div
              className="flex flex-col items-center gap-2 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-white/40 text-sm tracking-[0.3em] uppercase font-(family-name:--font-graphik)">
                Made with love{" "}
                <motion.span
                  className="inline-block text-red-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ❤️
                </motion.span>{" "}
                by
              </p>
              <motion.p
                className="text-white text-xl md:text-2xl font-semibold tracking-wide font-(family-name:--font-graphik)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                SougataXdev
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
