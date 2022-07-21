import React from "react";

import "./App.css";
import {
    BrowserRouter as Router,
    Routes, 
    Route 
} from "react-router-dom";

import Home from "./components/home/home";
import AboutMe from "./components/about-me/aboutMe";
import Skills from "./components/skills/skill";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
  return (
      <Router>
          <Routes>
              <Route  path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
  );
}

export default App;
