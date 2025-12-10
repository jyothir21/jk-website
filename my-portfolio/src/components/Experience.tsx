import React from "react";
import { Reveal } from "./Reveal";

type Course = {
  name: string;
  term: string;
};

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  courses?: Course[]; // optional nested course list
};

const experience: ExperienceItem[] = [
  {
    role: "UI Engine Engineer (Co-op)",
    company: "Respawn Entertainment",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Returned to the same team in Respawn Entertainment as a Software Engineering Intern, contributing to sprint tasks and resolving critical UI bugs to support game stability and quality.",
      "Collaborated with senior SS and QV engineers to investigate and fix UI automation soak bugs, enhancing test coverage and reliability through script and code-level solutions.",
      "Took initiative in driving improvements to generic UI soak testing, aligning with team best practices and improving cross-functional collaboration.",
    ],
  },
  {
    role: "IT Systems Support Analyst (Co-op)",
    company: "University of Guelph — CCS",
    period: "Jan 2025 – May 2025",
    bullets: [
      "Provided technical support for Office 365 tools including Outlook, Teams, OneDrive, and SharePoint for students, staff, and faculty.",
      "Developed PowerShell scripts to automate internal workflows, improving efficiency and reducing errors across the Email and Collaboration team.",
      "Supported campus events and tested new Microsoft admin features prior to rollout while maintaining documentation for end users.",
    ],
  },
  {
    role: "UI Engine Engineer (Co-op)",
    company: "Respawn Entertainment",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Reworked error-handling components for the RTK system, enhancing stability and reliability using C++.",
      "Led and contributed to discussions on error-handling standards, helping the team adopt consistent best practices.",
      "Addressed and resolved gameplay bugs, contributing to overall game performance and user experience.",
    ],
  },
  {
    role: "C++ Software Engineer (Co-op)",
    company: "Electronic Arts (EA)",
    period: "May 2023 – Dec 2023",
    bullets: [
      "Diagnosed and resolved back-end bugs and game crashes in FC24 through advanced C++ and object-oriented programming techniques.",
      "Enhanced game functionality by introducing new screen features and optimizing design elements using ActionScript, Adobe Flash, and Frostbite tooling.",
      "Created Python scripts to streamline workflows for software engineers, improving productivity and debugging efficiency.",
      "Participated in Agile Scrum rituals, including sprint planning and feature development, using Perforce for version control.",
    ],
  },
  {
    role: "Undergraduate Teaching Assistant",
    company: "University of Guelph",
    period: "Aug 2022 – Present",
    bullets: [
      "Taught multiple Computer Science courses including Software Design I (Python), Introduction to Programming (C), and Intermediate Programming (C).",
      "Led lab sessions, explained key programming concepts, and created instructional materials such as walkthroughs and tutorials.",
      "Held office hours to support students with debugging, assignments, and understanding core course content.",
      "Collaborated with professors to grade assignments, develop teaching resources, and maintain consistent course delivery across semesters.",
    ],
    courses: [
      { name: "Software Design I", term: "Fall 2022" },
      { name: "Intermediate Programming", term: "Winter 2023" },
      { name: "Intermediate Programming", term: "Winter 2024" },
      { name: "Introduction to Programming", term: "Fall 2024" },
      { name: "Introduction to Programming", term: "Fall 2025" },
      { name: "Intermediate Programming", term: "Winter 2026" },
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

              {item.courses && (
                <li>
                  Courses taught across multiple terms:
                  <ul className="course-list">
                    {item.courses.map((course) => (
                      <li
                        key={course.name + course.term}
                        className="course-row"
                      >
                        <span className="course-name">{course.name}</span>
                        <span className="course-term">- {course.term}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
};
