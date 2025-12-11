import React, { useEffect, useState, useRef } from "react";
import { Reveal } from "./Reveal";
import { createPortal } from "react-dom";

type ReportCard = {
  id: "respawn-2025" | "ccs-2025" | "respawn2-2025" | "ea-2025" | "ea2-2025";
  title: string;
  company: string;
  year: string;
  blurb: string;
};

const reportCards: ReportCard[] = [
  {
    id: "respawn-2025",
    title: "UI Engine Engineer Intern",
    company: "Respawn Entertainment",
    year: "2025",
    blurb:
      "Learn more about my internship here at Respawn Entertainment, working on the new UI Automation system, and how I worked on a critical issue that improved the automation workflow on my team.",
  },
  {
    id: "ccs-2025",
    title: "IT System Support Analyst Intern",
    company: "University of Guelph - CCS",
    year: "2025",
    blurb:
      "Learn more about my co-op experience at CCS, the place where I got to make an impact to my school community.",
  },
  {
    id: "respawn2-2025",
    title: "UI Engine Engineer Intern",
    company: "Respawn Entertainment",
    year: "2024",
    blurb:
      "Learn more about my internship here at Respawn Entertainment, working on revamping error handling in the Apex Code base, and some of the other cool things I have been doing.",
  },
  {
    id: "ea2-2025",
    title: "C++ Software Engineer Intern",
    company: "Electronic Arts (EA)",
    year: "2023",
    blurb:
      "Learn more about my second half of my internship here at Electronic Arts (EA), one of the worlds most renowned global gaming companies and some of the cool things I have done in this company.",
  },
  {
    id: "ea-2025",
    title: "C++ Software Engineer Intern",
    company: "Electronic Arts (EA)",
    year: "2023",
    blurb:
      "Learn more about my first co-op experience at Electronic Arts (EA), one of the worlds most renowned global gaming companies and some of the cool things I have done in this company.",
  },
];

type ActiveReportId = ReportCard["id"] | null;

