// Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Art Gallery</h1>
      </div>

      <ul className="navbar-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>

        <li className={location.pathname === "/explore" ? "active" : ""}>
          <Link to="/explore">Explore</Link>
        </li>

        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About Us</Link>
        </li>

        <li className={location.pathname === "/join" ? "active" : ""}>
          <Link to="/join">Join Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
