import Home from "./pages/home";
import Blog from "./pages/blog";
import Services from "./pages/services.jsx";
import Skills from "./pages/skills";
import { Routes, Route } from "react-router-dom";
import Contacts from "./pages/contacts.jsx";
import Projects from "./pages/projects.jsx";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Form from "./pages/Form";
import Login from "./components/Login";
import Signup from "./components/SignUp";

function App() {
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
        <Route path="/form" element={<Form />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/signup" element={<Signup />} />{" "}
      </Routes>{" "}
    </>
  );
}

export default App;
