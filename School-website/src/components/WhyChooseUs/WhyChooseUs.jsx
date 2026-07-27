import "./WhyChooseUs.css";
import { FaBookOpen, FaChalkboardTeacher, FaLaptopCode, FaMedal } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why" id="why">
      <div className="container">

        <h5>WHY CHOOSE US</h5>
        <h2>Building Future Leaders</h2>

        <div className="cards">

          <div className="card">
            <FaBookOpen className="icon"/>
            <h3>Modern Curriculum</h3>
            <p>
              Updated syllabus designed for future careers and practical learning.
            </p>
          </div>

          <div className="card">
            <FaChalkboardTeacher className="icon"/>
            <h3>Expert Faculty</h3>
            <p>
              Experienced teachers who inspire innovation and excellence.
            </p>
          </div>

          <div className="card">
            <FaLaptopCode className="icon"/>
            <h3>Smart Classrooms</h3>
            <p>
              Digital classrooms with advanced technology and learning tools.
            </p>
          </div>

          <div className="card">
            <FaMedal className="icon"/>
            <h3>Excellent Results</h3>
            <p>
              Consistent academic achievements and holistic student development.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;