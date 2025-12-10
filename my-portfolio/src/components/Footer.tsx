import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Jyothir Krishnan. Built with React +
        TypeScript.
      </p>
    </footer>
  );
};
