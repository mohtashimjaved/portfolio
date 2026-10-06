"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight, LayoutGrid, Layers, Search, Sparkles } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";

import { projects } from "../../data/projects";
import ProjectModal from "../../components/ProjectModal";
import { TechIcon } from "../../components/TechLogos";

export default function Projects() {
  const [viewMode, setViewMode] = useState("carousel");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Full Stack MERN", "Interactive Apps"];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const currentProject = filteredProjects[currentIndex] || projects[0];

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#38bdf8", "#818cf8", "#ffffff"],
    });
  };

  return (
    <section className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20 relative overflow-hidden bg-[#060913] cosmic-grid-bg">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2.5 sm:space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-[11px] sm:text-xs uppercase tracking-wider">
            <Sparkles size={13} className="text-sky-400" />
            Engineering Catalog
          </span>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Featured <span className="text-glow-accent">Projects</span> & Systems
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Full-stack web applications, real-time developer hubs, and cross-platform tools engineered for production performance.
          </p>
        </motion.div>

        {/* Filter Bar & View Toggle */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10 p-2.5 sm:p-3 rounded-2xl glass-panel border border-sky-500/20 shadow-[0_0_25px_rgba(14,165,233,0.08)]">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-sky-400 to-sky-500 text-black shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box and Mode Switch */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sky-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentIndex(0);
                }}
                placeholder="Search tech, stack, or title..."
                className="w-full bg-[#080d1a] border border-sky-500/20 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-all font-mono"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-[#080d1a] p-1 rounded-xl border border-sky-500/15 shrink-0">
              <button
                onClick={() => setViewMode("carousel")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "carousel"
                    ? "bg-sky-500/20 text-sky-300 border border-sky-400/40"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                title="Carousel Mode"
              >
                <Layers size={15} />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid"
                    ? "bg-sky-500/20 text-sky-300 border border-sky-400/40"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                title="Grid Mode"
              >
                <LayoutGrid size={15} />
              </button>
            </div>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-2xl space-y-3">
            <p className="text-slate-300 font-mono text-xs">No matching projects found.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl bg-sky-400 text-black font-semibold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "carousel" ? (
          /* Architectural Slider Mode */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[440px]">
            
            {/* Left Info */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 25 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 sm:space-y-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-outline-cyan font-mono text-4xl sm:text-6xl font-black">
                      {String(currentIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-300 text-[11px] sm:text-xs font-mono font-medium">
                      {currentProject.category}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] sm:text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                      {currentProject.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mt-1 leading-tight">
                      {currentProject.title}
                    </h2>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {currentProject.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Technologies & Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentProject.tech.map((t, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 text-[11px] sm:text-xs font-mono"
                        >
                          <TechIcon name={t} size={13} />
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3 border-t border-white/8">
                    <a
                      href={currentProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={triggerConfetti}
                      className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 text-black font-bold font-heading text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:shadow-[0_0_25px_rgba(56,189,248,0.7)] hover:scale-105 active:scale-95 transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={13} />
                    </a>

                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-sky-400 hover:text-black hover:border-sky-400 transition-all shadow-md"
                      title="Source Code"
                    >
                      <Github size={17} />
                    </a>

                    <button
                      onClick={() => setSelectedProject(currentProject)}
                      className="text-xs text-sky-400 hover:text-sky-300 underline font-mono ml-auto font-medium"
                    >
                      Technical Overview
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative group">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden glass-panel border border-sky-500/20 shadow-[0_0_40px_rgba(14,165,233,0.15)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={() => setSelectedProject(currentProject)}
                  >
                    <Image
                      src={currentProject.image}
                      alt={currentProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-end gap-2.5 mt-4 sm:mt-5">
                <button
                  onClick={prevProject}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-300 flex items-center justify-center hover:bg-sky-400 hover:text-black transition-all active:scale-95 shadow-sm"
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-xs font-mono text-sky-300 font-bold px-3">
                  {currentIndex + 1} / {filteredProjects.length}
                </span>
                <button
                  onClick={nextProject}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-300 flex items-center justify-center hover:bg-sky-400 hover:text-black transition-all active:scale-95 shadow-sm"
                  aria-label="Next"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Grid Mode */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group border border-white/10 hover:border-sky-400/40"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c] via-transparent to-transparent opacity-85" />
                  <span className="absolute top-3 left-3 px-2.5 sm:px-3 py-1 rounded-md bg-[#080d1a]/85 border border-sky-500/30 text-[10px] sm:text-[11px] font-mono text-sky-300 font-medium shadow-md">
                    {p.category}
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-3.5 sm:space-y-4">
                  <div>
                    <h3 className="text-base font-bold font-heading text-white group-hover:text-sky-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-slate-400 text-xs line-clamp-2 mt-1 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3 pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.04] border border-white/8 text-[10px] sm:text-[11px] font-mono text-slate-300">
                          <TechIcon name={t} size={12} />
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] sm:text-xs text-sky-400 font-mono font-semibold">
                      <span>View Specifications</span>
                      <ExternalLink size={13} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
