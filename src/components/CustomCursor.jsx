"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only activate cursor on devices with fine pointer (mouse)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("custom-cursor-active");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isVisible = false;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        ringX = mouseX;
        ringY = mouseY;
      }

      // Direct zero-latency GPU transform for the inner precision dot
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const interactive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer");

      if (interactive !== isHovered) {
        isHovered = !!interactive;
        if (isHovered) {
          ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(1.85)`;
          ring.style.borderColor = "rgba(56, 189, 248, 0.9)";
          ring.style.backgroundColor = "rgba(14, 165, 233, 0.12)";
        } else {
          ring.style.borderColor = "rgba(56, 189, 248, 0.4)";
          ring.style.backgroundColor = "transparent";
        }
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    // Smooth 120Hz/144Hz lerp animation loop for the outer trailing ring only
    const render = () => {
      if (isVisible) {
        // High responsive lerp factor (0.24) ensures fast follow without sluggish drag
        ringX += (mouseX - ringX) * 0.24;
        ringY += (mouseY - ringY) * 0.24;

        const scale = isHovered ? 1.85 : 1;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      {/* Outer Magnetic Following Ring (GPU accelerated, zero React re-renders) */}
      <div
        ref={ringRef}
        style={{ willChange: "transform, opacity", opacity: 0 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-sky-400/40 pointer-events-none z-[99999] transition-[border-color,background-color] duration-150"
      />

      {/* Inner Precision Dot (Zero latency, direct hardware cursor sync) */}
      <div
        ref={dotRef}
        style={{ willChange: "transform, opacity", opacity: 0 }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-sky-400 pointer-events-none z-[100000] shadow-[0_0_8px_#38bdf8]"
      />
    </>
  );
}
