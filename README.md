# Mohtashim Javed — Developer Portfolio 🚀

> A high-performance, visually immersive personal portfolio built with **Next.js 16**, **Three.js**, **Framer Motion**, and **Tailwind CSS 4** — featuring 3D WebGL graphics, an interactive terminal CLI, custom magnetic cursor, and glassmorphic cyber aesthetics.

**Live Demo**: [mohtashimjaved-portfolio.vercel.app](https://mohtashimjaved-portfolio.vercel.app)

---

## ✨ Features

- **Interactive 3D WebGL Canvas** — Custom particle field background rendered with Three.js
- **3D Portrait Card** — Perspective tilt physics on mouse movement with depth layers
- **Embedded CLI Terminal** — Fully functional developer terminal with commands (`help`, `bio`, `skills`, `projects`, `contact`, `clear`)
- **Custom Magnetic Cursor** — Smooth cursor follower that reacts to interactive elements
- **Animated Tech Logos** — Auto-scrolling skill showcase strip with hover interactions
- **Project Showcase** — Filterable project grid with full-detail modal popups
- **Typing Title Animation** — Rotating role titles with typewriter effect
- **Scroll Progress Bar** — Animated reading progress indicator at the top of the page
- **Scroll To Top** — Smooth floating button to return to top
- **Glassmorphism UI** — Frosted glass cards, gradient accents, and translucent panels
- **Fully Responsive** — Mobile-first layout that adapts across all screen sizes
- **SEO Optimized** — Meta tags, semantic HTML, structured page titles via Next.js App Router

---

## 🛠️ Tech Stack

| Category       | Technology                                     |
|----------------|------------------------------------------------|
| **Framework**  | Next.js 16 (App Router)                        |
| **Language**   | JavaScript / React 19                          |
| **Styling**    | Tailwind CSS 4, PostCSS                        |
| **3D / WebGL** | Three.js                                       |
| **Animations** | Framer Motion 12, GSAP 3                       |
| **Icons**      | Lucide React, React Icons                      |
| **Utilities**  | clsx, tailwind-merge, canvas-confetti          |
| **Deployment** | Vercel                                         |

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── assets/
│       └── projects/           # Project preview images (.webp)
├── src/
│   ├── app/
│   │   ├── layout.jsx          # Root layout with fonts & metadata
│   │   ├── template.jsx        # Page transition wrapper
│   │   ├── page.jsx            # Home page (Hero, Skills, Terminal, Projects)
│   │   ├── about/              # About page
│   │   ├── projects/           # Projects page
│   │   └── contact/            # Contact page
│   ├── components/
│   │   ├── Navbar.jsx              # Sticky navigation bar
│   │   ├── Footer.jsx              # Site footer with social links
│   │   ├── ThreeCanvas.jsx         # Three.js WebGL particle background
│   │   ├── Portrait3DCard.jsx      # Tilt-physics 3D portrait card
│   │   ├── InteractiveTerminal.jsx # Embedded CLI terminal emulator
│   │   ├── TechLogos.jsx           # Auto-scrolling tech logo strip
│   │   ├── TypingTitles.jsx        # Typewriter role title animation
│   │   ├── CustomCursor.jsx        # Magnetic custom cursor
│   │   ├── ScrollProgress.jsx      # Top scroll progress indicator
│   │   ├── ScrollToTop.jsx         # Floating scroll-to-top button
│   │   └── ProjectModal.jsx        # Project detail overlay modal
│   └── data/
│       └── projects.js             # All project data & metadata
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

---

## 🗂️ Pages

| Route      | Description                                               |
|------------|-----------------------------------------------------------|
| `/`        | Home — Hero, 3D canvas, skills, terminal, project preview |
| `/about`   | About — Background, experience, and engineering profile   |
| `/projects`| Projects — Filterable full project grid with modals       |
| `/contact` | Contact — Direct communication channels and social links  |

---

## 💼 Featured Projects

| # | Project | Stack | Links |
|---|---------|-------|-------|
| 1 | **NexusTrade** — Full Stack Inventory Management System | Next.js, Express, MongoDB, Node.js | [GitHub](https://github.com/mohtashimjaved/white-lable-project) · [Demo](https://nexustrade-project.vercel.app) |
| 2 | **Helplytics** — Collaborative Developer Q&A Platform | Next.js, Express, MongoDB, Node.js | [GitHub](https://github.com/mohtashimjaved/helplytics) · [Demo](https://helyplytics.vercel.app) |
| 3 | **Arena Quiz** — Real-time Interactive Quiz Platform | React, Supabase, Framer Motion | [GitHub](https://github.com/mohtashimjaved/quiz-app) · [Demo](https://arena-quiz.netlify.app) |
| 4 | **DevBlog** — Developer Article Publishing Platform | React, Shadcn UI, Tailwind CSS | [GitHub](https://github.com/mohtashimjaved/devblog) · [Demo](https://devblog-site.netlify.app) |
| 5 | **Dealio** — Modern E-Commerce Store | JavaScript, HTML5, CSS3, Supabase | [GitHub](https://github.com/mohtashimjaved/dealio-site) · [Demo](https://dealio-site.netlify.app) |
| 6 | **ChatGram** — Realtime Messaging App | JavaScript, Supabase Realtime | [GitHub](https://github.com/mohtashimjaved/chat-app) · [Demo](https://chatgram-site.netlify.app) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18.0.0 or higher
- **npm** or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mohtashimjaved/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🖥️ Terminal Commands

The embedded CLI terminal on the home page supports the following commands:

| Command    | Description                                  |
|------------|----------------------------------------------|
| `help`     | Display all available commands               |
| `bio`      | Engineering profile and core stack info      |
| `skills`   | Full technical skills matrix                 |
| `projects` | Catalog of featured engineering works        |
| `contact`  | Direct communication channels                |
| `clear`    | Clear the terminal output screen             |

---

## 🤝 Connect With Me

- **Email**: hafizmohtashim3157@gmail.com
- **LinkedIn**: [Mohtashim Javed](https://www.linkedin.com/in/mohtashim-javed-49917a352/)
- **GitHub**: [@mohtashimjaved](https://github.com/mohtashimjaved)
- **Portfolio**: [mohtashimjaved-portfolio.vercel.app](https://mohtashimjaved-portfolio.vercel.app)
- **Location**: Karachi, Pakistan (GMT+5)

---

<div align="center">Developed with ❤️ by <strong>Mohtashim Javed</strong></div>
