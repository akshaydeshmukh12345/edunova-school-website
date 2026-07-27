import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <h2>EduNova</h2>
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#academics" onClick={() => setMenuOpen(false)}>Academics</a>
        <a href="#facilities" onClick={() => setMenuOpen(false)}>Facilities</a>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        <button
          className="apply-btn"
          onClick={() => setMenuOpen(false)}
        >
          Apply Now
        </button>
      </nav>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Navbar;