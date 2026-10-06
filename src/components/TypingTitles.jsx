"use client";
import { useState, useEffect } from "react";
import { Code2, Smartphone, Globe, Sparkles } from "lucide-react";

export default function TypingTitles() {
  const titles = [
    { text: "Full Stack MERN Engineer", icon: Code2, color: "text-sky-400", bg: "bg-sky-400/15" },
    { text: "React Native Mobile Developer", icon: Smartphone, color: "text-emerald-400", bg: "bg-emerald-400/15" },
    { text: "Next.js & Cloud Systems Architect", icon: Globe, color: "text-indigo-400", bg: "bg-indigo-400/15" },
    { text: "Interactive 3D WebGL Creator", icon: Sparkles, color: "text-cyan-400", bg: "bg-cyan-400/15" },
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(75);

  useEffect(() => {
    let timer;
    const fullText = titles[currentTitleIndex].text;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      setTypingSpeed(75);
    } else {
      timer = setTimeout(
        () => {
          setCurrentText((prev) =>
            isDeleting
              ? fullText.substring(0, prev.length - 1)
              : fullText.substring(0, prev.length + 1)
          );
          setTypingSpeed(isDeleting ? 28 : 70);
        },
        typingSpeed
      );
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  const current = titles[currentTitleIndex];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full flex items-center justify-center lg:justify-start min-h-[42px] sm:min-h-[46px] select-none">
      <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#080d1a]/90 border border-sky-400/30 backdrop-blur-xl shadow-[0_0_25px_rgba(14,165,233,0.14)] max-w-full">
        <span className={`flex items-center justify-center w-5 h-5 rounded-full ${current.bg} shrink-0 transition-colors duration-300`}>
          <CurrentIcon size={12} className={`${current.color} shrink-0`} />
        </span>
        <span className="text-slate-400 font-mono text-[11px] sm:text-xs md:text-sm font-medium shrink-0">
          Focus:
        </span>
        <span className="font-mono text-xs sm:text-sm md:text-base font-semibold text-white tracking-tight flex items-center whitespace-nowrap overflow-hidden">
          <span>{currentText}</span>
          <span className="inline-block w-1.5 sm:w-2 h-3.5 sm:h-4 ml-1 bg-sky-400 rounded-sm animate-pulse shadow-[0_0_8px_#38bdf8] shrink-0" />
        </span>
      </div>
    </div>
  );
}
