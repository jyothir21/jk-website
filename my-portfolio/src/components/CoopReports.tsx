import React from "react";

type Report = {
  title: string;
  role: string;
  term: string;
  link?: string;
};

const reports: Report[] = [
  {
    title: "Respawn Entertainment — UI Engineer Intern",
    role: "Work Term Report",
    term: "2024",
    link: "#", // Add actual PDF/Drive link
  },
  {
    title: "University of Guelph — CCS",
    role: "Work Term Report",
    term: "2025",
    link: "#", // Add link
  },
];

export const CoopReports: React.FC = () => {
  return (
    <>
      <div className="cards-grid">
        {reports.map((r) => (
          <article key={r.title} className="card">
            <h3>{r.title}</h3>
            <p className="muted">{r.role}</p>
            <p className="muted">{r.term}</p>

            {r.link && (
              <a
                href={r.link}
                target="_blank"
                rel="noreferrer"
                className="card-link"
              >
                View report →
              </a>
            )}
          </article>
        ))}
      </div>
    </>
  );
};
