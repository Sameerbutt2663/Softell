import { lazy, Suspense, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { PageTransition } from "./components/PageTransition";
import { SmoothScroll } from "./components/SmoothScroll";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Contact = lazy(() => import("./pages/Contact"));

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode="wait">
      <PageTransition>
        <Suspense fallback={<div className="route-loader">SoftTell</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </PageTransition>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <AppRoutes />
        <Footer />
      </SmoothScroll>
    </BrowserRouter>
  );
}
