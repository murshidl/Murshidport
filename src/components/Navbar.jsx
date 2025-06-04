import React, { useState } from 'react';
import '../components/Navbar.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="navbar">
        <h3 id="tag-line">Designing Tomorrow, One Pixel at a Time</h3>

        {/* Hamburger visible only on small screens */}
        <div className="menue" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Normal nav links visible only on large screens */}
        <ul className="nav-links">
  <li>
    <a href="#Home" onClick={closeMenu}>Home</a>
  </li>
  <li>
    <a href="#skills" onClick={closeMenu}>Skills</a>
  </li>
  <li>
    <a href="#experience" onClick={closeMenu}>Experiences</a>
  </li>
  <li>
    <a href="#projects" onClick={closeMenu}>Projects</a>
  </li>
  <li>
    <a href="#contact" onClick={closeMenu}>Contact</a>
  </li>
</ul>


      </div>

      {menuOpen && (
        <div className="popup-menu">
          <button className="close-btn" onClick={closeMenu}>✕</button>
          <ul className="popup-links">
            <li><a href="#Home" onClick={closeMenu}>Home</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experiences</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      )}


      {menuOpen && <div className="backdrop" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
