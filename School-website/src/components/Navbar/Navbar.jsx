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
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#academics">Academics</a>
        <a href="#facilities">Facilities</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>

        <button className="apply-btn">
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