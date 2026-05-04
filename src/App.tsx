import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App(): JSX.Element {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navbar />
      <section id="home" className="h-screen snap-start">
        <Hero />
      </section>
      <section id="about" className="h-screen snap-start">
        <About />
      </section>
      <section id="experience" className="h-screen snap-start">
        <Experience />
      </section>
      <section id="skills" className="h-screen snap-start">
        <Skill />
      </section>
      <section id="projects" className="h-screen snap-start">
        <Project />
      </section>
      <section id="contact" className="h-screen snap-start">
        <Contact />
      </section>
      <section className="snap-start">
        <Footer />
      </section>
    </div>
  );
}

export default App;
