import "./About.css";
import aboutImage from "../../assets/images/about.jpg";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img src={aboutImage} alt="About School" />
      </div>

      <div className="about-content">

        <p className="section-tag">
          ABOUT OUR SCHOOL
        </p>

        <h2>
          Empowering Students Through
          Excellence in Education
        </h2>

        <p>
          EduNova International School is committed to providing
          world-class education through innovation, creativity,
          academic excellence and character development. Our
          experienced faculty and modern infrastructure create
          an inspiring learning environment where every student
          can discover their true potential.
        </p>

        <div className="about-cards">

          <div className="card">
            <h3>20+</h3>
            <p>Years Experience</p>
          </div>

          <div className="card">
            <h3>1500+</h3>
            <p>Students</p>
          </div>

          <div className="card">
            <h3>75+</h3>
            <p>Expert Teachers</p>
          </div>

          <div className="card">
            <h3>98%</h3>
            <p>Success Rate</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;