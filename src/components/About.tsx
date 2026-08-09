import React from "react";

export const About: React.FC = () => {
  return (
    <>
      <p>
        I&apos;m a Backend Developer at JAM CRM, and a recent Computer Science
        grad from the University of Guelph (Bachelor of Computing, Honours
        Co-op).
      </p>

      <p>
        Before this, I spent a few years interning at Electronic Arts and
        Respawn Entertainment, working on UI engine systems for Apex Legends
        and EA Sports FC. I fixed bugs, built out error-handling and
        automation tooling, and learned a lot about working in a large,
        established codebase.
      </p>

      <p>
        Outside of internships, I like building things for fun. Chaos Kitchen
        is a real-time co-op mobile game I made in Flutter, and I also built a
        movie recommendation system using Python and scikit-learn to mess
        around with matrix factorization.
      </p>

      <p>
        I&apos;m looking to grow more into data science and AI work going
        forward, and I&apos;m always happy to connect with other software
        engineers.
      </p>

      {/* Animated Language Chips */}
      <div className="chips enhanced-chips">
        <span className="chip glow-chip">C / C++</span>
        <span className="chip glow-chip">Python</span>
        <span className="chip glow-chip">Java</span>
        <span className="chip glow-chip">JavaScript / TypeScript</span>
        <span className="chip glow-chip">SQL</span>
        <span className="chip glow-chip">Dart</span>
        <span className="chip glow-chip">R</span>
      </div>
    </>
  );
};
