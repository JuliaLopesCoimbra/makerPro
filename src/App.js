import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Section from "./pages/Section";
import SectionDetails from "./pages/Sections/SectionDetails";
import SectionArea from "./pages/Sections/SectionArea";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatComponent from "./components/chat/ChatComponent";
import "./App.css";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <ChatComponent />
          <Routes>
            {/* Rota de Login */}
            <Route path="/login" element={<Login />} />

            {/* Rotas protegidas */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <>
                    <Header />
                    <Dashboard />
                    <Footer />
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path="/section/:name"
              element={
                <ProtectedRoute>
                  <>
                    <Header />
                    <Section />
                    <Footer />
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path="/section-area"
              element={
                <ProtectedRoute>
                  <>
                    <Header />
                    <SectionArea />
                    <Footer />
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path="/section-details"
              element={
                <ProtectedRoute>
                  <>
                    <Header />
                    <SectionDetails />
                    <Footer />
                  </>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
