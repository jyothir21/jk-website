import React from "react";
import { Reveal } from "./Reveal";

type Project = {
  name: string;
  period?: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    name: "Chaos Kitchen",
    period: "2025",
    description:
      "Asymmetric multiplayer cooking game built using Flutter and the Flame engine, featuring instructor/cook roles, real-time synchronization, and custom game asset pipelines.",
    tech: ["Flutter", "Dart", "Flame", "WebSockets", "FastAPI"],
    link: "https://github.com/jyothir21/chaos-kitchen",
  },
  {
    name: "Movie Recommendation System",
    period: "2025",
    description:
      "Hybrid recommender system using MovieLens data with content-based filtering, collaborative filtering, matrix factorization, and TF-IDF similarity scoring.",
    tech: ["Python", "Pandas", "SciKit-Learn", "NumPy", "Keras"],
    link: "https://github.com/jyothir21/movie-recommendation",
  },
  {
    name: "FlexFit",
    period: "2024",
    description:
      "Full-stack platform enabling users to discover local fitness facilities and allowing business owners to advertise services.",
    tech: ["React", "Flask", "SQLite", "JavaScript", "Python"],
    link: "https://github.com/jyothir21/FlexFit",
  },
  {
    name: "Molecule Visualizer",
    period: "2024",
    description:
      "Interactive SDF molecule parsing, rotation, and SVG rendering system built using C, Python, SWIG, SQLite, and a browser-based UI.",
    tech: ["C", "Python", "SWIG", "SQLite", "JavaScript"],
    link: "https://github.com/jyothir21/molecule-visualizer",
  },
];

export const Projects: React.FC = () => {
  return (
    <div className="cards-grid">
      {projects.map((p, index) => (
        <Reveal key={p.name} delay={index * 120}>
          <article className="card">
            <header className="card-header">
              <h3>{p.name}</h3>
              {p.period && <span className="card-pill">{p.period}</span>}
            </header>
            <p className="card-body">{p.description}</p>
            <div className="card-tech">
              {p.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub →
              </a>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  );
};
