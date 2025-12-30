import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiGithub,
} from "react-icons/si";

const tabs = ["About Me", "Education", "Skills"];

export default function About() {
  const [active, setActive] = useState("About Me");

  return (
    <section className="min-h-screen px-6 md:px-10 py-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[260px_1fr] gap-20">
        {/* LEFT TABS */}
        <div className="flex md:flex-col gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`h-12 rounded-xl text-sm font-medium transition-all
                ${active === tab
                  ? "bg-accent text-black"
                  : "bg-[#27272c] text-white hover:bg-[#32323a]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {/* ABOUT */}
            {active === "About Me" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-semibold text-white mb-6">
                  About Me
                </h2>

                <p className="mb-5 text-gray-400 leading-relaxed">
                  I’m a frontend developer who focuses on building modern,
                  scalable, and user-friendly interfaces. I enjoy translating
                  complex ideas into clean UI systems using React, Tailwind CSS,
                  and motion to enhance usability. My approach emphasizes
                  performance, accessibility, and attention to detail while
                  delivering visually refined web experiences.
                </p>
                <div className="grid grid-cols-2 gap-y-4 text-x1">
                  <p className="text-gray-400">
                    Name <span className="text-white">Mohtashim Javed</span>
                  </p>
                  <p className="text-gray-400">
                    Phone <span className="text-white">+92 317 4159475</span>
                  </p>
                  <p className="text-gray-400">
                    Freelance <span className="text-white text-x1">Available</span>
                  </p>
                  <p className="text-gray-400">
                    Email <span className="text-white">
                      hafizmohtashim3157@gmail.com
                    </span>
                  </p>
                </div>
              </motion.div>
            )}

            {/* EDUCATION */}
            {active === "Education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-semibold text-white mb-6">
                  Education
                </h2>

                <p className="text-gray-400 leading-relaxed mb-10">
                  My academic journey provided a solid foundation in computer
                  science concepts, frontend development practices, and modern
                  web technologies, preparing me to build scalable and
                  maintainable applications.
                </p>

                <div className="space-y-10">
                  <div className="border-l border-white/10 pl-6">
                    <h3 className="text-lg text-white font-medium">
                      Web & App Development
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Saylani Mass IT Training • 2025 - Present
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-6">
                    <h3 className="text-lg text-white font-medium">
                      Matriculation
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Private • 2024 – 2026
                    </p>
                  </div>
                  <div className="border-l border-white/10 pl-6">
                    <h3 className="text-lg text-white font-medium">
                      Intermediate In Islamiat
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Jamia-Tul-Madina • 2024 – 2026
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SKILLS */}
            {active === "Skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-semibold text-white mb-6">
                  Skills
                </h2>

                <p className="text-gray-400 leading-relaxed mb-10">
                  These are the technologies and tools I work with to design,
                  develop, and animate modern web applications efficiently.
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
                  {[
                    { icon: SiHtml5, name: "HTML5" },
                    { icon: SiCss3, name: "CSS3" },
                    { icon: SiJavascript, name: "JavaScript" },
                    { icon: SiTypescript, name: "TypeScript" },
                    { icon: SiReact, name: "React" },
                    { icon: SiTailwindcss, name: "Tailwind CSS" },
                    { icon: SiFramer, name: "Framer Motion" },
                    { icon: SiGithub, name: "Git & GitHub" },
                  ].map(({ icon: Icon, name }) => (
                    <div
                      key={name}
                      className="relative group flex items-center justify-center
                      h-32 rounded-xl bg-[#27272c] text-white transition
                       hover:text-accent"
                    >
                      {/* ICON */}
                      <Icon className="text-6xl" />

                      {/* TOOLTIP (TOP INSIDE) */}
                      <div
                        className="absolute top-[-30px] opacity-0 scale-95
                        group-hover:opacity-100 group-hover:scale-100
                        transition pointer-events-none"
                      >
                        <span className="text-xs bg-white text-black px-3 py-1 rounded-md rubik p-1">
                          {name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
