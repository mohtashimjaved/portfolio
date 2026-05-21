"use client";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <>
      {/* Soft Page Entrance */}
      <div className="w-full min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1], // easeOutExpo
          }}
          className="w-full origin-top"
        >
          {children}
        </motion.div>
      </div>

      {/* Elegant Glass Swipe Wipe */}
      <div className="fixed inset-0 pointer-events-none z-[9999] flex flex-col">
        <motion.div
          initial={{ height: "100vh" }}
          animate={{ height: "0vh" }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="w-full bg-[#0b0f19]/80 backdrop-blur-3xl border-b border-accent/30 shadow-[0_20px_60px_rgba(14,165,233,0.2)] flex items-end justify-center overflow-hidden"
        >
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
        </motion.div>
      </div>
    </>
  );
}
