"use client";
import { motion, useAnimation } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import TypingTitles from "../components/TypingTitles";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-accent/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-blue-900/20 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-6 backdrop-blur-md"
          >
            Welcome to my portfolio
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4 tracking-tighter">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              Mohtashim Javed
            </span>
          </h1>

          {/* Typing Effect Container */}
          <div className="h-12 mb-6 w-full flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <TypingTitles />
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="max-w-xl text-gray-400 leading-relaxed text-lg mb-10"
          >
            I specialize in building high-performance, scalable web applications and cross-platform mobile experiences using the MERN stack and React Native.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-5"
          >
            <a
              href="/resume.pdf"
              download
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <Download className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
              <span className="relative z-10 group-hover:text-white transition-colors">Download Resume</span>
            </a>

            <div className="flex gap-4">
              <Link
                href="https://github.com/mohtashimjaved"
                target="_blank"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohtashim-javed-49917a352/"
                target="_blank"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Avatar Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center perspective-1000">
            
            {/* Animated Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-accent/30 rounded-full border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border border-blue-500/20 rounded-full border-dashed"
            />
            
            {/* Advanced Avatar Container with Hover Effects */}
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                rotateY: 15,
                rotateX: -10,
                boxShadow: "0 25px 50px -12px rgba(14, 165, 233, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full p-2 bg-gradient-to-tr from-accent via-blue-600 to-purple-600 shadow-[0_0_40px_rgba(14,165,233,0.3)] cursor-pointer transform-gpu preserve-3d"
            >
              <div className="absolute inset-0 rounded-full bg-black/40 backdrop-blur-sm -z-10" />
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-black relative">
                <Image
                  src="/assets/image.webp"
                  alt="Mohtashim Javed"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-black border border-white/10 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Available for work</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
