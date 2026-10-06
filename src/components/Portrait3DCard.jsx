"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, Code2, Cpu } from "lucide-react";

export default function Portrait3DCard() {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleTouchMove = (e) => {
    if (!cardRef.current || !e.touches || !e.touches[0]) return;
    const rect = cardRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = Math.max(-10, Math.min(10, ((y - centerY) / centerY) * -10));
    const rotateY = Math.max(-10, Math.min(10, ((x - centerX) / centerX) * 10));

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleTouchEnd = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[330px] md:max-w-[360px] lg:max-w-[380px] mx-auto flex items-center justify-center select-none py-3 px-2"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle Ethereal Backlight Glow (Human Designer Touch) */}
      <div className="absolute -inset-3 bg-gradient-to-tr from-sky-500/20 via-indigo-500/15 to-transparent rounded-[32px] blur-2xl opacity-75 pointer-events-none" />

      {/* 3D Perspective Card (Clean with No Heavy Background Box) */}
      <div
        ref={cardRef}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.4, 1)",
        }}
        className="relative z-10 w-full aspect-[4/5] rounded-3xl p-1.5 border border-sky-400/35 hover:border-sky-400/60 backdrop-blur-sm shadow-[0_16px_50px_-10px_rgba(14,165,233,0.35)] cursor-pointer group transform-gpu transition-colors duration-300"
      >
        {/* Dynamic Light Glare Reflection Following Mouse */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.45) 0%, transparent 65%)`,
            opacity: glare.opacity,
          }}
        />

        {/* Inner Portrait Container */}
        <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/10 shadow-inner">
          <Image
            src="/assets/image.webp"
            alt="Mohtashim Javed — Full Stack & Mobile Engineer"
            fill
            sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 350px, 380px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />

          {/* Subtle bottom shadow vignette for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85" />

          {/* Corner Architectural Reticles */}
          <div className="absolute top-2.5 left-2.5 font-mono text-[9px] text-sky-400 font-bold opacity-80 select-none">
            ┌ 01
          </div>
          <div className="absolute top-2.5 right-2.5 font-mono text-[9px] text-sky-400 font-bold opacity-80 select-none">
            02 ┐
          </div>
          <div className="absolute bottom-2.5 left-2.5 font-mono text-[9px] text-sky-400 font-bold opacity-80 select-none">
            └ 03
          </div>
          <div className="absolute bottom-2.5 right-2.5 font-mono text-[9px] text-sky-400 font-bold opacity-80 select-none">
            04 ┘
          </div>

          {/* Bottom Identification Tag */}
          <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 bg-[#080d1a]/92 border border-sky-500/35 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center justify-between text-xs shadow-xl">
            <span className="font-mono text-white text-[10px] sm:text-[11px] font-bold tracking-tight">
              Mohtashim Javed
            </span>
            <span className="flex items-center gap-1 sm:gap-1.5 text-sky-300 font-mono text-[9px] sm:text-[10px] font-semibold">
              <Sparkles size={11} className="text-sky-400" /> Full Stack & Mobile
            </span>
          </div>
        </div>

        {/* Floating 3D Satellite Chip 1 (Top-Left Parallax) */}
        <div
          style={{
            transform: `translateZ(30px) translateX(${rotate.y * -0.5}px) translateY(${rotate.x * 0.5}px)`,
          }}
          className="absolute -top-3 -left-2 sm:-left-3.5 bg-[#080d1a]/95 border border-sky-400/40 backdrop-blur-xl px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-2xl flex items-center gap-1.5 transition-transform duration-200 z-30"
        >
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-slate-200 whitespace-nowrap">
            Available for Hire
          </span>
        </div>

        {/* Floating 3D Satellite Chip 2 (Bottom-Right Parallax) */}
        <div
          style={{
            transform: `translateZ(35px) translateX(${rotate.y * 0.6}px) translateY(${rotate.x * -0.6}px)`,
          }}
          className="absolute -bottom-2.5 -right-2 sm:-right-3.5 bg-[#080d1a]/95 border border-indigo-400/40 backdrop-blur-xl px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-2xl flex items-center gap-1.5 transition-transform duration-200 z-30"
        >
          <Code2 size={12} className="text-sky-400 sm:w-3.5 sm:h-3.5" />
          <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-slate-200 whitespace-nowrap">
            MERN • React Native
          </span>
        </div>

        {/* Floating 3D Satellite Chip 3 (Top-Right Subtle Badge) */}
        <div
          style={{
            transform: `translateZ(25px) translateX(${rotate.y * 0.4}px) translateY(${rotate.x * -0.4}px)`,
          }}
          className="absolute -top-2.5 -right-2 sm:-right-3 bg-[#080d1a]/90 border border-sky-500/30 backdrop-blur-md px-2 py-0.5 rounded-lg shadow-lg hidden xs:flex items-center gap-1 transition-transform duration-200 z-30 text-[9px] font-mono text-sky-300"
        >
          <Cpu size={10} className="text-sky-400" />
          <span>Next.js 16</span>
        </div>
      </div>
    </div>
  );
}
