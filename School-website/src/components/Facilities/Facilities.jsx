import "./Facilities.css";
import {
  FaBus,
  FaBook,
  FaFlask,
  FaDesktop,
  FaFutbol,
  FaShieldAlt,
} from "react-icons/fa";

function Facilities() {
  return (
    <section className="facilities" id="facilities">
      <div className="container">

        <h5>OUR FACILITIES</h5>
        <h2>Everything Students Need to Succeed</h2>

        <div className="facility-grid">

          <div className="facility-card">
            <FaBook className="facility-icon" />
            <h3>Modern Library</h3>
            <p>Thousands of books, journals and digital resources for learning.</p>
          </div>

          <div className="facility-card">
            <FaDesktop className="facility-icon" />
            <h3>Smart Classrooms</h3>
            <p>Technology-enabled classrooms with interactive digital learning.</p>
          </div>

          <div className="facility-card">
            <FaFlask className="facility-icon" />
            <h3>Science Labs</h3>
            <p>Well-equipped laboratories for practical experiments and innovation.</p>
          </div>

          <div className="facility-card">
            <FaFutbol className="facility-icon" />
            <h3>Sports Complex</h3>
            <p>Indoor and outdoor sports facilities for physical development.</p>
          </div>

          <div className="facility-card">
            <FaBus className="facility-icon" />
            <h3>School Transport</h3>
            <p>Safe and comfortable buses covering major areas of the city.</p>
          </div>

          <div className="facility-card">
            <FaShieldAlt className="facility-icon" />
            <h3>Safe Campus</h3>
            <p>24×7 security, CCTV surveillance and a secure learning environment.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Facilities;