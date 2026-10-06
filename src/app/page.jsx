"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, ArrowRight, Sparkles, Code2, Cpu, Rocket, ShieldCheck, ExternalLink, Terminal as TerminalIcon, Check, Copy, Layers, Zap, Smartphone, Globe, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";

import TypingTitles from "../components/TypingTitles";
import Portrait3DCard from "../components/Portrait3DCard";
import InteractiveTerminal from "../components/InteractiveTerminal";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";
import { techSkills, TechIcon } from "../components/TechLogos";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSkillFilter, setActiveSkillFilter] = useState("All");

  const triggerResumeDownload = () => {
    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#38bdf8", "#818cf8", "#ffffff"],
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("hafizmohtashim3157@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const featuredProjects = projects.filter((p) => p.featured);

  const skillFilterCategories = ["All", "Frontend", "Backend", "Mobile", "Database", "Tools"];

  const filteredSkills = techSkills.filter((s) => {
    if (activeSkillFilter === "All") return true;
    if (activeSkillFilter === "Frontend") return s.category === "Frontend" || s.category === "Styling" || s.category === "Graphics" || s.category === "Core Web";
    if (activeSkillFilter === "Backend") return s.category === "Backend" || s.category === "Full Stack";
    if (activeSkillFilter === "Mobile") return s.category === "Mobile";
    if (activeSkillFilter === "Database") return s.category === "Database" || s.category === "Backend / BaaS";
    if (activeSkillFilter === "Tools") return s.category === "Tools" || s.category === "Version Control" || s.category === "Testing";
    return true;
  });

  const methodology = [
    {
      num: "01",
      title: "System Architecture",
      icon: Layers,
      desc: "Designing modular, clean backend services and relational/NoSQL schemas with MongoDB & PostgreSQL that stay maintainable as data grows.",
    },
    {
      num: "02",
      title: "Speed & Fluidity",
      icon: Zap,
      desc: "Optimizing bundle payloads, server caching, and 60fps GPU hardware-accelerated interfaces with Next.js 16, Three.js, and Framer Motion.",
    },
    {
      num: "03",
      title: "Cross-Platform Native",
      icon: Smartphone,
      desc: "Building production iOS and Android mobile apps using React Native & Expo with smooth native gestures and offline persistence.",
    },
    {
      num: "04",
      title: "Reliability & Standards",
      icon: Globe,
      desc: "Writing tested endpoints, robust error boundaries, strict TypeScript schemas, and automated CI/CD deployments with zero surprises.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060913] cosmic-grid-bg">
      
      {/* Hero Section with Layered Ambient Depth */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-16 px-4 sm:px-6 md:px-12 overflow-hidden">
        
        {/* Subtle Ambient Glowing Orbs */}
        <div className="absolute top-1/4 -left-28 w-96 h-96 bg-sky-500/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-28 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-3xl h-48 bg-sky-400/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6"
          >
            {/* Status Pill with Live Radar Pulse */}
            {/* <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-sky-500/25 bg-[#090e1e]/90 backdrop-blur-md text-sky-300 text-[11px] sm:text-xs font-mono font-medium tracking-wide shadow-[0_0_20px_rgba(14,165,233,0.14)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              </span>
              <span>Available for Remote & Local Roles • Karachi, PK</span>
            </div> */}

            {/* Editorial Heading Structure */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-5 h-[1.5px] bg-sky-400/70 inline-block" />
                <span className="text-xs sm:text-sm font-mono text-sky-400 font-semibold tracking-wider uppercase">
                  Full Stack & Mobile Engineer
                </span>
              </div>

              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.05] text-white">
                Hello, I'm <br />
                <span className="text-glow-accent font-heading font-extrabold filter drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]">
                  Mohtashim Javed
                </span>
              </h1>
            </div>

            {/* Typing Titles (Rock-Solid Alignment & Zero Layout Jitter) */}
            <div className="w-full flex justify-center lg:justify-start pt-0.5">
              <TypingTitles />
            </div>

            {/* Human & Authentic Developer Subtext */}
            <p className="max-w-xl text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal px-2 sm:px-0">
              I build production-grade web systems and fluid iOS/Android mobile apps with <strong className="text-sky-300 font-semibold">Next.js 16, MERN Stack, and React Native</strong> — pairing clean, maintainable backend architecture with delightful 60fps user experiences.
            </p>

            {/* Human Developer Proof Highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 py-1 w-full max-w-lg">
              <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/8 text-center lg:text-left">
                <p className="text-sky-400 font-heading font-bold text-sm sm:text-base">10+ Apps</p>
                <p className="text-[10px] sm:text-[11px] font-mono text-slate-400">Shipped to Prod</p>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/8 text-center lg:text-left">
                <p className="text-emerald-400 font-heading font-bold text-sm sm:text-base">Web + Mobile</p>
                <p className="text-[10px] sm:text-[11px] font-mono text-slate-400">iOS & Android</p>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/8 text-center lg:text-left">
                <p className="text-indigo-400 font-heading font-bold text-sm sm:text-base">Sub-100ms</p>
                <p className="text-[10px] sm:text-[11px] font-mono text-slate-400">Fast APIs</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 w-full sm:w-auto">
              <Link
                href="/projects"
                className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-400 text-black font-bold font-heading text-xs sm:text-sm flex items-center gap-2.5 shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] hover:scale-105 active:scale-95 transition-all group"
              >
                <span>Explore Selected Works</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="/resume.pdf"
                download
                onClick={triggerResumeDownload}
                className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-medium font-heading text-xs sm:text-sm flex items-center gap-2.5 hover:bg-white/10 hover:border-sky-400/40 active:scale-95 transition-all backdrop-blur-md"
              >
                <Download size={15} className="text-sky-300" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Quick Contact Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              <span className="text-xs text-slate-400 font-mono">Connect:</span>
              <a
                href="https://github.com/mohtashimjaved"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-300 hover:text-sky-300 hover:border-sky-400/50 hover:bg-sky-400/10 transition-all shadow-md"
                title="GitHub Profile"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohtashim-javed-49917a352/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-300 hover:text-sky-300 hover:border-sky-400/50 hover:bg-sky-400/10 transition-all shadow-md"
                title="LinkedIn Profile"
              >
                <Linkedin size={17} />
              </a>
              <button
                onClick={copyEmail}
                className="px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-mono text-slate-300 hover:text-sky-300 hover:border-sky-400/40 hover:bg-sky-400/10 transition-all flex items-center gap-1.5"
                title="Click to copy email address"
              >
                {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Primary Stack Quick Logos Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-slate-400">
              <span className="text-[11px] text-slate-500">Primary Stack:</span>
              <div className="flex items-center gap-2">
                {["Next.js 16", "React Native", "TypeScript", "Node.js", "MongoDB"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/8 text-[11px] text-slate-300"
                    title={t}
                  >
                    <TechIcon name={t} size={12} />
                    <span className="hidden sm:inline">{t}</span>
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive 3D Stage & Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center items-center w-full"
          >
            <Portrait3DCard />
          </motion.div>

        </div>
      </section>

      {/* Infinite Tech Marquee Tape with Official Brand Logos */}
      <section className="py-6 border-y border-white/8 bg-[#0a0f1d]/80 overflow-hidden relative backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 mb-3 flex items-center justify-between text-xs text-slate-400 font-mono uppercase tracking-wider">
          <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
            <Cpu size={14} /> Technologies & Tools with Official Brand Logos
          </span>
          <span className="hidden sm:inline text-slate-500 font-mono text-[11px]">
            (Hover to Pause)
          </span>
        </div>

        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee flex items-center gap-3">
            {[...techSkills, ...techSkills].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={i}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/8 text-slate-200 text-xs font-mono font-medium hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-white transition-all whitespace-nowrap cursor-default flex items-center gap-2.5 shadow-sm group"
                >
                  <Icon size={16} style={{ color: tech.color }} className="shrink-0 transition-transform group-hover:scale-115" />
                  <span className="font-semibold text-slate-100">{tech.name}</span>
                  <span className="text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-white/5 border border-white/5 font-mono">
                    {tech.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dedicated Interactive Tech Stack Grid Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
                // TECHNICAL ARSENAL
              </span>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold font-heading text-white mt-1">
                Tools & Frameworks I Build With
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
                Every tool in my stack is chosen for performance, type safety, and real-world developer ergonomics.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#090e1d] border border-white/10 self-start md:self-auto">
              {skillFilterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    activeSkillFilter === cat
                      ? "bg-sky-400 text-black font-semibold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Interactive Tech Cards with Authentic Logos */}
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-white/8 hover:border-sky-400/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between space-y-3 group cursor-default shadow-sm hover:shadow-[0_8px_25px_rgba(14,165,233,0.12)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/8 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                      <Icon size={22} style={{ color: skill.color }} />
                    </div>
                    <span className="text-[9px] font-mono text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-semibold">
                      {skill.experience}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-sm text-white group-hover:text-sky-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5 truncate">
                      {skill.tag}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Principles & Human Craft ("How I Think & Build") */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 relative border-t border-white/8 bg-[#070b16]/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
              // HOW I BUILD SOFTWARE
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold font-heading text-white">
              Engineering Principles with Care
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
              High standards and human empathy guide every project — delivering software that is as dependable under the hood as it is pleasant to use.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {methodology.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.num}
                  className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl flex flex-col justify-between space-y-4 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-sky-400/60 group-hover:text-sky-400 transition-colors">
                      {m.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-110 group-hover:bg-sky-400 group-hover:text-black transition-all">
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-sky-200 transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview Showcase */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 relative border-t border-white/8 bg-[#070b16]/60">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
            <div>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-sky-400">
                // SELECTED WORKS
              </span>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold font-heading text-white mt-1">
                Featured Engineering Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sky-400 hover:text-white text-xs font-mono uppercase tracking-wider group"
            >
              <span>View All 7 Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cards Grid with Tilt Glare */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                }}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group border border-white/10 hover:border-sky-400/40"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent opacity-85" />
                  <span className="absolute top-3 left-3 px-2.5 sm:px-3 py-1 rounded-md bg-[#080d1a]/85 border border-sky-500/30 text-[10px] sm:text-[11px] font-mono text-sky-300 font-semibold shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-3.5 sm:space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs line-clamp-2 mt-1 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3 pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/8 text-[10px] sm:text-[11px] font-mono text-slate-300">
                          <TechIcon name={t} size={12} />
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/8 text-[11px] sm:text-xs text-sky-400 group-hover:text-sky-300 font-mono font-semibold">
                      <span>Inspect Architecture</span>
                      <ExternalLink size={13} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics & Performance Stats Bar */}
      <section className="py-10 sm:py-12 border-y border-white/8 bg-[#090e1b]/80 backdrop-blur-xl px-4 sm:px-6 md:px-12">
        <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
          {[
            { label: "Production Experience", value: "1+ Years", icon: Cpu },
            { label: "Delivered Applications", value: "10+", icon: Rocket },
            { label: "Client Satisfaction", value: "100%", icon: ShieldCheck },
            { label: "Core Competency", value: "MERN & Mobile", icon: Code2 },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl glass-panel border border-white/8"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shadow-sm shrink-0">
                  <Icon size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-2xl font-bold font-heading text-white truncate">{stat.value}</h3>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium truncate">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Developer CLI Terminal Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 relative bg-black/40">
        <div className="container mx-auto max-w-4xl space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center justify-center gap-1.5">
              <TerminalIcon size={13} /> Developer Environment
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Try the Interactive Shell
            </h2>
            <p className="text-slate-400 text-xs px-2">
              Execute live commands in the browser terminal to explore technical details.
            </p>
          </div>

          <InteractiveTerminal />
        </div>
      </section>

      {/* Compelling Call-to-Action Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 relative border-t border-white/8">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-panel p-6 sm:p-10 md:p-12 rounded-3xl border border-sky-500/25 bg-gradient-to-b from-sky-500/10 via-[#0d1424] to-[#060913] text-center space-y-5 sm:space-y-6 relative overflow-hidden shadow-[0_0_60px_rgba(14,165,233,0.15)]">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-[11px] sm:text-xs font-mono">
              <Sparkles size={13} className="text-sky-400" />
              <span>Let's Build Together</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white max-w-xl mx-auto leading-tight">
              Have a Project in Mind or Need a Full-Stack Engineer?
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed px-2">
              Whether you need an enterprise web application, a real-time platform, or a native mobile app, I'm ready to bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 text-black font-bold font-heading text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.7)] hover:scale-105 active:scale-95 transition-all"
              >
                <span>Initiate Contact</span>
                <ArrowRight size={15} />
              </Link>

              <button
                onClick={copyEmail}
                className="w-full sm:w-auto justify-center px-5 sm:px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-medium font-heading text-xs sm:text-sm flex items-center gap-2 hover:bg-white/10 hover:border-sky-400/40 transition-all"
              >
                {copiedEmail ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                <span className="truncate">{copiedEmail ? "Email Copied!" : "hafizmohtashim3157@gmail.com"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
