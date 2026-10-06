"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();
  const [animating, setAnimating] = useState(true);
  const [progress, setProgress] = useState(0);

  const columns = 5;

  useEffect(() => {
    // Unconditionally scroll to top when page changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    setAnimating(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 34;
      });
    }, 45);

    const timer = setTimeout(() => {
      setAnimating(false);
    }, 550);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [pathname]);

  const getPageTitle = (path) => {
    if (path === "/") return "INDEX // OVERVIEW";
    if (path === "/projects") return "PROJECTS // DIRECTORY";
    if (path === "/about") return "BIOGRAPHY // MATRIX";
    if (path === "/contact") return "COMMUNICATIONS // DISPATCH";
    return "PORTFOLIO // SYSTEM";
  };

  return (
    <>
      {/* Precision Multi-Column Architectural Shutter Transition */}
      <AnimatePresence mode="wait">
        {animating && (
          <div className="fixed inset-0 z-[9999] pointer-events-none flex">
            {[...Array(columns)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.04,
                  ease: [0.85, 0, 0.15, 1],
                }}
                className="flex-1 h-full bg-[#060913] origin-top border-r border-sky-500/10 last:border-r-0"
              />
            ))}

            {/* Central Architectural HUD Indicator */}
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="flex flex-col items-center gap-2 px-6 py-2.5 rounded-full bg-[#080d1a]/90 border border-sky-500/20 backdrop-blur-2xl shadow-[0_0_30px_rgba(14,165,233,0.15)]">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-200">
                    {getPageTitle(pathname)}
                  </span>
                  <span className="font-mono text-xs font-bold text-sky-400">
                    {progress}%
                  </span>
                </div>
                {/* Hairline precision progress track */}
                <div className="w-36 h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-sky-400 to-indigo-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Page Content Entrance */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.45,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full flex-grow flex flex-col"
      >
        {children}
      </motion.div>
    </>
  );
}
