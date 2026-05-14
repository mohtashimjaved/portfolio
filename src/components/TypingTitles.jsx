"use client";
import { useState, useEffect } from "react";

export default function TypingTitles() {
  const titles = [
    "Full Stack Developer.",
    "MERN Stack Expert.",
    "React Native Developer.",
    "UI/UX Enthusiast."
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = titles[currentTitleIndex];

    if (!isDeleting && currentText === fullText) {
      // Pause at the end
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      setTypingSpeed(100); // reset typing speed
    } else {
      timer = setTimeout(
        () => {
          setCurrentText((prev) =>
            isDeleting
              ? fullText.substring(0, prev.length - 1)
              : fullText.substring(0, prev.length + 1)
          );
          setTypingSpeed(isDeleting ? 40 : 100);
        },
        typingSpeed
      );
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  return (
    <h2 className="text-2xl md:text-3xl font-medium text-gray-300 min-h-[40px]">
      I am a <span className="text-white font-bold inline-block relative after:content-['|'] after:animate-blink-cursor">
        {currentText}
      </span>
    </h2>
  );
}
