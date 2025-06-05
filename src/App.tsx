import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Candidates from './pages/Candidates';
import Employers from './pages/Employers';
import AboutUs from './pages/AboutUs';
import NewsInsights from './pages/NewsInsights';
import Contact from './pages/Contact';
import JobDetail from './pages/JobDetail';
import Register from './pages/Register';
import ApplyJob from './pages/ApplyJob';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/news" element={<NewsInsights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply/:id" element={<ApplyJob />} />
      </Routes>
    </Router>
  );
}

export default App;