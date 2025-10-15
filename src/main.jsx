import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar.jsx';
import Footer from './components/footer/Footer.jsx';
import HomePage from './pages/homePage/HomePage.jsx';
import Explore from './pages/explore/Explore.jsx';
import AboutUs from './pages/aboutUs/AboutUs.jsx';
import JoinUs from './pages/joinUs/JoinUs.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/join" element={<JoinUs />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
