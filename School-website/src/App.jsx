import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import LatestNews from "./components/LatestNews/LatestNews";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import Facilities from "./components/Facilities/Facilities";
import Academics from "./components/Academics/Academics";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Academics />
      <Facilities />
      <Gallery />
      <Testimonials />
      <LatestNews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;