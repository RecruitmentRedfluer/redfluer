import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Candidates from './pages/Candidates';
import Employers from './pages/Employers';
import AboutUs from './pages/AboutUs';
import NewsInsights from './pages/NewsInsights';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import JobDetail from './pages/JobDetail';
import Register from './pages/Register';
import ApplyJob from './pages/ApplyJob';
import ApplyShift from './pages/ApplyShift';
import ApplySkill from './pages/ApplySkill';
import ApplyCareerPath from './pages/ApplyCareerPath';
import Admin from './pages/Admin';
import ShiftManagement from './pages/ShiftManagement';
import SkillsTracking from './pages/SkillsTracking';

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
        <Route path="/legal" element={<Legal />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply/:id" element={<ApplyJob />} />
        <Route path="/apply-shift/:id" element={<ApplyShift />} />
        <Route path="/apply-skill/:id" element={<ApplySkill />} />
        <Route path="/apply-career-path/:id" element={<ApplyCareerPath />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/shifts" element={<ShiftManagement />} />
        <Route path="/skills" element={<SkillsTracking />} />
      </Routes>
    </Router>
  );
}

export default App;