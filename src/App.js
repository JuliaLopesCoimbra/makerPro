// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Section from "./pages/Section";
import SectionDetails from "./pages/Sections/SectionDetails";
import SectionArea from "./pages/Sections/SectionArea";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element= {<Dashboard/>} />
          <Route path="/section/:name" element={<Section/>}/>
          <Route path="/section-area" element={<SectionArea />} />
          <Route path="/section-details" element={<SectionDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
