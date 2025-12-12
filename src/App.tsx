import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { CoopReports } from "./components/CoopReports";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CursorGlow } from "./components/CursorGlow";
import { Reveal } from "./components/Reveal";
import { ScrollOrbits } from "./components/ScrollOrbits";

import "./styles.css";

function App() {
  return (
    <div className="app">
      <CursorGlow />
      <ScrollOrbits />
      <Navbar />

      <main>
        {/* Hero: full-width, no reveal needed */}
        <section id="home">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <Reveal>
            <About />
          </Reveal>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <h2>Experience</h2>
          <p className="section-intro">
            Internships and roles I&apos;ve held, with a focus on UI
            engineering, tooling, and backend systems.
          </p>
          <Reveal>
            <Experience />
          </Reveal>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <p className="section-intro">
            A selection of personal and academic projects that highlight what I
            enjoy building.
          </p>
          <Reveal>
            <Projects />
          </Reveal>
        </section>

        {/* Co-op Reports */}
        <section id="coop" className="section">
          <h2>Co-op Reports</h2>
          <p className="section-intro">
            Formal work-term reports documenting what I worked on and learned
            during my co-op placements.
          </p>
          <Reveal>
            <CoopReports />
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p className="section-intro">
            Want to reach out about opportunities, projects, or anything else?
          </p>
          <Reveal>
            <Contact />
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
