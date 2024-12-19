import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Section from "./pages/Section";
import SectionDetails from "./pages/Sections/SectionDetails";
import SectionArea from "./pages/Sections/SectionArea";
import Header from "./components/Header"; // Importando o Header
import Footer from "./components/Footer"; // Importando o Footer

function App() {
  return (
    <>
      {/* Configurações globais do Toast */}
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <div>
          <Routes>
            {/* Login sem Header e Footer */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />

            {/* Rotas com Header e Footer */}
            <Route
              path="/dashboard"
              element={
                <>
                  <Header />
                  <Dashboard />
                  <Footer />
                </>
              }
            />
            <Route
              path="/section/:name"
              element={
                <>
                  <Header />
                  <Section />
                  <Footer />
                </>
              }
            />
            <Route
              path="/section-area"
              element={
                <>
                  <Header />
                  <SectionArea />
                  <Footer />
                </>
              }
            />
            <Route
              path="/section-details"
              element={
                <>
                  <Header />
                  <SectionDetails />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
