// App.jsx
import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home';
import Neighborhood from "./pages/Neighborhood";
import Legislation from "./pages/Legislation";
import Feedback from "./pages/Feedback";
import Vote from "./pages/Vote";
import Organize from "./pages/Organize";
import Signup from './pages/signUp';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/neighborhood" element={<Neighborhood />} />
        <Route path="/legislation" element={<Legislation />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/organize" element={<Organize />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
