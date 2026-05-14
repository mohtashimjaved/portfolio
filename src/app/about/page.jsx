"use client";
import { motion } from "framer-motion";
import { Code2, Server, Smartphone, Database, Zap, Layout } from "lucide-react";
import Image from "next/image";

export default function About() {
  const skills = [
    { name: "Frontend Development", icon: Layout, desc: "React, Next.js, TailwindCSS", color: "text-blue-400", bg: "bg-blue-400/10" },
    { name: "Backend Development", icon: Server, desc: "Node.js, Express, Python", color: "text-green-400", bg: "bg-green-400/10" },
    { name: "Database Design", icon: Database, desc: "MongoDB, PostgreSQL, Supabase", color: "text-purple-400", bg: "bg-purple-400/10" },
    { name: "Mobile App Dev", icon: Smartphone, desc: "React Native, Expo", color: "text-pink-400", bg: "bg-pink-400/10" },
    { name: "API Integration", icon: Zap, desc: "RESTful APIs, GraphQL", color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { name: "Clean Code", icon: Code2, desc: "TypeScript, Jest, CI/CD", color: "text-red-400", bg: "bg-red-400/10" },
  ];

  return (
    <section className="min-h-screen pt-32 pb-16 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            About <span className="text-accent">Me</span>
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-600 rounded-3xl rotate-6 opacity-50 blur-lg" />
              <div className="absolute inset-0 glass rounded-3xl border border-white/20 transform -rotate-3 transition-transform hover:rotate-0 duration-500 overflow-hidden z-10 p-2">
                 <div className="w-full h-full relative rounded-2xl overflow-hidden bg-black/50">
                    <Image 
                      src="/assets/image.webp" 
                      alt="Mohtashim Javed" 
                      fill 
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Full Stack & Mobile Developer</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I am <strong className="text-accent">Mohtashim Javed</strong>, a passionate and detail-oriented Full Stack Developer specializing in the MERN stack and React Native. I transition complex problems into elegant, scalable, and high-performance solutions.
              </p>
              <p>
                My journey began with frontend development, where I mastered crafting intuitive user interfaces. Recognizing the need for end-to-end solutions, I evolved into a full-stack engineer, gaining expertise in backend architecture, database modeling, and cross-platform mobile development.
              </p>
              <p>
                Whether it's a responsive web application or a feature-rich mobile app, I focus on writing clean, maintainable code and delivering outstanding user experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="glass p-4 rounded-2xl border-l-4 border-l-accent">
                <h4 className="text-3xl font-black text-white">3+</h4>
                <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">Years Experience</p>
              </div>
              <div className="glass p-4 rounded-2xl border-l-4 border-l-purple-500">
                <h4 className="text-3xl font-black text-white">40+</h4>
                <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-white">My Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div 
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  className="glass p-6 rounded-2xl flex items-start gap-4 group transition-colors hover:bg-white/[0.02]"
                >
                  <div className={`p-3 rounded-xl ${skill.bg} ${skill.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{skill.name}</h4>
                    <p className="text-gray-400 text-sm">{skill.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
