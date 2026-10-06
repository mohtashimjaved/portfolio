// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "Full Stack Inventory Management System",
    subtitle: "NexusTrade Platform",
    description: "Architected a robust full-stack inventory management platform featuring real-time data tracking, automated stock alerts, low-stock analytics, and a secure dashboard for seamless business operations.",
    fullDescription: "NexusTrade is a enterprise-grade inventory intelligence platform designed to simplify supply chain tracking. It features automated reorder threshold triggers, multi-role authentication, detailed revenue and stock level analytics, and instant transaction reporting.",
    image: "/assets/projects/nexustrade.webp",
    category: "Full Stack MERN",
    featured: true,
    tech: ["Next.js", "Express", "MongoDB", "Node.js", "Tailwind CSS"],
    features: [
      "Real-time Inventory & Stock Tracking",
      "Automated Reorder Alerts & Analytics Dashboard",
      "Secure JWT Authentication & Role Permissions",
      "Exportable CSV/PDF Sales Reports"
    ],
    github: "https://github.com/mohtashimjaved/white-lable-project",
    demo: "https://nexustrade-project.vercel.app"
  },
  {
    id: 2,
    title: "Helplytics Collaborative Developer Platform",
    subtitle: "Q&A & Community Hub",
    description: "Helplytics is a premium, collaborative problem-solving platform designed for tech enthusiasts and developers to seek assistance, share expertise, and build reputation in a high-performance community.",
    fullDescription: "Built with a full MERN stack, Helplytics empowers developers to post technical queries, upvote solutions, earn reputation badges, and filter discussions by tech tags. Features real-time search, code snippet highlighting, and user profiles.",
    image: "/assets/projects/helplytics.webp",
    category: "Full Stack MERN",
    featured: true,
    tech: ["Next.js", "Express", "MongoDB", "Node.js", "Tailwind CSS"],
    features: [
      "Community Technical Q&A with Reputation System",
      "Real-time Search & Filter by Tech Stack",
      "Rich Text Editor with Code Highlighting",
      "User Profiles & Answer Upvoting"
    ],
    github: "https://github.com/mohtashimjaved/helplytics",
    demo: "https://helyplytics.vercel.app"
  },
  {
    id: 3,
    title: "Personal Portfolio Masterpiece",
    subtitle: "Modern 3D Interactive Web App",
    description: "An outclass 3D interactive developer portfolio engineered with Next.js App Router, Three.js WebGL graphics, Framer Motion animations, and futuristic cyber aesthetics.",
    fullDescription: "Designed to showcase high-performance engineering capabilities with custom interactive 3D WebGL particle fields, 3D card tilt physics, embedded developer CLI terminal, and smooth responsive design.",
    image: "/assets/projects/portfolio.webp",
    category: "Interactive Apps",
    featured: false,
    tech: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Interactive 3D WebGL WebGL Background & Geometry",
      "Embedded Interactive Terminal CLI Emulator",
      "3D Tilt Physics & Custom Magnetic Cursor",
      "Responsive Glassmorphic Cyber UI"
    ],
    github: "https://github.com/mohtashimjaved/portfolio",
    demo: "https://mohtashimjaved-portfolio.vercel.app"
  },
  {
    id: 4,
    title: "Interactive Real-time Quiz Platform",
    subtitle: "Arena Quiz Application",
    description: "A sleek, fast, and interactive Quiz Application with real-time scoring, instant leaderboard updates, category filters, and timed challenge modes.",
    fullDescription: "Engineered with React and Supabase, Arena Quiz offers dynamic question pools, category selection, countdown timer animations, and immediate answer verification with statistics breakdown upon completion.",
    image: "/assets/projects/quiz-app.webp",
    category: "Interactive Apps",
    featured: true,
    tech: ["React", "Tailwind CSS", "Supabase", "Framer Motion"],
    features: [
      "Real-time Countdown Timers & Scoring Logic",
      "Multiple Knowledge Categories & Dynamic Question Sets",
      "Instant Answer Verification & Results Breakdown",
      "Persistent High-Score Tracking via Supabase"
    ],
    github: "https://github.com/mohtashimjaved/quiz-app",
    demo: "https://arena-quiz.netlify.app"
  },
  {
    id: 5,
    title: "DevBlog — Tech Article Hub",
    subtitle: "Developer Publishing Platform",
    description: "A modern developer blog reading & publishing platform built with React, Shadcn UI components, and Tailwind CSS featuring dark mode aesthetics and article tagging.",
    fullDescription: "DevBlog provides a streamlined reading experience tailored for software engineers. Includes category filters, estimated reading times, code block formatting, and bookmarking functionality.",
    image: "/assets/projects/blog.webp",
    category: "Interactive Apps",
    featured: false,
    tech: ["React", "Shadcn UI", "Tailwind CSS"],
    features: [
      "Clean Typography & Dark Mode Aesthetic",
      "Category Tagging & Estimated Read Times",
      "Search Filter by Article Title and Tech Stack",
      "Responsive Article Layout"
    ],
    github: "https://github.com/mohtashimjaved/devblog",
    demo: "https://devblog-site.netlify.app"
  },
  {
    id: 6,
    title: "Dealio — Modern E-Commerce Store",
    subtitle: "Full Shopping Experience",
    description: "An online store interface built with HTML, CSS, JavaScript, and Supabase backend, featuring full cart management, product filtering, and instant checkout simulation.",
    fullDescription: "Dealio features dynamic product cards, category navigation, real-time cart state management, price calculations, and Supabase database integration for product management.",
    image: "/assets/projects/e-commerce.webp",
    category: "Full Stack MERN",
    featured: false,
    tech: ["JavaScript", "HTML5", "CSS3", "Supabase"],
    features: [
      "Interactive Product Catalog & Category Filters",
      "Dynamic Shopping Cart & Price Calculator",
      "Supabase Backend for Product Storage",
      "Responsive Touch-Friendly Mobile Interface"
    ],
    github: "https://github.com/mohtashimjaved/dealio-site",
    demo: "https://dealio-site.netlify.app"
  },
  {
    id: 7,
    title: "ChatGram — Realtime Messaging App",
    subtitle: "Instant Live Chat Platform",
    description: "A Realtime Chatting website powered by Supabase Realtime subscriptions, HTML5, CSS3, and JavaScript featuring instant channel communication and online presence.",
    fullDescription: "ChatGram enables users to create chat rooms, send messages instantly without page refresh using WebSocket real-time subscriptions, and view active online members.",
    image: "/assets/projects/chat.webp",
    category: "Full Stack MERN",
    featured: false,
    tech: ["JavaScript", "Supabase Realtime", "HTML5", "CSS3"],
    features: [
      "Real-time WebSocket Messaging via Supabase",
      "Multi-channel Chat Rooms & Instant Notifications",
      "User Presence & Online Status Indicators",
      "Sleek Dark Theme UI"
    ],
    github: "https://github.com/mohtashimjaved/chat-app",
    demo: "https://chatgram-site.netlify.app"
  }
];

