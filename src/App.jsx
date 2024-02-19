import Home from "./pages/home";
import Blog from "./pages/blog";
import Services from "./pages/services.jsx";
import Skills from "./pages/skills";
import { Routes, Route } from "react-router-dom";
import Contacts from "./pages/contacts.jsx";
import Projects from "./pages/projects.jsx";
import Upload from "./pages/upload";
import { useEffect, useRef } from "react";
import Effect from "../src/assets/mario-welcome.mp3";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  const audioRef = useRef(null);
  useEffect(() => {
    const audio = new Audio(Effect);
    audioRef.current = audio;
    audio.play();
  }, []);
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/blog" element={<Blog />} />{" "}
        <Route path="/services" element={<Services />} />{" "}
        <Route path="/skills" element={<Skills />} />{" "}
        <Route path="/contacts" element={<Contacts />} />{" "}
        <Route path="/projects" element={<Projects />} />{" "}
        <Route path="/upload" element={<Upload />} />{" "}
      </Routes>{" "}
    </>
  );
}

export default App;
