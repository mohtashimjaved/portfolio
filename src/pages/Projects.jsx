import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-bg">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
  {projects.map(project => (
    <motion.div
      key={project.id}
      className="bg-gray-900 rounded-xl shadow-lg flex flex-col overflow-hidden w-full transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-white text-lg font-semibold">{project.title}</p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <p className="text-gray-400 mb-4">{project.description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="px-2 py-1 bg-gray-700 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-auto flex-wrap">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-accent text-sm font-medium hover:opacity-90 transition"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded border border-white/20 text-sm hover:border-accent hover:text-accent transition"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  ))}
</div>

    </section>
  );
}
