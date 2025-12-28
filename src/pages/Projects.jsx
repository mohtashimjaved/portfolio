import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="min-h-screen shadow-black shadow-2xl bg-bg rounded-2xl px-4 md:px-10 py-25">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Selected Work
        </h2>
        <p className="text-gray-400 mt-4">
          A curated selection of my recent projects
        </p>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Navigation, EffectCreative]}
        effect="creative"
        centeredSlides
        slidesPerView={1}
        loop
        navigation
        speed={700}
        creativeEffect={{
          prev: {
            translate: ["-120%", 0, -300],
            scale: 0.85,
            opacity: 1,
          },
          next: {
            translate: ["120%", 0, -300],
            scale: 0.85,
            opacity: 1,
          },
        }}
        breakpoints={{
          768: { slidesPerView: 1.3 },
          1024: { slidesPerView: 1.6 },
        }}
        className="max-w-7xl mx-auto "
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-[0_0px_50px_rgba(0,0,0,0.8)]"
            >
              {/* Image */}
              <div className="h-[280px] md:h-[360px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white hover:border-white transition"
                    >
                      <ExternalLink size={18} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
