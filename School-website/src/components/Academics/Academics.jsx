import "./Academics.css";
import { FaBook, FaFlask, FaGraduationCap } from "react-icons/fa";

function Academics() {
  return (
    <section className="academics" id="academics">
      <div className="container">

        <h5>OUR ACADEMICS</h5>
        <h2>Learn • Grow • Achieve</h2>

        <div className="academic-cards">

          <div className="academic-card">
            <FaBook className="academic-icon" />
            <h3>Primary School</h3>
            <p>
              Strong foundation through activity-based and creative learning.
            </p>
          </div>

          <div className="academic-card">
            <FaFlask className="academic-icon" />
            <h3>Secondary School</h3>
            <p>
              Practical education with science labs, sports and technology.
            </p>
          </div>

          <div className="academic-card">
            <FaGraduationCap className="academic-icon" />
            <h3>High School</h3>
            <p>
              Preparing students for university and successful careers.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Academics;