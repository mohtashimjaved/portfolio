import { useEffect, useState } from "react";

const titles = [
  "Frontend Engineer",
  "React & Tailwind Specialist",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

export default function TypingTitles() {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let timeout;

    if (pause) {
      // Pause at full text before deleting
      timeout = setTimeout(() => {
        setPause(false);
        setDeleting(true);
      }, 1000); // 1 second pause at full title
    } else {
      const speed = deleting ? 50 : 100;

      timeout = setTimeout(() => {
        const currentTitle = titles[titleIndex];

        if (!deleting) {
          setText(currentTitle.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          if (charIndex + 1 === currentTitle.length) {
            // Pause before deletion
            setPause(true);
          }
        } else {
          setText(currentTitle.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex - 1 === 0) {
            setDeleting(false);
            setTitleIndex((titleIndex + 1) % titles.length);
          }
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex, pause]);

  return (
    <p className="mt-4 text-accent text-xl md:text-2xl font-medium h-8 whitespace-nowrap overflow-hidden">
      {text}
      <span className="inline-block animate-blink-cursor bg-accent w-[0.65ch] ml-1">&nbsp;</span>
    </p>
  );
}
