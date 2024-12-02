// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Section from "./pages/Section";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element= {<Dashboard/>} />
          <Route path="/section/:name" element={<Section/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
