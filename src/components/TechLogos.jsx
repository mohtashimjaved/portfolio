"use client";
import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiThreedotjs,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiRedux,
  SiExpo,
  SiPostman,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const techSkills = [
  {
    name: "React 19",
    category: "Frontend",
    icon: SiReact,
    color: "#61DAFB",
    tag: "Core Library",
    experience: "Production",
  },
  {
    name: "Next.js 16",
    category: "Full Stack",
    icon: SiNextdotjs,
    color: "#FFFFFF",
    tag: "App Router / SSR",
    experience: "Primary",
  },
  {
    name: "React Native",
    category: "Mobile",
    icon: TbBrandReactNative,
    color: "#61DAFB",
    tag: "iOS & Android",
    experience: "Primary",
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: SiTypescript,
    color: "#3178C6",
    tag: "Type Safety",
    experience: "Daily",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
    color: "#5FA04E",
    tag: "Runtime",
    experience: "Production",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
    color: "#E2E8F0",
    tag: "REST APIs",
    experience: "Primary",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    color: "#47A248",
    tag: "NoSQL Database",
    experience: "Primary",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: SiPostgresql,
    color: "#4169E1",
    tag: "Relational SQL",
    experience: "Production",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: SiTailwindcss,
    color: "#38BDF8",
    tag: "Modern Design",
    experience: "Daily",
  },
  {
    name: "Three.js",
    category: "Graphics",
    icon: SiThreedotjs,
    color: "#00DC82",
    tag: "3D WebGL",
    experience: "Interactive",
  },
  {
    name: "Supabase",
    category: "Backend / BaaS",
    icon: SiSupabase,
    color: "#3ECF8E",
    tag: "Realtime & Auth",
    experience: "Production",
  },
  {
    name: "Git / GitHub",
    category: "Version Control",
    icon: SiGit,
    color: "#F05032",
    tag: "CI/CD & Collab",
    experience: "Daily",
  },
  {
    name: "Expo",
    category: "Mobile",
    icon: SiExpo,
    color: "#D1D5DB",
    tag: "Native Toolchain",
    experience: "Production",
  },
  {
    name: "Redux Toolkit",
    category: "State",
    icon: SiRedux,
    color: "#764ABC",
    tag: "Global State",
    experience: "Production",
  },
  {
    name: "Postman",
    category: "Testing",
    icon: SiPostman,
    color: "#FF6C37",
    tag: "API Debugging",
    experience: "Daily",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: SiJavascript,
    color: "#F7DF1E",
    tag: "ES6+ Modern",
    experience: "Mastery",
  },
  {
    name: "HTML5",
    category: "Core Web",
    icon: SiHtml5,
    color: "#E34F26",
    tag: "Semantics & Flex",
    experience: "Mastery",
  },
  {
    name: "CSS3",
    category: "Styling",
    icon: SiCss,
    color: "#2496ED",
    tag: "Styling",
    experience: "Mastery",
  },
];

export function TechIcon({ name, size = 18, className = "" }) {
  const item = techSkills.find(
    (t) => t.name.toLowerCase() === name.toLowerCase() || name.toLowerCase().includes(t.name.toLowerCase())
  );
  if (!item) return null;
  const IconComponent = item.icon;
  return <IconComponent size={size} style={{ color: item.color }} className={className} />;
}
