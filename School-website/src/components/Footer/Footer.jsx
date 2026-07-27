import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* School Info */}
        <div className="footer-column">
          <h2>EduNova</h2>

          <p>
            EduNova International School is committed to providing
            world-class education, innovation, leadership, and holistic
            development for every student.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#academics">Academics</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>

        {/* Contact */}
        <div className="footer-column">

          <h3>Contact</h3>

          <p><FaMapMarkerAlt /> MP Nagar, Bhopal, Madhya Pradesh</p>

          <p><FaPhoneAlt /> +91 00000 00000</p>

          <p><FaEnvelope /> admissions@edunova.edu</p>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 EduNova International School. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;