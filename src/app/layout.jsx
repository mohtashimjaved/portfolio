import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import ScrollToTop from "../components/ScrollToTop";
import ScrollProgress from "../components/ScrollProgress";
import "./globals.css";

export const metadata = {
  title: "Mohtashim Javed | Full Stack & Mobile Engineer",
  description: "Official interactive 3D portfolio of Mohtashim Javed — Full Stack MERN Developer, Next.js Architect, and React Native Mobile Engineer.",
  keywords: ["Mohtashim Javed", "Full Stack Developer", "MERN Developer", "React Native", "Next.js Portfolio", "Software Engineer", "WebGL 3D Portfolio"],
  authors: [{ name: "Mohtashim Javed" }],
  openGraph: {
    title: "Mohtashim Javed | Full Stack & Mobile Engineer",
    description: "High-performance MERN web applications & cross-platform mobile apps.",
    url: "https://mohtashimjaved-portfolio.vercel.app",
    siteName: "Mohtashim Javed Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#060913] text-slate-100 antialiased selection:bg-sky-400 selection:text-black flex flex-col min-h-screen">
        <ScrollToTop />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