export const CoopReports: React.FC = () => {
  const [activeReport, setActiveReport] = useState<ActiveReportId>(null);
  const [savedScrollY, setSavedScrollY] = useState(0);

  // remember whatever inline overflow html/body may already have
  const bodyOverflowRef = useRef<string>("");
  const htmlOverflowRef = useRef<string>("");

  const openReport = (id: ActiveReportId) => {
    if (!id) return;

    const y = window.scrollY;
    setSavedScrollY(y);
    setActiveReport(id);

    // start the report view at the top
    window.scrollTo(0, 0);
  };

  const closeReport = () => {
    setActiveReport(null);
    // restore scroll position to exactly where the user was
    window.scrollTo(0, savedScrollY);
  };

  // lock/unlock page scroll when a report is open
  useEffect(() => {
    const htmlEl = document.documentElement;

    if (activeReport) {
      bodyOverflowRef.current = document.body.style.overflow;
      htmlOverflowRef.current = htmlEl.style.overflow;

      document.body.style.overflow = "hidden";
      htmlEl.style.overflow = "hidden";
    } else {
      document.body.style.overflow = bodyOverflowRef.current || "";
      htmlEl.style.overflow = htmlOverflowRef.current || "";
    }

    // safety on unmount
    return () => {
      document.body.style.overflow = bodyOverflowRef.current || "";
      htmlEl.style.overflow = htmlOverflowRef.current || "";
    };
  }, [activeReport]);

  return (
    <>
      {/* Co-op Reports cards */}
      <Reveal delay={80}>
        <div className="cards-grid coop-grid">
          {reportCards.map((r) => (
            <article key={r.id} className="card">
              <header className="card-header">
                <div>
                  <h3>{r.title}</h3>
                  <p className="card-subtitle">{r.company}</p>
                </div>
                <span className="card-pill">{r.year}</span>
              </header>

              <p className="card-body">{r.blurb}</p>

              <a
                href="#"
                className="card-link"
                onClick={(e) => {
                  e.preventDefault();
                  openReport(r.id);
                }}
              >
                View report →
              </a>
            </article>
          ))}
        </div>
      </Reveal>

      {/* Full-screen report “page” */}
      {activeReport &&
        createPortal(
          <div className="report-overlay">
            <button
              type="button"
              aria-label="Back"
              className="report-back-btn"
              onClick={closeReport}
            >
              ←
            </button>

            <div className="report-inner">
              {activeReport === "respawn-2025" && <RespawnReport />}
              {activeReport === "ccs-2025" && <CcsReport />}
              {activeReport === "respawn2-2025" && <RespawnReport2 />}
              {activeReport === "ea-2025" && <EA1 />}
              {activeReport === "ea2-2025" && <EA2 />}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

/* === Full Respawn report content === */

const RespawnReport: React.FC = () => {
  return (
    <article className="report-article">
      <header className="report-header">
        <h1>Respawn Entertainment - UI Engine Engineer Intern</h1>
        <p className="report-meta">Co-op Work Term Report · 2025</p>
      </header>

      <section className="report-section">
        <h2>Employer Information</h2>
        <p className="justify">
          Respawn Entertainment is a distinguished video game development studio
          known for its commitment to innovation, quality, and player focused
          experiences. Founded by industry veterans, Respawn has consistently
          pushed the boundaries of interactive entertainment, delivering high
          caliber titles that resonate with millions of players worldwide. The
          company is built on values of creativity, collaboration, and a
          relentless pursuit of excellence.
        </p>

        <p className="justify">
          With a focus on crafting engaging, narrative driven games, Respawn has
          made a significant impact in the gaming industry, notably through
          critically acclaimed franchises like <em>Titanfall</em>,{" "}
          <em>Apex Legends</em>, and <em>Star Wars Jedi</em>. Respawn
          Entertainment's dedication to fostering a positive gaming culture and
          delivering unforgettable experiences continues to set them apart as a
          leader in the industry.
        </p>

        <div className="report-image">
          <img
            src="/images/respawn-apex.png"
            alt="Apex Legends promotional art with Respawn branding"
          />
        </div>
      </section>

      <section className="report-section">
        <h2>Job Description</h2>

        <p className="justify">
          During my internship at Respawn Entertainment, I served as a UI Engine
          Engineer on the UI Code Team for <em>Apex Legends</em>, a globally
          recognized game. My primary focus this term was on improving the
          reliability of Respawn’s UI Automation Soak Testing systems. These
          systems are used to continuously run automated multiplayer matches to
          detect issues in the game’s UI under real world conditions.
        </p>

        <p className="justify">
          Due to NDA restrictions, I am limited in the specifics I can share,
          but I can describe that my work centered on diagnosing and fixing a
          long standing bug where matches were being counted as complete too
          early because of network retry behavior. This involved deep
          investigation across the engine and script layers, identifying a flaw
          in the match progression logic, and implementing a new engine to
          script signal that ensured match counts only advanced when the game
          was fully loaded and connected.
        </p>

        <p className="justify">
          Beyond the technical fix, I collaborated closely with QA and other
          engineers to validate the fix through extensive soak testing sessions,
          resulting in a measurable improvement in test reliability.
        </p>
      </section>

      <section className="report-section">
        <h2>Goals</h2>

        <div className="report-goal">
          <h3>Goal 1: Professional and Ethical Behavior - Leadership</h3>

          <p className="justify">
            As a senior intern on the R5 team, my goal was to strengthen my
            leadership skills by actively mentoring new interns, fostering
            collaboration, and developing professional competencies that are
            critical for full time roles. I aimed to grow into a confident,
            supportive, and communicative team member who contributes not only
            through technical execution, but also through meaningful
            interpersonal impact.
          </p>

          <h4>Reflection</h4>

          <p className="justify">
            As I reflect on this term, I am proud of the growth I have made in
            my leadership skills as a senior intern on the R5 team. I actively
            mentored new interns by sharing technical knowledge, offering
            guidance on navigating the codebase, and helping them adapt to the
            team’s workflows.
          </p>

          <p className="justify">
            I took initiative in group settings, such as leading discussions
            related to automation reliability and suggesting best practices for
            test writing. By modeling professional standards and maintaining
            open, supportive communication, I helped foster a collaborative
            environment where my peers felt comfortable seeking help and sharing
            ideas.
          </p>

          <p className="justify">
            This experience reinforced my confidence in taking on leadership
            responsibilities and contributing to the growth of others, which are
            skills that will be invaluable in a future full time role.
          </p>
        </div>

        <div className="report-goal">
          <h3>Goal 2: Build and Extend Soak Test Coverage - UI Automation</h3>

          <p className="justify">
            This goal focused on building and extending automated UI soak test
            coverage for the Lobby by working with Remus and the QE team. The
            objective was to strengthen the soak testing framework so that it
            could support more complex and realistic user interactions over long
            durations.
          </p>

          <p className="justify">
            This work aimed to increase the reliability and depth of automated
            UI testing, reduce manual testing overhead, and catch issues earlier
            in the development cycle.
          </p>

          <h4>Reflection</h4>

          <p className="justify">
            Over the course of the term, I successfully expanded automated UI
            soak test coverage for the Lobby. Working closely with Remus and the
            QE team, I enhanced the soak test framework so that it could support
            more complex user flows and run for extended periods without
            failure.
          </p>

          <p className="justify">
            A major accomplishment was implementing the engine to script signal
            that fixed a long standing issue with premature match counting,
            which significantly improved test reliability and reduced the need
            for manual intervention.
          </p>
        </div>

        <div className="report-goal">
          <h3>Goal 3: Improve and Maintain the UI Automation Interface</h3>

          <p className="justify">
            This goal focused on improving and maintaining the UI automation
            interface by finding and resolving fragility in automated test
            execution caused by UI changes across builds. As the UI continues to
            evolve, especially during the transition from VGUI to RTK, it is
            important to ensure that automation remains stable to avoid test
            flakiness and unnecessary hotfixes.
          </p>

          <p className="justify">
            Creating a structured feedback loop between development and QE helps
            catch issues early and maintain long term reliability in the
            automation pipeline.
          </p>

          <h4>Reflection</h4>

          <p className="justify">
            I achieved my goal of improving and maintaining the UI automation
            interface by identifying sources of fragility and implementing
            targeted fixes. One example was diagnosing and resolving an issue
            caused by network retries, which previously disrupted test stability
            across builds.
          </p>

          <p className="justify">
            I also established a feedback loop with QE, allowing UI changes to
            be flagged earlier and addressed before they could break automation.
            Maintaining close communication with QE helped ensure that tests
            remained stable and reliable across multiple builds.
          </p>
        </div>
      </section>

      <section className="report-section">
        <h2>Conclusion</h2>

        <p className="justify">
          Returning to Respawn for another term on the R5 UI Code Team has been
          an incredibly rewarding experience. Building on the foundation from my
          previous internship, I was able to take on more complex challenges,
          contribute to higher impact projects, and step into a leadership role
          by mentoring new interns.
        </p>

        <p className="justify">
          This term strengthened my technical expertise in UI automation systems
          and taught me the importance of maintaining long term stability in
          evolving codebases. It also reinforced how valuable communication and
          collaboration are when solving problems across teams.
        </p>

        <p className="justify">
          I am grateful for the trust placed in me to deliver impactful work and
          for the opportunity to grow both as an engineer and as a teammate.
          Although my time at Respawn is coming to an end, the skills,
          relationships, and experiences I have gained will continue to shape my
          professional journey moving forward.
        </p>

        <div className="report-image">
          <img
            src="/images/respawn_2025.jpg"
            alt="Respawn office and Apex Legends imagery"
          />
        </div>
      </section>

      <section className="report-section">
        <h2>Acknowledgments</h2>

        <p className="justify">
          I would like to express my gratitude to the incredible people who made
          this internship such a rewarding and enjoyable experience. I want to
          thank my onboarding buddy, Marcos, for making my transition back to
          the team smooth and engaging. He provided meaningful tasks that helped
          me ramp up quickly, supported me throughout the term, and advocated
          for me to take on the UI automation improvements that became the
          highlight of my internship.
        </p>

        <p className="justify">
          I am also very thankful to my manager, Beth, who guided me throughout
          my time at Respawn and shared valuable insights on growing as an
          engineer and preparing for full time roles. Near the end of my term,
          Steven stepped in as my new manager, and I appreciate how quickly he
          ramped up and supported my co-op goals.
        </p>

        <p className="justify">
          Working alongside such talented, supportive, and collaborative
          colleagues made this term both productive and inspiring.
        </p>
      </section>
    </article>
  );
};

const CcsReport: React.FC = () => (
  <article className="report-article">
    <header className="report-header">
      <h1>University of Guelph - CCS IT System Support Analyst Intern</h1>
      <p className="report-meta">Co-op Work Term Report · 2025</p>
    </header>

    {/* Employer Information */}
    <section className="report-section">
      <h2>Employer Information</h2>
      <p className="justify">
        Computing and Communications Services (CCS) is the central IT department
        at the University of Guelph, responsible for maintaining the campus core
        technology infrastructure. From managing email and Wi-Fi to supporting
        tools like Office 365, OneDrive, and Microsoft Teams, CCS helps ensure
        students, staff, and faculty have the digital resources they need to
        teach, learn, and work effectively. The team focuses not only on keeping
        things running, but also on improving how the campus uses technology
        through training, support, and piloting new tools.
      </p>
      <p className="justify">
        Within CCS, the Email and Collaboration team plays a key role in
        supporting communication and productivity across the university. This
        team helps the U of G community get the most out of platforms like
        Outlook, SharePoint, and Teams, whether that means answering support
        tickets, developing user guides, or recommending the right tool for a
        specific situation. It is a hands on, people focused team that bridges
        the gap between technology and everyday users, making sure everyone can
        collaborate and stay connected with ease.
      </p>

      <div className="report-image">
        <img src="/images/ccs1.png" alt="CCS related imagery" />
      </div>
    </section>

    {/* Job Description */}
    <section className="report-section">
      <h2>Job Description</h2>
      <p className="justify">
        During my time at CCS, I worked as part of the Email and Collaboration
        team, supporting students, faculty, and staff with Office 365 and other
        communication tools across the University of Guelph. A major part of my
        role involved responding to support tickets and helping people with
        issues in Outlook, Teams, OneDrive, SharePoint, and more. I also worked
        with systems such as Maestro, IronPort, and ListServ, which expanded my
        understanding of enterprise level email and collaboration platforms.
      </p>
      <p className="justify">
        One of the most interesting aspects of the role was the chance to use
        Microsoft admin tools directly and test new features before they were
        rolled out to campus. In addition, I helped create and update
        documentation so that colleagues and users could better navigate these
        tools on their own.
      </p>
      <p className="justify">
        What really made the role unique for me was the mix of technical problem
        solving and people focused support. While I came in with some basic
        Office 365 knowledge and customer service experience, I picked up many
        new skills on the job. One of the most important was PowerShell
        scripting. I wrote several scripts to automate and streamline workflows
        for our team, saving time and reducing human error. I also helped run
        and support high profile budget meetings at the university, making sure
        everything ran smoothly from a technology perspective. These experiences
        helped me become more comfortable with both technical tools and real
        world collaboration, especially in hybrid work settings.
      </p>
    </section>

    {/* Goals */}
    <section className="report-section">
      <h2>Goals</h2>

      {/* Goal 1 */}
      <div className="report-goal">
        <h3>Goal 1: Critical and Creative Thinking - Inquiry and Analysis</h3>
        <p className="justify">
          In my role at CCS, one of my key goals was to enhance my ability to
          inquire, analyze, and evaluate issues that arose while supporting
          Office 365 and related collaboration tools for the University of
          Guelph community. I aimed to apply logical and ethical reasoning to
          address user inquiries, identify solutions, and improve the
          effectiveness of the collaboration tools. My objective was to select
          appropriate solutions by evaluating potential options, resolving user
          issues, and suggesting best practices in a way that improved the
          overall user experience.
        </p>
        <h4>Reflection</h4>
        <p className="justify">
          During my time at CCS, I fully met my goal of strengthening my inquiry
          and analysis skills. Supporting Office 365 and related collaboration
          tools constantly challenged me to think critically, troubleshoot
          effectively, and consider the user experience in every solution I
          provided. I evaluated each issue carefully, often researching new
          tools or using PowerShell scripting to streamline processes, all while
          maintaining CCS values of service and integrity.
        </p>
        <p className="justify">
          I also created training materials that received positive feedback from
          my manager and will be used by future co-op students. Through these
          experiences, I became more confident in my ability to analyze complex
          problems, think creatively, and develop thoughtful, user focused
          solutions that enhance both individual workflows and broader support
          processes.
        </p>
      </div>

      {/* Goal 2 */}
      <div className="report-goal">
        <h3>Goal 2: Professional and Ethical Behaviour - Teamwork</h3>
        <p className="justify">
          Another goal for this work term was to excel in my teamwork skills by
          contributing to the collaborative efforts of different teams within
          CCS. Given the importance of teamwork in the department and the
          opportunity to work closely with colleagues from various areas, my
          objective was to foster a supportive environment while learning from
          others and sharing my own insights to support team goals.
        </p>
        <h4>Reflection</h4>
        <p className="justify">
          Reflecting on this goal, I am pleased with my progress and the
          collaborative relationships I built with my colleagues. By actively
          offering support in solving technical challenges and contributing to
          ongoing projects, I was able to bond with team members and develop a
          better understanding of their personalities and working styles.
        </p>
        <p className="justify">
          I regularly sought feedback from teammates and supervisors, which
          helped me refine my approach and strengthen my communication and
          collaboration. Listening closely to colleagues and users allowed me to
          respond more effectively, ensuring mutual respect and efficient
          problem solving. Overall, I made significant strides in working as
          part of a team, and my efforts positively impacted both team success
          and my professional growth.
        </p>
      </div>

      {/* Goal 3 */}
      <div className="report-goal">
        <h3>
          Goal 3: Professional and Ethical Behaviour - Personal Organization and
          Time Management
        </h3>
        <p className="justify">
          Personal organization and time management were also key skills I aimed
          to improve during my work term. My goal was to develop and maintain a
          structured approach for handling daily tasks, such as user inquiries
          and troubleshooting Office 365 issues, as well as longer term projects
          like creating training resources and exploring new collaboration
          tools. By the end of the term, I wanted to improve my productivity,
          ensure timely resolution of support tickets, and manage competing
          priorities while maintaining a healthy work life balance.
        </p>
        <h4>Reflection</h4>
        <p className="justify">
          Looking back, I made substantial progress in managing both daily tasks
          and long term projects. I kept close track of which support tickets
          required immediate attention and which could be addressed later, and I
          made effective use of status features in Footprints to stay organized.
        </p>
        <p className="justify">
          Over time, I improved my work life balance, which had been a challenge
          at the beginning of the co-op, and I learned not to work extra hours
          unless it was truly necessary. For longer term projects, I maintained
          momentum by regularly following up with team members. Feedback showed
          that I consistently met deadlines, maintained a steady workflow, and
          handled my responsibilities effectively.
        </p>
      </div>

      {/* Goal 4 */}
      <div className="report-goal">
        <h3>Goal 4: Communicating - Written Communication</h3>
        <p className="justify">
          Another important goal was to improve my written communication,
          particularly in client responses and documentation. By enhancing my
          ability to convey information clearly and professionally, I aimed to
          provide users with more effective support while also contributing to
          well structured training resources and documentation for CCS Office
          365 tools.
        </p>
        <h4>Reflection</h4>
        <p className="justify">
          I am pleased with the progress I made toward this goal. I focused on
          crafting clear, concise, and professional responses to client
          inquiries, making sure my tone was both empathetic and easy to
          understand. This approach led to fewer follow up questions, since
          users were often able to resolve their issues based on my initial
          reply.
        </p>
        <p className="justify">
          The documentation and training materials I developed were well
          received, and my manager expressed satisfaction with both my client
          communication and the resources I produced. Overall, I am proud of how
          much I improved at conveying information effectively so that users and
          colleagues had the clarity they needed without extra clarification.
        </p>
      </div>

      {/* Goal 5 */}
      <div className="report-goal">
        <h3>Goal 5: Critical and Creative Thinking - Problem Solving</h3>
        <p className="justify">
          My final goal was to enhance my problem solving skills by improving my
          ability to analyze and resolve issues related to Office 365 and
          collaboration tools. By developing stronger problem solving
          techniques, I aimed to resolve user inquiries more efficiently and
          provide a smoother experience with the tools supported by CCS.
        </p>
        <h4>Reflection</h4>
        <p className="justify">
          Over the term, I made significant progress toward this goal. I became
          highly proficient with the tools related to my role, including Office
          365 and collaboration platforms. I developed a strong understanding of
          the most common issues users encountered and was able to resolve them
          efficiently and effectively.
        </p>
        <p className="justify">
          My proficiency with PowerShell scripting was a major asset to the
          team. By automating tasks and creating more streamlined solutions, I
          helped improve overall workflow. As I handled increasingly complex
          issues independently and needed less guidance from colleagues, I
          strengthened my problem solving abilities and contributed to the
          smooth operation of CCS support services.
        </p>
      </div>
    </section>

    {/* Conclusion */}
    <section className="report-section">
      <h2>Conclusion</h2>
      <p className="justify">
        This co-op term with CCS has been one of the most rewarding parts of my
        time at the University of Guelph. As a student here, it felt incredibly
        meaningful to support the very community I am part of. Whether I was
        helping someone troubleshoot an issue with Outlook, writing PowerShell
        scripts to automate repetitive tasks, or making sure a budget meeting
        ran smoothly from a technology standpoint, I always felt that the work I
        was doing mattered.
      </p>
      <p className="justify">
        I gained a better understanding of how IT keeps things running behind
        the scenes, and it gave me a real sense of pride to contribute to my
        community in such a direct way. Beyond the technical experience, this
        job helped me grow as a problem solver and as a communicator. I learned
        to work through challenges both independently and with my team, and I
        was surrounded by people who were always willing to help and share
        knowledge.
      </p>
      <p className="justify">
        I am deeply grateful for the chance to contribute in a meaningful way to
        a place that already means so much to me, and I know I will carry the
        skills and confidence I gained here into whatever comes next.
      </p>
    </section>

    {/* Acknowledgments */}
    <section className="report-section">
      <h2>Acknowledgments</h2>
      <p className="justify">
        I want to give a huge thank you to my manager, Garrett, for being such a
        positive and supportive part of this co-op experience. From day one, he
        made it easy to feel comfortable and confident in my role.
        Garrett&apos;s trust in me and his easygoing nature created a work
        environment where I felt both supported and empowered to do my best.
      </p>
      <p className="justify">
        He is not only a great manager when it comes to technical work, but also
        someone who genuinely cares about me as a person. Whether it was
        navigating a tricky PowerShell script or talking through things
        happening in my personal life, Garrett was always there to listen,
        encourage, and help however he could. That level of trust and support
        made a huge difference in my overall experience, and I am incredibly
        grateful to have had him in my corner throughout this term.
      </p>
    </section>
  </article>
);

const RespawnReport2: React.FC = () => (
  <article className="report-article">
    <header className="report-header">
      <h1>Respawn Entertainment - UI Engine Engineer Intern</h1>
      <p className="report-meta">Co-op Work Term Report · 2024</p>
    </header>

    {/* Employer Information */}
    <section className="report-section">
      <h2>Employer Information</h2>
      <p className="justify">
        Respawn Entertainment is a distinguished video game development studio
        known for its commitment to innovation, quality, and player centric
        experiences. Founded by industry veterans, Respawn has consistently
        pushed the boundaries of interactive entertainment, delivering high
        caliber titles that resonate with millions of players worldwide. The
        company is built on values of creativity, collaboration, and a
        relentless pursuit of excellence. With a focus on crafting engaging,
        narrative driven games, Respawn has made a significant impact in the
        gaming industry, notably through critically acclaimed franchises like
        Titanfall, Apex Legends, and Star Wars Jedi. Respawn
        Entertainment&apos;s dedication to fostering a positive gaming culture
        and delivering unforgettable experiences continues to set them apart as
        a leader in the industry.
      </p>

      <div className="report-image">
        <img src="/images/respawn-logo.jpeg" alt="Respawn Entertainment logo" />
      </div>
    </section>

    {/* Job Description */}
    <section className="report-section">
      <h2>Job Description</h2>
      <p className="justify">
        During my internship at Respawn Entertainment, I served as a UI Engine
        Engineer on the UI Code Team for Apex Legends, a globally recognized
        game. My primary focus was on improving error handling within
        Respawn&apos;s RTK system. Due to NDA restrictions, I am limited in what
        I can share about the RTK system, but I can describe that my role
        involved reworking the error handling logic to ensure consistency across
        the codebase and proper management of each error.
      </p>
      <p className="justify">
        Beyond the technical work, I initiated discussions with the team about
        establishing new standards for error handling, encouraging deeper
        consideration of best practices. This collaboration prompted the team to
        make more informed decisions on how to approach different error handling
        methods. I also contributed to the team&apos;s culture by introducing a
        trivia game during our weekly standups, which added a lively element
        that my colleagues enjoyed. In addition, I created documentation on
        optimizing Gmail inboxes to assist with onboarding new team members,
        providing a valuable resource for the future.
      </p>
    </section>

    {/* Goals */}
    <section className="report-section">
      <h2>Goals</h2>

      <p className="justify">
        For this term, I was committed to setting ambitious goals that would
        support my professional development. My primary focus areas included
        strengthening my skills in inquiry and analysis, enhancing my teamwork
        capabilities, and refining my personal organization and time management.
        By concentrating on these objectives, I aimed to contribute effectively
        to my team while growing as a well rounded professional, ready to tackle
        complex challenges with greater efficiency and insight.
      </p>

      {/* Goal 1 */}
      <div className="report-goal">
        <h3>Goal 1: Critical and Creative Thinking - Inquiry and Analysis</h3>
        <p className="justify">
          One of my goals focused on improving my capacity for effective and
          efficient inquiry and analysis of problems. I aimed to use logical and
          ethical reasoning strategies to assess different potential solutions,
          conclusions, and methodologies. My objective was to recognize the
          strengths and weaknesses of alternative approaches to a problem and
          select the most appropriate solution.
        </p>
        <h4>Reflection</h4>
        <p className="justify">
          As I reflect on my time at Respawn Entertainment, I am pleased with
          the progress I made toward this goal. Throughout my internship, I
          encountered many challenges that required careful evaluation and
          strategic thinking. I focused on using logical and ethical reasoning
          to assess different solutions and approaches.
        </p>
        <p className="justify">
          By critically analyzing the strengths and weaknesses of each option, I
          was able to identify and implement effective solutions to the problems
          I faced. This process sharpened my problem solving abilities and
          reinforced the importance of thoughtful, informed decision making. My
          experience at Respawn improved my ability to approach complex issues
          with a more analytical and balanced perspective, which will be
          invaluable in future roles.
        </p>
      </div>

      {/* Goal 2 */}
      <div className="report-goal">
        <h3>Goal 2: Professional and Ethical Behaviour - Teamwork</h3>
        <p className="justify">
          As an intern at Respawn, another key goal was to excel in my teamwork
          skills. Recognizing how highly Respawn values collaboration, my
          objective was to actively develop my ability to work effectively
          within the UI Code team. With many new members joining, I saw this as
          a strong opportunity for mutual growth and learning.
        </p>
        <h4>Reflection</h4>
        <p className="justify">
          As I neared the end of my internship, I felt confident that I had made
          meaningful progress toward this goal. From the start, I understood the
          importance of collaboration on the UI Code team, especially with a mix
          of newer and more experienced members.
        </p>
        <p className="justify">
          I took proactive steps to engage with colleagues, whether through
          participating in group discussions, asking questions, or offering help
          where I could. These efforts strengthened our collective work and
          helped build a more supportive environment. This experience not only
          improved my ability to work within a team, but also deepened my
          appreciation for the collaborative culture at Respawn.
        </p>
      </div>

      {/* Goal 3 */}
      <div className="report-goal">
        <h3>
          Goal 3: Professional and Ethical Behaviour - Personal Organization and
          Time Management
        </h3>
        <p className="justify">
          My third major goal was to improve my personal organization and time
          management. I wanted to develop and maintain a structured method for
          handling daily tasks and longer term projects, ensuring timely
          completion and consistent performance. By the end of the term, I aimed
          to maintain a steady level of productivity and efficiency while
          supporting a healthy balance between work and personal life.
        </p>
        <h4>Reflection</h4>
        <p className="justify">
          As I concluded my internship at Respawn, I was proud of the progress I
          made in this area. Over the term, I focused on developing a clear,
          organized approach to managing my work. By setting priorities,
          planning my time, and tracking my progress, I was able to consistently
          meet deadlines and maintain a high level of productivity.
        </p>
        <p className="justify">
          This disciplined approach not only helped me complete my tasks on
          time, but also allowed me to balance my professional responsibilities
          with my personal well being. The strategies I developed during this
          period have significantly improved my efficiency and given me tools
          that will benefit me in both my career and personal life.
        </p>
      </div>
    </section>

    {/* Conclusion */}
    <section className="report-section">
      <h2>Conclusion</h2>
      <p className="justify">
        Returning to EA and working at Respawn was an incredible experience. As
        I concluded my four month internship at Respawn Entertainment, I found
        myself reflecting on how valuable the journey had been. In my role as a
        UI Engine Engineer, I gained practical insight into my future career
        path and what it is like to work in the game industry.
      </p>
      <p className="justify">
        Respawn helped sharpen my existing coding abilities and introduced me to
        new frameworks and technologies that I never expected to use. As a
        coding enthusiast, this role taught me how important robust error
        handling is and how impactful it can be at an industry level when done
        correctly. The experience deepened my understanding of industry
        practices and showed me how enjoyable and rewarding this work can be.
      </p>
      <p className="justify">
        Beyond the technical skills, this internship strengthened my ability to
        work effectively as part of a team. I had the chance to contribute ideas
        and collaborate closely with colleagues, many of whom were also
        relatively new to the team. This made it easier for me to open up, ask
        questions, and learn. I am extremely grateful for the opportunity to
        learn and apply new skills, and I believe this experience will greatly
        benefit my future career.
      </p>

      <div className="report-image">
        <img src="/images/EA.jpeg" alt="Electronic Arts and Respawn imagery" />
      </div>
    </section>

    {/* Acknowledgments */}
    <section className="report-section">
      <h2>Acknowledgments</h2>
      <p className="justify">
        I want to thank the amazing people on my team who made this internship
        so enjoyable. I am especially grateful to my manager, Beth, who always
        encouraged me to try new things, learn from them, and supported the work
        I did on the team. Her guidance and confidence in me had a huge impact
        on my experience.
      </p>
      <p className="justify">
        I would also like to thank Marcos and Steven for helping me onboard onto
        the team and regularly checking in to make sure I had what I needed to
        succeed. Finally, I want to thank the rest of my teammates, Fernando,
        Remus, and Casey, for all of their support. They are an incredible group
        of people who provided me with a valuable and memorable learning
        experience.
      </p>
    </section>
  </article>
);

const EA1: React.FC = () => (
  <article className="report-article">
    <header className="report-header">
      <h1>Electronic Arts - C++ Software Engineer Intern</h1>
      <p className="report-meta">Co-op Work Term Report · 2023</p>
    </header>

    {/* Employer Information */}
    <section className="report-section">
      <h2>Employer Information</h2>
      <p className="justify">
        Electronic Arts (EA) is a renowned global company that leads in the
        realm of video game development and interactive entertainment technology
        for over 600 million players. The company specializes in creating
        captivating gaming experiences across various platforms, encompassing
        areas of computer science such as graphics rendering, artificial
        intelligence, physics simulations, and network programming. Through its
        innovative work, EA merges technology and creativity to craft the
        immersive games enjoyed by millions worldwide. Notably, EA is
        responsible for developing popular gaming franchises like FC (formerly
        FIFA), Madden, NFL, The Sims, and more, positively impacting the
        entertainment industry.
      </p>

      <div className="report-image">
        <img src="/images/EA_office.jpg" alt="Inside the EA office" />
      </div>
      <div className="report-image">
        <img src="/images/EA_logo_standing.jpg" alt="EA logo display" />
      </div>
    </section>

    {/* Job Description */}
    <section className="report-section">
      <h2>Job Description</h2>
      <p className="justify">
        During the first four months of my internship at Electronic Arts (EA), I
        served as a C++ Software Engineer on the Client Team for the new FC24
        game, working on both front end and back end features. My primary
        responsibility during this phase of my internship was centered around
        bug fixing within the Ultimate Team (UT) game mode. This task involved
        the identification, testing, and resolution of various bugs, each
        presenting unique challenges and valuable learning experiences. I worked
        extensively with C++, ActionScript, and XML in this capacity.
      </p>
      <p className="justify">
        As I became more immersed in the role of a software engineer, my
        responsibilities expanded to include redesigning aspects of the game,
        introducing new features and functionalities, and managing crash dump
        reports, which I found particularly intriguing. These reports
        represented errors in the codebase that led to game crashes during
        specific in game actions. My role entailed identifying the source of the
        error and determining whether it originated within our team or
        elsewhere, and then taking appropriate action. This experience greatly
        enhanced both my technical and interpersonal skills, since it involved a
        clearly defined sequence of investigative and communication tasks.
      </p>
      <p className="justify">
        These experiences were a big step forward in my learning because they
        provided insight into the company workflow and the entire process of
        implementing changes into the mainstream game.
      </p>
      <p className="justify">
        Most of the skills needed for the job were learned during onboarding.
        This included becoming familiar with company software such as Perforce,
        Jira, Slack, and Frostbite, as well as participating in stand up
        meetings and understanding the bug ticketing process. One critical skill
        I could directly apply from my school background was C++ programming. In
        the first two years of my education, we extensively covered C and object
        oriented programming concepts, which made it relatively easy to
        transition to a programming language I had previously learned. As a
        result, I was able to quickly enhance my proficiency in C++. I also
        leveraged this knowledge to pick up a new programming language,
        ActionScript, which was used at the company and proved to be highly
        beneficial.
      </p>
    </section>

    {/* Goals */}
    <section className="report-section">
      <h2>Goals</h2>

      <p className="justify">
        The general goals I set for this work term revolved around building
        teamwork, problem solving, and communication skills. I also established
        goals that were directly related to my day to day tasks, such as
        learning the company workflow, becoming proficient with internal tools
        and software, and building connections with my team members.
      </p>

      {/* Goal 1 */}
      <div className="report-goal">
        <h3>Goal 1: Professional and Ethical Behaviour - Teamwork</h3>
        <p className="justify">
          My primary objective as an intern at EA was to enhance my teamwork
          skills within a professional environment. At EA, teamwork is highly
          valued, and there is a strong emphasis on collaboration across all
          teams in the company. By working with a team of experts, I was eager
          to gain new insights and ideas to further develop my teamwork
          abilities. I also had the opportunity to expand my collaboration
          skills by working with individuals from other disciplines, such as the
          server team, which helped me broaden my network. I was excited to
          build upon my existing skills while striving for continuous
          improvement.
        </p>
        <h4>Reflection</h4>
        <p className="justify">
          After successfully completing my first work term with EA, I feel that
          I achieved this teamwork goal effectively. I was able to establish
          meaningful connections with a diverse range of team members, which
          allowed me to engage not only with software engineers, but also with
          designers, producers, and server engineers. These connections played
          an important role in helping me complete my tasks and responsibilities
          successfully.
        </p>
        <p className="justify">
          I also extended my networking efforts beyond my immediate team by
          actively participating in social company events such as Interns Talk
          with the CEO, Future at EA, and the Intern Fair. These interactions
          gave me valuable insight into the variety of projects happening at the
          company and helped me better understand my potential future with EA.
        </p>
      </div>

      {/* Goal 2 */}
      <div className="report-goal">
        <h3>Goal 2: Critical and Creative Thinking - Problem Solving</h3>
        <p className="justify">
          Problem solving is an essential skill in my role as a software
          engineer at EA. Given the nature of the work, I expected to encounter
          many challenges that would require efficient and thoughtful
          resolution. My objective was to continuously develop my problem
          solving abilities to the point where I could confidently and
          effectively address any issue that arose. By strengthening this skill,
          I aimed to improve my capacity to tackle complex problems and find
          good solutions within the context of my role on the team.
        </p>
        <h4>Reflection</h4>
        <p className="justify">
          During the initial phase of my internship, I made substantial progress
          toward this goal. As a software engineer on the team, I successfully
          resolved multiple assigned bugs and gradually took on more complex
          tasks. I started with straightforward front end bugs related to screen
          fonts and images, and eventually moved on to handling back end bugs
          that affected core data in the FC game. Altogether, I completed more
          than thirty bugs for the game.
        </p>
        <p className="justify">
          Through these bug fixing tasks, I developed a wide range of problem
          solving skills, including navigating a large codebase to locate
          specific segments, exploring different approaches to resolving an
          issue, and identifying reliable resources and people to ask for help.
          These new problem solving skills deepened my understanding of how
          issues are resolved in industry and gave me the confidence to face
          more complex challenges in the future.
        </p>
      </div>

      {/* Goal 3 */}
      <div className="report-goal">
        <h3>Goal 3: Communicating - Oral Communication</h3>
        <p className="justify">
          As an intern, communication is crucial because everything is new and
          every day is a learning experience. I anticipated having many
          questions throughout my term, and I knew that the most effective way
          to address them would be through clear and proactive communication
          with the right people.
        </p>
        <h4>Reflection</h4>
        <p className="justify">
          After the first four months of my internship, I had already made
          significant progress toward this goal. At first, starting
          conversations with different team members was challenging for me,
          mainly because I was not always sure who to approach with certain
          questions. Over time, through regular interactions with my manager and
          technical lead, I gained a clearer understanding of each team
          member&apos;s role. This helped me figure out who to contact for
          specific issues and when to reach out.
        </p>
        <p className="justify">
          The consistent presence of team members on Slack made communication
          much easier. I used dedicated channels for specific topics and tried
          to stay engaged with ongoing discussions. I also set up bi weekly
          meetings with my manager, which helped keep us aligned and ensured we
          both stayed up to date on my tasks and progress. This practice was
          very helpful in maintaining transparency and building trust.
        </p>
        <p className="justify">
          In addition, my regular visits to the Toronto office were a major
          turning point for me. They gave me valuable in person experience in an
          office environment and allowed me to network and interact with team
          members face to face. These office days were enjoyable and incredibly
          helpful for my confidence and communication skills.
        </p>
      </div>
    </section>

    {/* Conclusion */}
    <section className="report-section">
      <h2>Conclusion</h2>
      <p className="justify">
        This was my first co-op experience, and it was a fantastic opportunity
        to get a glimpse of the kind of work I might be doing in the future.
        Working at Electronic Arts (EA) was a true learning experience. The
        company helped me improve my coding skills in languages I already knew
        and gave me the chance to work with new frameworks, technologies, and
        tools.
      </p>
      <p className="justify">
        This placement encouraged me to explore application development in the
        industry and gave me a solid understanding of how things operate in a
        real production environment. I also grew a lot as a team player. I had
        the opportunity to share my ideas and collaborate closely with my
        teammates. I am genuinely thankful for the chance to acquire and
        practice new skills, which will definitely strengthen my qualifications
        for future job opportunities.
      </p>

      <div className="report-image">
        <img src="/images/interns.jpg" alt="FUT team interns group photo" />
      </div>
    </section>

    {/* Acknowledgments */}
    <section className="report-section">
      <h2>Acknowledgments</h2>
      <p className="justify">
        I want to thank the wonderful people on the FUT team who played a
        crucial role in making my experience so positive. Starting with Raissa,
        my onboarding buddy, I really appreciate her help in getting me settled
        into the work environment, answering my questions, and setting the stage
        for my time at EA. She was always dedicated to helping me learn, and I
        am very grateful for that.
      </p>
      <p className="justify">
        I also want to thank my mentors, Michael and Bala, for consistently
        sharing their knowledge and helping me understand the codebase and tools
        more deeply. Michael, in particular, gave me challenging tasks and
        feedback that helped me grow. I am very thankful to Jude and Dan for
        giving me the opportunity to be part of this amazing team and for
        supporting my development.
      </p>
      <p className="justify">
        Finally, a big thank you to the entire FUT team for creating such a
        welcoming and enjoyable atmosphere. That environment was a huge part of
        what made this experience so meaningful for me.
      </p>
    </section>
  </article>
);

const EA2: React.FC = () => (
  <article className="report-article">
    <header className="report-header">
      <h1>Electronic Arts - C++ Software Engineer</h1>
      <p className="report-meta">Co-op Work Term Report · 2023</p>
    </header>

    {/* Employer Information */}
    <section className="report-section">
      <h2>Employer Information</h2>
      <p className="justify">
        Electronic Arts (EA) is a renowned global company that leads in the
        realm of video game development and interactive entertainment technology
        for over 600 million players. The company specializes in creating
        captivating gaming experiences across various platforms, encompassing
        areas of computer science such as graphics rendering, artificial
        intelligence, physics simulations, and network programming. Through its
        innovative work, EA merges technology and creativity to craft the
        immersive games enjoyed by millions worldwide. Notably, EA is
        responsible for developing popular gaming franchises like FC (formerly
        FIFA), Madden, NFL, The Sims, and more, positively impacting the
        entertainment industry.
      </p>

      <div className="report-image">
        <img src="/images/interns2.jpg" alt="EA interns group photo" />
      </div>
      <div className="report-image">
        <img src="/images/fooseball.jpg" alt="EA office foosball area" />
      </div>
      <div className="report-image">
        <img src="/images/group.jpeg" alt="EA team group photo" />
      </div>
    </section>

    {/* Job Description */}
    <section className="report-section">
      <h2>Job Description</h2>
      <p className="justify">
        During my eight month internship at Electronic Arts (EA), I worked as a
        C++ Software Engineer on the Client Team for the new FC24 game. I was
        involved in both front end and back end features. For the first six
        months, my main task was bug fixing within the Ultimate Team (UT) game
        mode. I identified, tested, and resolved various bugs using C++,
        ActionScript, and XML. As I grew in my role, I redesigned game aspects,
        introduced new features, and managed crash dump reports. These reports
        highlighted codebase errors that caused game crashes. My job was to find
        the source of the error and understand how it originated, which improved
        both my technical and interpersonal skills. This experience was a big
        step in my learning, giving me insight into the company workflow and how
        changes are implemented into the game.
      </p>
      <p className="justify">
        Most of the skills needed for the job were learned during onboarding.
        This included getting familiar with company software such as Perforce,
        Jira, Slack, and Frostbite, participating in stand up meetings, and
        understanding the bug ticketing process. One important skill I brought
        from my academic background was C++ programming. In the first two years
        of my education, we covered C and object oriented programming concepts
        extensively, which made it easier to transition to a language I had
        previously learned. As a result, I was able to quickly improve my
        proficiency in C++. I also used this foundation to learn ActionScript,
        which was used by the team and proved to be very useful.
      </p>
      <p className="justify">
        For the last two months of the internship, we moved into pre production
        and improvement staging tasks, so my role shifted from fixing bugs and
        crashes to developing new scripts and features that could be implemented
        in the next game cycle to improve the experience. As a challenge I
        wanted to take on, I also proposed and worked on a side project that
        could benefit the team. This was an automated script to help new
        software engineers find screen code much faster in our large codebase.
        During the FC24 cycle, as a new software engineering intern, I found it
        challenging to quickly adapt to the codebase and locate the relevant
        code for a given screen in order to resolve bugs. This led to a
        significant loss of time when addressing issues.
      </p>
      <p className="justify">
        The main reason for this challenge was the sheer size of the codebase at
        EA, which requires a lot of time to fully understand. This makes it
        difficult to grasp how to find the correct code paths during early
        onboarding. To help solve this problem, I began developing a script that
        would act as a tool for pinpointing the code responsible for specific
        screens as accurately as possible. This tool is expected to be very
        helpful for new software engineers on the FUT Client Team, and it can
        also be used by more experienced engineers when they need it.
      </p>
    </section>

    {/* Goals */}
    <section className="report-section">
      <h2>Goals</h2>

      <p className="justify">
        In the second half of my internship, I not only developed additional
        goals specific to my work, but also refined some from the previous term.
        One goal I chose to expand upon was my teamwork skills, where I aimed to
        contribute more actively to decision making processes and bring forward
        new ideas. The other two goals, Technical Learning and Problem Solving
        and Engagement, were new. These goals helped me deepen my understanding
        of the technical tools used by the team and create positive changes that
        would benefit other software engineers. Below, I describe each goal in
        more detail.
      </p>

      {/* Goal 1 */}
      <div className="report-goal">
        <h3>Goal 1: Professional and Ethical Behaviour - Teamwork</h3>
        <p className="justify">
          As I approached my second term at EA, I had gradually developed
          meaningful connections with a diverse range of team members. This
          allowed me to engage effectively with designers, producers, and server
          engineers, which helped me successfully complete my assigned tasks.
          For the latter half of my co-op, I wanted to build on this by being
          more involved in decision making and contributing innovative ideas to
          my team. I was motivated to make a substantial impact on game
          production and future planning.
        </p>
        <h4>Reflection</h4>
        <p className="justify">
          As I approached the end of my internship at EA, I believed I had
          effectively met this goal. When we transitioned into pre production
          and improvement stages, I actively participated in discussions about
          potential enhancements to the game. This involvement gave me
          opportunities to share my ideas and made me feel like a true part of
          the team. I also proposed an improvement task as a side project,
          focused on improving the efficiency of software engineers on the team.
          This project helped me connect with new team members and engage more
          deeply with the development cycle. Overall, this goal pushed me to be
          more proactive and collaborative.
        </p>
      </div>

      {/* Goal 2 */}
      <div className="report-goal">
        <h3>Goal 2: Problem Solving and Engagement</h3>
        <p className="justify">
          As the FC24 project neared completion, I wanted to transition into a
          more focused role where I could work on a side project aimed at
          improving the efficiency of our software engineers in several areas.
          This shift would be beneficial both for the company and for my own
          growth, allowing me to dive deeper into the team workflow and,
          hopefully, make a meaningful and positive impact.
        </p>
        <h4>Reflection</h4>
        <p className="justify">
          I was able to complete the core script before the end of my term. The
          project I designed and implemented was a Python script to speed up the
          process of locating screen code in the game. By making it easier to
          track down the relevant code, the script is expected to improve
          engineering efficiency. While working on this project, I learned a lot
          about programming, the EA codebase, and internal tools, which
          significantly expanded my knowledge.
        </p>
        <p className="justify">
          There are still some improvements that can be made, and certain parts
          of the project were put on hold because they were very time consuming
          and resource intensive. These aspects require additional research to
          implement in a more efficient way. The experience gave me valuable
          technical skills, as well as insight into project management and the
          importance of staying adaptable when facing unexpected challenges.
        </p>
      </div>

      {/* Goal 3 */}
      <div className="report-goal">
        <h3>Goal 3: Technical Learning</h3>
        <p className="justify">
          My main long term goal during the eight month co-op at EA was to gain
          practical, hands on experience across a wide range of technical areas.
          At the midpoint of my term, I had already spent four months working
          with the team, and I had taken on a variety of technical tasks. These
          tasks required me to use many tools and concepts to develop effective
          solutions. My goal for the second half was to continue expanding my
          technical knowledge by taking on more complex challenges in both the
          front end and back end aspects of game development.
        </p>
        <h4>Reflection</h4>
        <p className="justify">
          Looking back on my internship, I can confidently say that I made
          strong progress toward this goal. One of the most challenging but
          rewarding parts of the experience was working on more complex bugs as
          we approached the game launch date. This period came with tight
          deadlines and a high volume of work, which taught me how to perform
          under pressure.
        </p>
        <p className="justify">
          I took on responsibility for resolving more than five bugs for each
          patch fix. This helped me sharpen my problem solving skills and gave
          me a real sense of contribution to the team&apos;s success.
          Interestingly, I found myself dealing more with C++ based bugs than
          front end issues, which broadened my technical skill set and deepened
          my understanding of the game&apos;s back end systems. I am proud of
          the progress I made and look forward to applying these skills in
          future roles.
        </p>
      </div>
    </section>

    {/* Conclusion */}
    <section className="report-section">
      <h2>Conclusion</h2>
      <p className="justify">
        As I concluded my eight month internship at Electronic Arts (EA), I
        reflected on how valuable the experience had been. My role as a software
        engineer gave me a practical perspective on my future career path. EA
        not only sharpened my existing coding skills, but also exposed me to new
        frameworks, technologies, and languages.
      </p>
      <p className="justify">
        The experience sparked my interest in application development and gave
        me a more complete understanding of how the industry operates. Beyond
        technical skills, this internship helped me grow as a team player. I had
        the chance to share my ideas, collaborate closely with my teammates, and
        contribute to real features and improvements in the game. I am deeply
        grateful for the chance to learn and practice new skills, which I am
        confident will strengthen my prospects for future opportunities. As I
        move on from EA, I carry not only technical knowledge, but also a wealth
        of experiences and memories that will guide my next steps.
      </p>

      <div className="report-image">
        <img
          src="/images/interns3.jpg"
          alt="EA interns group photo at end of term"
        />
      </div>
    </section>

    {/* Acknowledgments */}
    <section className="report-section">
      <h2>Acknowledgments</h2>
      <p className="justify">
        I would like to express my gratitude to the fantastic FUT team. Raissa,
        my onboarding buddy, was instrumental in helping me settle into the work
        environment, and I am very thankful for her support. My mentors, Michael
        and Bala, were generous with their knowledge, with Michael assigning me
        challenging tasks and providing valuable feedback.
      </p>
      <p className="justify">
        I am grateful to Jude and Dan for giving me the opportunity to be part
        of this amazing team and for their commitment to my development. Lastly,
        I want to thank the entire FUT team for creating a welcoming and
        enjoyable atmosphere that greatly enriched my experience at EA.
      </p>
    </section>
  </article>
);
