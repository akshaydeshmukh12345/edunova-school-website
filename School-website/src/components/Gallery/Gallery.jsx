import "./Gallery.css";

import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">

        <h5>OUR CAMPUS LIFE</h5>
        <h2>Moments That Inspire Learning</h2>

        <div className="gallery-grid">

        <div className="gallery-card">
        <img src={gallery1} alt="Library" />
        <div className="overlay">
        <h3>Library</h3>
        </div>
        </div>

        <div className="gallery-card">
        <img src={gallery2} alt="Smart Classroom" />
        <div className="overlay">
        <h3>Smart Classroom</h3>
        </div>
        </div>

        <div className="gallery-card">
        <img src={gallery3} alt="Sports Activities" />
        <div className="overlay">
        <h3>Sports Activities</h3>
        </div>
        </div>

        <div className="gallery-card">
        <img src={gallery4} alt="Campus Events" />
        <div className="overlay">
        <h3>Campus Events</h3>
        </div>
        </div>

        </div>

      </div>
    </section>
  );
}

export default Gallery;