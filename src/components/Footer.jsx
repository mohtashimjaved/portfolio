"use client";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-sky-500/15 bg-[#050811] overflow-hidden pt-12 sm:pt-16 pb-8">
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-white/8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 font-mono font-bold text-xs group-hover:bg-sky-400 group-hover:text-black transition-all">
                MJ
              </div>
              <span className="font-heading font-semibold text-lg text-white tracking-tight">
                Mohtashim<span className="text-sky-400">.dev</span>
              </span>
            </Link>

            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Full Stack & Mobile Engineer specializing in scalable web systems, React Native mobile apps, and precision user experiences.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              <span>Karachi, Pakistan — Available for global engagements</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-sky-400 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-sky-400 transition-colors">
                  Engineering Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-400 transition-colors">
                  Biography & Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400 transition-colors">
                  Contact Dispatch
                </Link>
              </li>
            </ul>
          </div>

          {/* Channels */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider font-mono">
              Channels
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/mohtashimjaved"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-400/10 transition-all"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohtashim-javed-49917a352/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-400/10 transition-all"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:hafizmohtashim3157@gmail.com"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-400/10 transition-all"
                title="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+923174159475"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-400/10 transition-all"
                title="Phone"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Mohtashim Javed. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-mono text-[11px]">
              Next.js 16 • Three.js • React Native
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center hover:bg-sky-400 hover:text-black transition-all shadow-sm"
              title="Back to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
