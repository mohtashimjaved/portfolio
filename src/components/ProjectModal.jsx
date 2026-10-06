"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Layers } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { TechIcon } from "./TechLogos";

export default function ProjectModal({ project, onClose }) {
  // Prevent background scroll when modal is active and support Escape key
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 45,
      spread: 65,
      origin: { y: 0.6 },
      colors: ["#38bdf8", "#818cf8", "#ffffff"],
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window with Proper Sizing & Scrollable Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="relative w-full max-w-2xl lg:max-w-3xl max-h-[92vh] sm:max-h-[88vh] flex flex-col bg-[#0a0f1d] border border-sky-500/25 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9),0_0_30px_rgba(14,165,233,0.18)] z-10"
        >
          {/* Header Banner */}
          <div className="relative h-40 sm:h-52 md:h-60 w-full overflow-hidden bg-black shrink-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 672px, 768px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/75 border border-sky-500/30 text-white flex items-center justify-center hover:bg-sky-400 hover:text-black transition-colors z-20 shadow-lg"
              title="Close modal (Esc)"
            >
              <X size={16} />
            </button>

            {/* Category Chip */}
            <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#080d1a]/90 border border-sky-500/30 text-[10px] sm:text-[11px] font-mono font-medium text-sky-300 backdrop-blur-md shadow-md">
              {project.category}
            </div>
          </div>

          {/* Scrollable Modal Body */}
          <div className="p-4 sm:p-6 md:p-7 overflow-y-auto flex-grow space-y-5 sm:space-y-6">
            <div>
              <span className="text-[11px] sm:text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
                {project.subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-white mt-1">
                {project.title}
              </h3>
            </div>

            {/* Extended Project Description */}
            <div className="space-y-1.5 sm:space-y-2">
              <h4 className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                System Overview:
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Key Capabilities / Features */}
            {project.features && (
              <div className="space-y-2.5 sm:space-y-3 pt-1">
                <h4 className="text-[11px] sm:text-xs font-semibold text-sky-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Sparkles size={13} className="text-sky-400 shrink-0" /> Key Architectural Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-sky-500/15 text-[11px] sm:text-xs text-slate-200"
                    >
                      <CheckCircle2 size={14} className="text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack Pills */}
            <div className="space-y-2 pt-1">
              <h4 className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Layers size={13} className="text-sky-400 shrink-0" /> Technologies & Frameworks:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 text-[11px] sm:text-xs font-mono font-medium"
                  >
                    <TechIcon name={t} size={13} />
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky/Fixed Footer Actions Bar */}
          <div className="p-3.5 sm:px-6 sm:py-4 bg-[#080d1a] border-t border-sky-500/20 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                onClick={triggerConfetti}
                className="flex-1 sm:flex-none justify-center px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 text-black font-bold font-heading text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:shadow-[0_0_25px_rgba(56,189,248,0.7)] hover:scale-105 active:scale-95 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none justify-center px-4 sm:px-5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white font-medium font-heading text-xs flex items-center gap-2 hover:bg-white/10 hover:border-sky-400/40 transition-all"
              >
                <Github size={13} />
                <span>Source Code</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white transition-colors font-mono hidden sm:inline-block"
            >
              Close (Esc)
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
