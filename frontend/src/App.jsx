// frontend/src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GenericPage from "./pages/GenericPage";
import Photos from "./pages/Photos";  
import SalientFeatures from "./pages/SalientFeatures";  
import Awards from "./pages/Awards";
import Contacts from "./pages/Contacts";
import Achievements from "./pages/Achievements";
// ⭐ ADD THIS

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* ⭐ Custom Pages */}
          <Route path="/about/salient-features" element={<SalientFeatures />} />

          {/* ⭐ Generic fallback page */}
          <Route path="/:section/:page" element={<GenericPage />} />
          <Route path="/about/awards" element={<Awards />} />
          <Route path="/photos/events" element={<Photos />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about/achievements" element={<Achievements />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
