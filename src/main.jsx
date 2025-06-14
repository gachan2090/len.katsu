import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from "./aboutme.jsx"
import App from "./App.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <Router>
      <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/aboutme" element={<About />} />
      </Routes>
  </Router>
</React.StrictMode>
);