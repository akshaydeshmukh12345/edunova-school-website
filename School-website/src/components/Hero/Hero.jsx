import "./Hero.css";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <img src={heroImage} alt="School Campus" className="hero-image" />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-tagline">
        Excellence • Innovation • Leadership
        </p>
        <h1>
         Shaping Future Leaders Through
          <br />
         Quality Education
        </h1>
        <p>
        Empowering students with academic excellence, innovation, creativity,
        leadership, and strong values to prepare them for a successful global
        future.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Apply Now</button>
          <button className="secondary-btn">Explore Campus</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;