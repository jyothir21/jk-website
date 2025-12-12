import React from "react";

export const Contact: React.FC = () => {
  return (
    <>
      <p>
        Feel free to reach out if you’d like to collaborate, discuss
        opportunities, or ask questions about any of my work.
      </p>

      <div className="contact-links">
        <a href="mailto:jkrishna@uoguelph.ca" className="btn primary">
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/jyothir-krishnan/"
          className="btn ghost"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/jyothir21"
          className="btn ghost"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </>
  );
};
