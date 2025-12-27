import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout"
import ScrollToTop from "./components/ScrollToTop"
import PageWrapper from "./components/PageWrapper";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop/>
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<PageWrapper><Home /></PageWrapper>}
            />
            <Route
              path="/projects"
              element={<PageWrapper><Projects /></PageWrapper>}
            />
            <Route
              path="/about"
              element={<PageWrapper><About /></PageWrapper>}
            />
            <Route
              path="/contact"
              element={<PageWrapper><Contact /></PageWrapper>}
            />
          </Route>
        </Routes>
      {/* </ScrollToTop> */}
    </AnimatePresence>
  );
}

export default App;
