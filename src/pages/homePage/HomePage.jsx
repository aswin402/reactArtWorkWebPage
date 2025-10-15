import React from 'react';
import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const HomePage = () => {
  return (
   <>
    {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Art Gallery</h1>
          <p>
            Discover timeless masterpieces and modern creations from artists
            around the world. Our digital gallery connects art lovers,
            collectors, and creators in one vibrant space.
          </p>
          {/* <Link to="/explore" className="btn-explore">
            Explore Artworks
          </Link> */}
        </div>
      </section>


         {/* Features Section */}
      <section className="features">
        <h2>Why Visit Our Gallery?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>🎨 Curated Collections</h3>
            <p>
              Explore expertly curated collections spanning eras, cultures, and
              styles — from Renaissance masterpieces to modern art innovations.
            </p>
          </div>
          <div className="feature-item">
            <h3>🌍 Global Access</h3>
            <p>
              View high-quality art from renowned museums and independent
              artists worldwide — all from the comfort of your screen.
            </p>
          </div>
          <div className="feature-item">
            <h3>🧠 Learn & Inspire</h3>
            <p>
              Every artwork comes with historical context and artist
              information, allowing you to dive deep into artistic expression.
            </p>
          </div>
        </div>
      </section>


       {/* Call to Action */}
      <section className="cta">
        <h2>Start Your Artistic Journey Today</h2>
        {/* <Link to="/explore" className="btn-cta">
          Visit the Gallery
        </Link> */}
      </section>
   </>
  );
};

export default HomePage;