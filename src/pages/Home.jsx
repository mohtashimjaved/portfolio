import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../../public/assets/image.webp";
import { Download, Github, Linkedin } from "lucide-react";
import AnimatedTitles from "../components/TypingTitles";
import TypingTitles from "../components/TypingTitles";



export default function Home() {
  const [text, setText] = useState("");


  return (
    <section className="py-32">
      {/* 
        Mobile: image first, centered
        Desktop: content left, image right 
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center text-center lg:text-left">

        {/* IMAGE FIRST (MOBILE) */}
        <div className="order-1 lg:order-2 flex justify-center">
          {/* IMAGE + BORDER ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Circular Loader */}
            <motion.div
              className="
                absolute rounded-full
                w-[318px] h-[318px]
                md:w-[460px] md:h-[460px]
                lg:w-[520px] lg:h-[520px]
                p-[3px]
              "
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 16,
                ease: "linear",
              }}
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, var(--color-accent) 20%, transparent 40%, var(--color-accent) 60%, transparent 80%, transparent 100%)",
              }}
            >
              <div className="w-full h-full rounded-full bg-bg" />
            </motion.div>

            {/* Image */}
            <img
              src={profile}
              alt="Profile"
              className="
                relative z-10
                w-70 h-70
                md:w-96 md:h-96
                lg:w-[420px] lg:h-[420px]
                object-cover
                rounded-full
              "
            />
          </motion.div>
        </div>

        {/* CONTENT SECOND (MOBILE) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hello I'm<br />
            <span className="text-accent">Mohtashim Javed</span>
          </h1>

         <TypingTitles/>

          <p className="mt-8 max-w-xl text-gray-400 leading-relaxed">
            I craft high-performance, scalable, and visually refined interfaces
            using modern frontend technologies.
          </p>

          {/* CTA SECTION */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="
      group inline-flex items-center gap-3
      px-8 py-3.5 rounded-full
      bg-accent text-sm font-medium
      shadow-[0_0_30px_rgba(99,102,241,0.35)]
      transition-all duration-300
      hover:shadow-[0_0_45px_rgba(99,102,241,0.55)]
      hover:-translate-y-0.5
      focus:outline-none focus:ring-2 focus:ring-accent/60
    "
            >
              <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>Download Resume</span>
            </a>

            {/* Social Icons */}
            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/mohtashimjaved"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
        group w-11 h-11 rounded-full
        flex items-center justify-center
        border border-white/15
        transition-all duration-300
        hover:border-accent hover:text-accent
        hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-accent/50
      "
              >
                <Github className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-accent" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mohtashim-javed-49917a352/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
        group w-11 h-11 rounded-full
        flex items-center justify-center
        border border-white/15
        transition-all duration-300
        hover:border-accent hover:text-accent
        hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-accent/50
      "
              >
                <Linkedin className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-accent" />
              </a>
            </div>
          </div>


        </motion.div>

      </div>
    </section>
  );
}
