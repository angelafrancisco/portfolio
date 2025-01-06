const WorkExperience = () => {
  return (
    <div className="section-container">
      <div className="section-container-bar"></div>
      <div className="container-content">
        <h2 className="section-header">my work</h2>
        <div className="work-section-wrapper">
          <div className="work-section">
            <p>Software Engineer Intern</p>
            <p>
              <a
                href="https://www.useroam.io/"
                target="_blank"
                className="link"
              >
                Roam
              </a>
            </p>
            <p className="date-text">February 2024 - June 2024</p>
            <div className="stack-bubbles-container">
              <div className="stack-bubble">React</div>
              <div className="stack-bubble">TypeScript</div>
              <div className="stack-bubble">Styled-Components</div>
              <div className="stack-bubble">Tailwind CSS</div>
              <div className="stack-bubble">Jest</div>
              <div className="stack-bubble">Playwright</div>
            </div>
            <ul className="work-section-bullet-points">
              <li>
                Built core features as one of the first three engineers at
                early-stage startup contributing to successful product launch
              </li>
              <li>
                Developed user interfaces for four features using React,
                TypeScript, Styled-Components, and Tailwind CSS
              </li>
              <li>
                Collaborated closely with fellow engineers, created unit tests
                using Jest and Playwright
              </li>
              <li>
                Expanded the development of a component library to ensure
                modular code in alignment with UX/UI designs in Figma
              </li>
            </ul>
          </div>
          <hr className="horizontal-line"></hr>
          <div className="work-section">
            <p>Software Engineer Open-Source Contributor</p>
            <p>
              <a
                href="https://www.mozilla.org"
                target="_blank"
                className="link"
              >
                Mozilla
              </a>
            </p>
            <p className="date-text">July 2022 - December 2022</p>
            <div className="stack-bubbles-container">
              <div className="stack-bubble">React</div>
              <div className="stack-bubble">JavaScript</div>
              <div className="stack-bubble">HTML/CSS</div>
              <div className="stack-bubble">REST API</div>
              <div className="stack-bubble">MySQL</div>
            </div>
            <ul className="work-section-bullet-points">
              <li>
                Developed an internal dashboard to monitor security alerts
                identified by the library automation bot, increasing awareness
                across privacy and security team
              </li>
              <li>
                Built two features in adherence to the internal design system,
                using React, REST API, and MySQL
              </li>
              <li>
                Contributed to open-source pull requests and debugging for the
                internal design system and Mozilla web application
              </li>
            </ul>
          </div>
          <hr className="horizontal-line"></hr>
          <div className="work-section">
            <p>Database Systems Asstant Manager</p>
            <p>
              <a
                href="https://www.oregonfoodbank.org/"
                target="_blank"
                className="link"
              >
                Oregon Food Bank
              </a>
            </p>
            <p className="date-text">October 2020 - September 2021</p>
            <div className="stack-bubbles-container">
              <div className="stack-bubble">Relational SQL Databases</div>
              <div className="stack-bubble">People Management</div>
              <div className="stack-bubble">Data Management</div>
              <div className="stack-bubble">Data Migration</div>
              <div className="stack-bubble">Technical Training</div>
            </div>
            <ul className="work-section-bullet-points">
              <li>
                Provided guidance and oversight to data entry operations of over
                $16M yearly revenue from individuals and corporations
              </li>
              <li>
                Managed sensitive information and maintained relational SQL
                database of more than 500K active records
              </li>
              <li>
                Spearheaded data migration project of 80TB data from local to
                cloud-hosted database, in collaboration with team leadership and
                IT department
              </li>
              <li>
                Created technical training documentation and implemented
                accessible training sessions to 10 staff and volunteers
              </li>
              <li>
                Supported two direct-reports through weekly face-to-face
                meetings, technical training, ensuring collaborative team
                environment
              </li>
            </ul>
          </div>
          <hr className="horizontal-line"></hr>
          <div className="work-section">
            <p>Database Coordinator</p>
            <p>
              <a
                href="https://www.oregonfoodbank.org/"
                target="_blank"
                className="link"
              >
                Oregon Food Bank
              </a>
            </p>
            <p className="date-text">October 2016 - October 2020</p>
            <div className="stack-bubbles-container">
              <div className="stack-bubble">SQL Relational Databases</div>
              <div className="stack-bubble">CRM Software</div>
              <div className="stack-bubble">Microsoft Excel</div>
              <div className="stack-bubble">Tableau</div>
            </div>
            <ul className="work-section-bullet-points">
              <li>
                Something here
              </li>
              <li>
                Revised over 50 standard operating procedures to ensure accurate
                and efficient data management, reducing inconsistencies in data
                entry by 20%
              </li>
              <li>
                Something here
              </li>
              <li>
                Designated point of contact across departments and
                teams for database queries, reporting, troubleshooting and
                quality assurance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
