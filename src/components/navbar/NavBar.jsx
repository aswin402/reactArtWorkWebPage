import React, { useState, useRef, useEffect } from 'react';
import './NavBar.scss';

function NavBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const underlineRef = useRef(null);

  // Move underline smoothly when clicking a link
  useEffect(() => {
    const underline = underlineRef.current;
    if (underline) {
      underline.style.transform = `translateX(${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const navItems = ['Home', 'Explore', 'About Us', 'Join Us'];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Art Gallery</h1>
      </div>
      <ul className="navbar-links">
        {navItems.map((item, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            <a
              href={`#${item.toLowerCase()}`}
              className={activeIndex === index ? 'active' : ''}
            >
              {item}
            </a>
          </li>
        ))}
        <span className="underline" ref={underlineRef}></span>
      </ul>
    </nav>
  );
}

export default NavBar;
