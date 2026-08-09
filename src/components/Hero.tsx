import React, { useEffect, useState } from "react";

const TITLES = ["Jyothir Krishnan", "a Backend Developer", "a Software Engineer"];

export const Hero: React.FC = () => {
  const [loopIndex, setLoopIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = TITLES[loopIndex];
    const typingSpeed = isDeleting ? 70 : 110;
    const pauseAtFull = 1200; // pause when a full word is shown

    let timer: number;

    if (!isDeleting && displayText === fullText) {
      // pause before deleting
      timer = window.setTimeout(() => setIsDeleting(true), pauseAtFull);
    } else if (isDeleting && displayText === "") {
      // move to next word and start typing again
      timer = window.setTimeout(() => {
        setIsDeleting(false);
        setLoopIndex((prev) => (prev + 1) % TITLES.length);
      }, 250);
    } else {
      timer = window.setTimeout(() => {
        const nextLength = displayText.length + (isDeleting ? -1 : 1);
        setDisplayText(fullText.slice(0, nextLength));
      }, typingSpeed);
    }

    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting, loopIndex]);

  return (
    <div className="hero">
      <div className="hero-text">
        <p className="hero-kicker">Software Engineer · Backend Developer</p>

        <h1 className="hero-title">
          Hi, I&apos;m
          <span className="hero-title-line">
            <span className="hero-title-rotating">
              {displayText || "\u00A0"}
            </span>
          </span>
        </h1>

        <p className="hero-subtitle">
          I build software with an emphasis on clarity, reliability, and
          usability. My work spans UI systems, developer tooling, and real-time
          applications shaped by a systems-level mindset.
        </p>

        <div className="hero-actions">
          <a
            href="/Jyothir_Krishnan_Resume_2026_JAM.pdf"
            download="JyothirKrishnan_Resume.pdf"
            className="btn primary"
          >
            Resumé
          </a>
          <a
            href="https://www.linkedin.com/in/jyothir-krishnan/"
            target="_blank"
            rel="noreferrer"
            className="btn ghost"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-card">
        <p className="hero-tag">Currently</p>
        <h3>Backend Developer at JAM CRM</h3>
        <p>
          Building applications, microsites, and web forms on Python, REST
          APIs, and SQL, backed by serverless AWS infrastructure. Growing into
          data science and AI work on the side.
        </p>
      </div>
    </div>
  );
};
