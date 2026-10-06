"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About & Skills", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4 md:pt-5 pointer-events-none">
      <div
        className={clsx(
          "w-full pointer-events-auto transition-all duration-400 ease-out",
          scrolled
            ? "max-w-4xl bg-[#080d1b]/85 backdrop-blur-2xl border border-sky-500/20 rounded-full py-2.5 px-6 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(14,165,233,0.1)]"
            : "max-w-6xl bg-transparent py-3 px-2"
        )}
      >
        <div className="flex justify-between items-center w-full">
          {/* Executive Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 font-mono font-bold text-xs tracking-tight group-hover:bg-sky-400 group-hover:text-black transition-all shadow-sm">
              MJ
            </div>
            <span className="font-heading font-semibold text-base tracking-tight text-white hidden sm:inline-block">
              Mohtashim<span className="text-sky-400">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1 items-center bg-[#0a0f20]/90 p-1 rounded-full border border-sky-500/15 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className="relative px-4 py-1.5 text-xs font-medium tracking-wide rounded-full transition-colors"
                >
                  <span
                    className={clsx(
                      "relative z-10 transition-colors duration-200",
                      isActive ? "text-sky-300 font-semibold" : "text-slate-400 hover:text-white"
                    )}
                  >
                    {link.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-sky-500/15 border border-sky-400/30 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.2)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Status */}
          <div className="flex items-center gap-3">
            {/* Live Availability Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
              <span className="hidden sm:inline">Available for Hire</span>
              <span className="sm:hidden">Available</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 pointer-events-auto md:hidden"
          >
            <div className="bg-[#090e1c]/95 backdrop-blur-3xl border border-sky-500/20 rounded-2xl p-4 shadow-2xl flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      isActive
                        ? "bg-sky-500/15 text-sky-300 font-semibold border border-sky-400/30"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
