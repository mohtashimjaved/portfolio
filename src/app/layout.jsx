import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Mohtashim Javed | Full Stack Developer",
  description: "Portfolio of Mohtashim Javed, a Full Stack, MERN, and React Native Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased selection:bg-accent/30 selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
