import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:themeId" element={<Gallery />} />
        </Routes>
      </main>
    </div>
  );
}