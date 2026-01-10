import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from "./pages/aboutme.jsx"
import Projects from "./pages/projects.jsx"
import Resume from "./pages/resume.jsx"
import App from "./App.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <Router>
      <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
      </Routes>
  </Router>
</React.StrictMode>
);