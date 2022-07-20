import "./App.css";
import {
    Routes, 
    Route 
} from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import AboutMe from "./components/about-me/aboutMe";
import Skills from "./components/skills/skill";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div>
      <div className="portfolio-website">
        <Routes>
          <Route index path="/" element={<Navigation />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
