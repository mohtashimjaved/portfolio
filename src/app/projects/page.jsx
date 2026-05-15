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

  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden flex flex-col items-center justify-center bg-[#0b0f19]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Section */}
          <div className="relative z-10 flex flex-col order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col"
              >
                {/* Project Number */}
                <span className="text-outline text-7xl md:text-9xl font-black mb-4 select-none opacity-40">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>

                {/* Project Title */}
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {currentProject.title}
                </h2>

                {/* Tech Stack List */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <span className="text-accent font-bold tracking-widest text-sm uppercase">Tech Stack:</span>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tech.map((tech, index) => (
                      <span key={index} className="text-gray-400 text-sm md:text-base">
                        {tech}{index !== currentProject.tech.length - 1 && ","}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-white/10 mb-10" />

                {/* Actions */}
                <div className="flex items-center gap-6">
                  <Link 
                    href={currentProject.demo} 
                    target="_blank"
                    className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:scale-110 transition-all group"
                    title="Live Demo"
                  >
                    <ExternalLink size={24} className="group-hover:rotate-45 transition-transform" />
                  </Link>
                  <Link 
                    href={currentProject.github} 
                    target="_blank"
                    className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white hover:scale-110 transition-all group"
                    title="Source Code"
                  >
                    <Github size={24} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Image Section */}
          <div className="relative group order-1 lg:order-2">
            <div className="relative aspect-[16/10] w-full glass rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image 
                    src={currentProject.image} 
                    alt={currentProject.title} 
                    fill
                    className="object-fill" 
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls (Bottom Right of Image) */}
            <div className="absolute -bottom-6 right-0 md:right-8 flex gap-2 z-20">
              <button 
                onClick={prevProject}
                className="w-14 h-14 bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors active:scale-90"
                aria-label="Previous project"
              >
                <ChevronLeft size={28} />
              </button>
              <button 
                onClick={nextProject}
                className="w-14 h-14 bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors active:scale-90"
                aria-label="Next project"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>

        </div>

        {/* Project Description */}
        <div className="mt-16 lg:mt-24 max-w-4xl">
          <motion.p 
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
          >
            {currentProject.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
