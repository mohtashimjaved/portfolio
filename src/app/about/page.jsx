"use client";
import { motion } from "framer-motion";
import { Code2, Server, Smartphone, Database, Layout, Terminal as TerminalIcon, CheckCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import InteractiveTerminal from "../../components/InteractiveTerminal";
import { TechIcon } from "../../components/TechLogos";

export default function About() {
  const skillCategories = [
    {
      category: "Frontend & Architecture",
      icon: Layout,
      skills: [
        { name: "React 19 / Next.js 16", level: "95%" },
        { name: "Tailwind CSS / PostCSS", level: "95%" },
        { name: "Three.js & WebGL Graphics", level: "85%" },
        { name: "Framer Motion & Micro-interactions", level: "90%" },
        { name: "TypeScript & ES6+", level: "92%" },
      ],
    },
    {
      category: "Backend & Cloud Services",
      icon: Server,
      skills: [
        { name: "Node.js & Express.js", level: "90%" },
        { name: "RESTful API Architecture", level: "95%" },
        { name: "JWT Auth & Role Permissions", level: "90%" },
        { name: "Serverless Deployment (Vercel)", level: "85%" },
      ],
    },
    {
      category: "Databases & Storage",
      icon: Database,
      skills: [
        { name: "MongoDB & Mongoose ODM", level: "90%" },
        { name: "PostgreSQL & Supabase", level: "88%" },
        { name: "Redis Caching Layers", level: "80%" },
      ],
    },
    {
      category: "Mobile Application Dev",
      icon: Smartphone,
      skills: [
        { name: "React Native (iOS & Android)", level: "88%" },
        { name: "Expo Toolchain & Native APIs", level: "90%" },
        { name: "Cross-Platform State Systems", level: "88%" },
      ],
    },
  ];

  const milestones = [
    {
      year: "2024 - PRESENT",
      title: "Full Stack & Mobile Engineer",
      desc: "Engineered scalable web applications (NexusTrade, Helplytics) and cross-platform React Native mobile solutions adhering to clean architectural principles and performance metrics.",
    },
    {
      year: "2023 - 2024",
      title: "Web Engineering & Ecosystem Specialization",
      desc: "Deep focus on Next.js App Router, Tailwind CSS component systems, state management, and real-time database integrations with Supabase and MongoDB.",
    },
  ];

  return (
    <section className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20 relative overflow-hidden bg-[#060913] cosmic-grid-bg">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-[11px] sm:text-xs uppercase tracking-wider">
            <Sparkles size={13} className="text-sky-400" />
            Profile & Technical Mastery
          </span>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            About <span className="text-glow-accent">Mohtashim Javed</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Full Stack Software Engineer committed to building robust web platforms, cross-platform mobile apps, and refined digital experiences.
          </p>
        </motion.div>

        {/* Bio Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Avatar Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <div className="w-full h-full glass-panel rounded-2xl border border-sky-500/20 overflow-hidden p-2 shadow-[0_0_40px_rgba(14,165,233,0.15)]">
                <div className="w-full h-full relative rounded-xl overflow-hidden bg-[#090e1c]">
                  <Image
                    src="/assets/image.webp"
                    alt="Mohtashim Javed"
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-cover transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/70 via-transparent to-transparent opacity-80" />
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Full Stack & Mobile Engineer
            </h2>

            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am <strong className="text-sky-300 font-semibold">Mohtashim Javed</strong>, a dedicated software engineer with deep specialization in high-performance web systems and cross-platform mobile engineering.
              </p>
              <p>
                My technical stack is centered around the <strong className="text-white">MERN stack (MongoDB, Express, React, Node.js)</strong>, Next.js 16, and <strong className="text-white">React Native with Expo</strong>. I design clean, maintainable systems that scale effortlessly under real-world workloads.
              </p>
              <p>
                Whether architecting real-time database pipelines or building fluid 3D WebGL interfaces, my goal is always to deliver software that is as dependable under the hood as it is stunning to the user.
              </p>
            </div>

            {/* Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {[
                { title: "Clean Architecture", desc: "Modular, tested, and maintainable" },
                { title: "Peak Performance", desc: "Fast load times & 60fps WebGL" },
                { title: "Precision UX", desc: "Pixel-perfect mobile & web design" },
              ].map((p, i) => (
                <div key={i} className="p-3.5 rounded-xl glass-panel border border-sky-500/15 space-y-1 hover:border-sky-400/30 transition-colors">
                  <h4 className="text-xs font-semibold text-white font-heading flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-sky-400" /> {p.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-normal">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Matrix */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400">
              // TECHNICAL CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Technical Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.category}
                  className="glass-panel p-6 rounded-2xl border border-sky-500/15 space-y-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold font-heading text-white">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {cat.skills.map((s) => (
                      <div key={s.name} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-slate-200 flex items-center gap-2">
                            <TechIcon name={s.name} size={15} />
                            <span>{s.name}</span>
                          </span>
                          <span className="text-sky-400 font-semibold">{s.level}</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div
                            style={{ width: s.level }}
                            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-300 shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career Timeline */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400">
              // MILESTONES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Experience Roadmap
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl glass-panel border border-sky-500/15 flex flex-col sm:flex-row items-start gap-5 hover:border-sky-400/30 transition-colors"
              >
                <div className="px-3.5 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono font-semibold shrink-0">
                  {m.year}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold font-heading text-white">{m.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Terminal */}
        <div className="space-y-4 pt-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center justify-center gap-1.5">
              <TerminalIcon size={13} /> Interactive CLI
            </span>
            <h2 className="text-2xl font-bold font-heading text-white">
              Command Line System
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <InteractiveTerminal />
          </div>
        </div>

      </div>
    </section>
  );
}
