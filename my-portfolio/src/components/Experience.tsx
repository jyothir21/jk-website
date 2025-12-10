import React from "react";
import { Reveal } from "./Reveal";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "UI Engine Engineer Intern (Return)",
    company: "Respawn Entertainment — Apex Legends",
    period: "Sep 2025 – May 2026",
    bullets: [
      "Improved UI automation reliability through soak tests and tooling updates.",
      "Enhanced scripting system documentation and RTK behavior metadata.",
    ],
  },
  {
    role: "IT Systems Support Analyst (Co-op)",
    company: "University of Guelph — CCS",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Built PowerShell automation for Office 365 workflows.",
      "Supported students, staff, and faculty with enterprise collaboration tools.",
    ],
  },
  {
    role: "UI Engineer Intern",
    company: "Respawn Entertainment",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Implemented UI automation event signals and improved stability of R5 soak testing.",
      "Enhanced RTK behavior documentation and scripting integration.",
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <div className="timeline">
      {experience.map((item, index) => (
        <Reveal key={item.role} delay={index * 120}>
          <div className="timeline-item">
            <h3>{item.role}</h3>
            <p className="timeline-company">{item.company}</p>
            <p className="timeline-period">{item.period}</p>
            <ul>
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
};
