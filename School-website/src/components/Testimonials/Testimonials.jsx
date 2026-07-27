import "./Testimonials.css";

import alumni from "../../assets/images/alumni.jpg";
import parent from "../../assets/images/parent.jpg";
import student from "../../assets/images/student1.jpg";

import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">

        <h5>TESTIMONIALS</h5>
        <h2>What Our Community Says</h2>

        <div className="testimonial-grid">

          {/* Alumni */}
          <div className="testimonial-card">
            <img src={alumni} alt="Alumni" />

            <h3>Ananya Kapoor</h3>
            <span>Alumna</span>

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>
              "EduNova provided me with the knowledge, confidence, and
              leadership skills that helped me excel in higher education and
              begin my professional career."
            </p>
          </div>

          {/* Parents */}
          <div className="testimonial-card">
            <img src={parent} alt="Parents" />

            <h3>Rajesh & Sneha Verma</h3>
            <span>Parents</span>

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>
              "We truly appreciate the school's commitment to academic
              excellence, student safety, and the overall development of every
              child. Our child enjoys coming to school every day."
            </p>
          </div>

          {/* Student */}
          <div className="testimonial-card">
            <img src={student} alt="Student" />

            <h3>Aarav Sharma</h3>
            <span>Class X Student</span>

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>
              "The supportive teachers, modern classrooms, and exciting
              extracurricular activities make learning enjoyable. EduNova has
              helped me become more confident every day."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;