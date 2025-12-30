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
    <section className="min-h-screen px-4 sm:px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 md:gap-20">


        <div className="flex flex-col gap-4 items-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`h-12 w-[300px] md:h-12 rounded text-sm font-medium transition-all
        ${active === tab
                  ? "bg-accent text-black"
                  : "bg-[#27272c] text-white"
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="max-w-3xl"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5">
                  About Me
                </h2>

                <p className="mb-6 text-gray-400 leading-relaxed text-sm md:text-base">
                  I’m a frontend developer who focuses on building modern,
                  scalable, and user-friendly interfaces. I enjoy translating
                  complex ideas into clean UI systems using React, Tailwind CSS,
                  and motion to enhance usability.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm">
                  <p className="text-gray-400">
                    Name <span className="ml-2 text-white">Mohtashim Javed</span>
                  </p>
                  <p className="text-gray-400">
                    Phone <span className="text-white ml-2 ">+92 317 4159475</span>
                  </p>
                  <p className="text-gray-400">
                    Freelance <span className="text-white ml-2">Available</span>
                  </p>
                  <p className="text-gray-400 break-all">
                    Email{" "}
                    <span className="text-white ml-2">
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="max-w-3xl"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5">
                  Education
                </h2>

                <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                  My academic journey provided a strong foundation in web
                  technologies and frontend development practices.
                </p>

                <div className=" flex flex-wrap gap-4">
                  {[
                    ["Web & App Development", "Saylani Mass IT Training",  "2025 - Present"],
                    ["Matriculation", "Private",  "2024 - 2026"],
                    ["Intermediate in Islamiat", "Jamia-Tul-Madina", "2024 - 2026"],
                  ].map(([title, inst, year]) => (
                    <div key={title} className="bg-[#27272c] p-7 w-full h-32 lg:w-[45%] h-48 rounded align-middle">
                      <p className="text-accent text-xs mt-1">{year}</p>
                      <h3 className="text-white font-medium text-[20px] my-2 ">{title}</h3>
                      <p className="text-gray-400 text-sm mt-1"> {inst}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* SKILLS */}
            {active === "Skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="max-w-3xl"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5">
                  Skills
                </h2>

                <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                  Technologies and tools I use to build modern web applications.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
                      h-24 sm:h-28 lg:h-32 rounded-xl bg-[#27272c] text-white transition hover:text-accent "
                    >
                      <Icon className="text-4xl sm:text-5xl md:text-[50px] lg:text-6xl" />

                      {/* TOOLTIP (INSIDE TOP) */}
                      <span
                        className="absolute top-[-30px] text-[12px] opacity-0 rubik
                        group-hover:opacity-100 transition
                        bg-white text-black px-2 py-1 rounded-md"
                      >
                        {name}
                      </span>
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
