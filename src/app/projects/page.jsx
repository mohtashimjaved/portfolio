"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  // Framer Motion transition configurations
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 }
    },
    exit: (direction) => ({
      x: direction > 0 ? -150 : 150,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 }
    })
  };

  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-12 flex-grow flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my best work. Browse through this custom built showcase.
          </p>
        </motion.div>

        {/* Custom Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center px-0 md:px-20">
          
          {/* Navigation Buttons (Desktop side buttons) */}
          <button 
            onClick={prevProject}
            className="hidden md:flex absolute left-0 z-20 w-14 h-14 rounded-full glass items-center justify-center text-white hover:bg-accent hover:text-white hover:border-accent transition-all hover:scale-110 active:scale-95"
            aria-label="Previous project"
          >
            <ChevronLeft size={30} />
          </button>

          <button 
            onClick={nextProject}
            className="hidden md:flex absolute right-0 z-20 w-14 h-14 rounded-full glass items-center justify-center text-white hover:bg-accent hover:text-white hover:border-accent transition-all hover:scale-110 active:scale-95"
            aria-label="Next project"
          >
            <ChevronRight size={30} />
          </button>

          {/* Project Card */}
          <div className="relative w-full h-[650px] lg:h-[550px] perspective-1000">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full glass rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col lg:flex-row group"
              >
                {/* Image Section */}
                <div className="relative w-full lg:w-1/2 h-64 lg:h-full bg-gray-900 overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0b0f19] to-transparent z-10 opacity-60 lg:opacity-80" />
                  <Image 
                    src={currentProject.image} 
                    alt={currentProject.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-accent font-bold tracking-widest text-sm shadow-xl shadow-black/50">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center flex-grow bg-[#0b0f19]/80 backdrop-blur-sm">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {currentProject.title}
                  </h3>
                  
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                    {currentProject.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentProject.tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1.5 text-xs md:text-sm font-semibold glass border border-white/10 rounded-full text-white/90">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <Link 
                      href={currentProject.demo} 
                      target="_blank" 
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3.5 px-6 bg-accent text-white rounded-2xl font-bold hover:bg-accent-hover transition-all active:scale-95 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </Link>
                    <Link 
                      href={currentProject.github} 
                      target="_blank" 
                      className="flex items-center justify-center gap-2 py-3.5 px-6 glass rounded-2xl text-white hover:text-accent hover:border-accent transition-all active:scale-95"
                    >
                      <Github size={20} />
                      <span>Source</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Controls & Pagination */}
        <div className="flex items-center gap-6 mt-8">
          <button 
            onClick={prevProject}
            className="md:hidden w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-accent active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-accent" : "w-2 bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextProject}
            className="md:hidden w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-accent active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
}
