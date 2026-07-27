import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <h5>CONTACT US</h5>
        <h2>Get in Touch with EduNova</h2>

        <div className="contact-container">

          {/* Contact Information */}
          <div className="contact-info">

            <div className="info-box">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Address</h3>
                <p>
                  EduNova International School,<br />
                  MP Nagar, Bhopal,<br />
                  Madhya Pradesh, India
                </p>
              </div>
            </div>

            <div className="info-box">
              <FaPhoneAlt className="info-icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 0000 000000</p>
              </div>
            </div>

            <div className="info-box">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>admissions@edunova.edu</p>
              </div>
            </div>

            <div className="info-box">
              <FaClock className="info-icon" />
              <div>
                <h3>Office Hours</h3>
                <p>Monday – Saturday<br />8:00 AM – 4:00 PM</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form">

            <form>

              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;