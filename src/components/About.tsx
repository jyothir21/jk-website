import React from "react";

export const About: React.FC = () => {
  return (
    <>
      <p>
        I am a Computer Science student at the University of Guelph, graduating
        in April 2026. I have developed a strong interest in software
        engineering, UI systems, game development, and machine learning, and I
        enjoy building software that feels intuitive, reliable, and polished.
      </p>

      <p>
        I have completed multiple internships at Electronic Arts and Respawn
        Entertainment, where I worked on UI engine systems, debugging complex
        issues, improving automation reliability, and contributing to tooling
        used across the Apex Legends R5 engine. These experiences strengthened
        my ability to work in large production codebases and collaborate with
        teams to deliver meaningful technical solutions.
      </p>

      <p>
        Outside of industry work, I explore new technologies through personal
        projects. Recent work includes Chaos Kitchen, a real time cooperative
        mobile game built with Flutter and Flame, and a Movie Recommendation
        System using Python and Scikit Learn to experiment with content based,
        collaborative, and hybrid models. I enjoy creating projects that
        challenge me to learn, refine my engineering approach, and build
        thoughtful user experiences.
      </p>

      <p>
        I am always excited to learn, solve meaningful problems, and collaborate
        with others who share a passion for building high quality software.
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
