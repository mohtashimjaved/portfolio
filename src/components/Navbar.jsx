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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4 md:pt-6 pointer-events-none">
      <div
        className={clsx(
          "w-full pointer-events-auto transition-all duration-500 ease-out",
          scrolled
            ? "max-w-4xl bg-[#0b0f19]/75 backdrop-blur-2xl border border-white/10 rounded-full py-3 px-6 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            : "max-w-7xl bg-transparent py-4 px-2"
        )}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-white flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="w-8 h-8 rounded-xl bg-gradient-to-tr from-accent to-blue-500 flex items-center justify-center text-black shadow-[0_0_15px_rgba(14,165,233,0.5)] group-hover:shadow-[0_0_25px_rgba(14,165,233,0.8)] transition-shadow"
            >
              M
            </motion.div>
            <span className="hidden sm:block">
              Mohtashim<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-2 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className="relative px-5 py-2 text-sm font-medium uppercase tracking-widest rounded-full transition-colors group"
                >
                  <span className={clsx("relative z-10 transition-colors duration-300", isActive ? "text-white" : "text-gray-400 group-hover:text-white")}>
                    {link.name}
                  </span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-accent/15 border border-accent/20 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  {/* Hover pill */}
                  <div className={clsx(
                    "absolute inset-0 bg-white/5 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300",
                    isActive && "hidden"
                  )} />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white active:scale-95 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-4 right-4 mt-4 pointer-events-auto md:hidden"
          >
            <div className="bg-[#0b0f19]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.7)] flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "flex items-center w-full px-6 py-4 rounded-2xl text-lg font-bold tracking-wide transition-all",
                        isActive ? "bg-accent/15 text-accent border border-accent/20" : "text-gray-300 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
