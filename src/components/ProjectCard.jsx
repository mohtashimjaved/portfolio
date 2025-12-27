import { motion } from "framer-motion";

export default function ProjectCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group glass rounded-2xl p-5"
    >
      <div className="h-40 rounded-xl bg-gradient-to-br from-black/40 to-black/10 mb-5" />

      <h3 className="font-semibold mb-2 group-hover:text-accent transition">
        Project Title
      </h3>

      <p className="text-sm text-gray-400 mb-4">
        A short description explaining what this project solves.
      </p>

      <div className="flex flex-wrap gap-2 text-xs text-accent mb-4">
        <span>React</span>
        <span>Tailwind</span>
        <span>Vite</span>
      </div>

      <button className="text-sm hover:text-accent transition">
        View Code →
      </button>
    </motion.div>
  );
}
