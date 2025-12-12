import React, { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

type Project = {
  name: string;
  period?: string;
  subtitle?: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    name: "Chaos Kitchen – Multiplayer Mobile Game",
    period: "2025",
    subtitle: "Oct 2025 – Dec 2025",
    description:
      "Real-time cooperative mobile game inspired by Overcooked and Keep Talking and Nobody Explodes. Features asymmetric cook/instructor roles, networked state synchronization, and custom UI/UX optimized for mobile using the Flame game engine.",
    tech: ["Flutter", "Dart", "Flame", "Firebase", "WebSockets"],
    link: "https://github.com/jyothir21/chaos-kitchen",
  },
  {
    name: "Movie Recommendation System",
    period: "2025",
    subtitle: "Sep 2025 – Dec 2025",
    description:
      "Recommender system built with the MovieLens dataset, combining content-based, collaborative, and hybrid models. Implements TF-IDF feature extraction, similarity scoring, and matrix factorization, with evaluation using metrics like RMSE and precision/recall.",
    tech: ["Python", "Pandas", "Scikit-Learn", "NumPy", "Matplotlib"],
    link: "https://github.com/jyothir21/movie-recommender-notebook",
  },
  {
    name: "Personal Portfolio Website",
    period: "2025",
    description:
      "Single-page developer portfolio showcasing experience, projects, and co-op work. Designed with smooth scrolling, section reveal animations, a typewriter hero, and interactive cursor-driven glow and orbital backgrounds.",
    tech: ["React", "TypeScript", "CSS", "Framer Motion"],
    link: "https://github.com/jyothir21/jk-website",
  },
  {
    name: "FlexFit – Community Fitness Discovery Platform",
    period: "2024",
    subtitle: "Jan 2024 – Apr 2024",
    description:
      "Full-stack web platform that connects users with local gyms, studios, and sports clubs, while enabling business owners to advertise their facilities. Built with a React front end and Flask REST APIs backed by SQLite, with search, filtering, and user account flows.",
    tech: ["React", "JavaScript", "Python", "Flask", "REST APIs", "SQLite"],
    link: "https://github.com/jyothir21/FlexFit",
  },
  {
    name: "Molecule Visualizer – Interactive Chemical Structure Viewer",
    period: "2023",
    subtitle: "Jan 2023",
    description:
      "Interactive molecular visualization system that processes SDF files, stores molecular data in a structured SQLite database, and dynamically renders 2D SVG structures in a browser UI. Uses a C backend wrapped into Python with SWIG, plus a lightweight HTTP server.",
    tech: ["C", "Python", "SWIG", "SQLite", "JavaScript", "HTML/CSS"],
    link: "https://github.com/jyothir21/Molecule-Visualizer",
  },
  {
    name: "Game Suite Application",
    period: "2022",
    subtitle: "Nov 2022 – Dec 2022",
    description:
      "GUI-based Java game hub featuring multiple mini-games built with object-oriented design principles. Uses Gradle and Docker for environment management and JUnit for automated testing and continuous verification. [REQUEST ACCESS TO REPO]",
    tech: ["Java", "Gradle", "Docker", "JUnit"],
    link: "https://github.com/jyothir21/TicTacToe-GUI",
  },
];

// helper: where should this project sit relative to the active one?
function getPosition(
  index: number,
  activeIndex: number,
  total: number
): "center" | "left" | "right" | "hidden" {
  const diff = (index - activeIndex + total) % total;

  if (diff === 0) return "center"; // active
  if (diff === 1) return "right"; // next clockwise
  if (diff === total - 1) return "left"; // previous (counter-clockwise)
  return "hidden"; // everything else
}

export const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;

  // refs for auto-rotation + pause timer
  const autoRotateRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);

  const startAutoRotate = () => {
    if (autoRotateRef.current !== null) return; // already running
    autoRotateRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 7000);
  };

  const stopAutoRotate = () => {
    if (autoRotateRef.current !== null) {
      window.clearInterval(autoRotateRef.current);
      autoRotateRef.current = null;
    }
  };

  const pauseAutoRotateForUser = () => {
    stopAutoRotate();

    if (pauseTimeoutRef.current !== null) {
      window.clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = window.setTimeout(() => {
      startAutoRotate();
    }, 10000);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % total);
    pauseAutoRotateForUser();
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    pauseAutoRotateForUser();
  };

  // NEW: jump directly to a specific project (for dots)
  const goTo = (index: number) => {
    setActiveIndex(index);
    pauseAutoRotateForUser();
  };

  // initial auto-rotate setup
  useEffect(() => {
    startAutoRotate();

    return () => {
      stopAutoRotate();
      if (pauseTimeoutRef.current !== null) {
        window.clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [total]);

  return (
    <Reveal delay={80}>
      <div className="projects-carousel">
        <button
          className="projects-arrow projects-arrow-left"
          type="button"
          onClick={prev}
          aria-label="Previous project"
        >
          ‹
        </button>

        <div className="projects-track">
          {projects.map((p, index) => {
            const position = getPosition(index, activeIndex, total);
            const slideClass = `project-slide project-slide-${position}`;

            return (
              <div key={p.name} className={slideClass}>
                <article className="card">
                  <header className="card-header">
                    <div>
                      <h3>{p.name}</h3>
                      {p.subtitle && (
                        <p className="card-subtitle">{p.subtitle}</p>
                      )}
                    </div>
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
              </div>
            );
          })}
        </div>

        <button
          className="projects-arrow projects-arrow-right"
          type="button"
          onClick={next}
          aria-label="Next project"
        >
          ›
        </button>

        {/* NEW: dot tracker */}
        <div className="projects-dots" aria-label="Project selector">
          {projects.map((_, index) => (
            <button
              key={index}
              type="button"
              className={
                index === activeIndex
                  ? "projects-dot projects-dot-active"
                  : "projects-dot"
              }
              onClick={() => goTo(index)}
              aria-label={`Show project ${index + 1} of ${total}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
};
