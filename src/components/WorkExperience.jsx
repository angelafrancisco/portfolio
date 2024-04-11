const WorkExperience = () => {
  return (
    <div className="section-container">
      <div className="section-container-bar"></div>
      <div className="container-content">
        <h2 className="section-header">my work</h2>
        <div className="work-section-wrapper">
          <div className="work-section">
            <p>
              <a href="https://www.useroam.io/" className="link">
                Roam
              </a>{" "}
              | Software Engineer, Intern
            </p>
            <p className="date-text">February 2024 - Present</p>
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
                Played an instrumental role in building core features at an
                early stage startup as part of the Minimum Viable Product (MVP)
                on a cross-functional team of engineers and UX designers.
                Contributions include payments flow, app settings, and app
                referrals.
              </li>
              <li>
                Contributed to the development of a component library to ensure
                modular code based off Figma designs.
              </li>
              <li>
                Wrote unit tests and integration tests for the app using Jest
                and Playwright.
              </li>
            </ul>
          </div>
          <hr className="horizontal-line"></hr>
          <div className="work-section">
            <p>
              <a href="https://www.mozilla.org" className="link">
                Mozilla
              </a>{" "}
              | Software Engineer, Open-Source Contributor
            </p>
            <p className="date-text">July 2022 - Present</p>
            <div className="stack-bubbles-container">
              <div className="stack-bubble">React</div>
              <div className="stack-bubble">JavaScript</div>
              <div className="stack-bubble">CSS/SCSS</div>
            </div>
            <ul className="work-section-bullet-points">
              <li>
                Developed an internal dashboard for the Mozilla Privacy and
                Security team to monitor security alerts for their library
                automation bot using React, Protocol (Mozilla's design system),
                REST API, and MySQL.
              </li>
              <li>
                Contributed to new features, improved UI, and solved bugs for
                Bedrock (Django app hosting Mozilla) and Protocol.
              </li>
            </ul>
          </div>
          <hr className="horizontal-line"></hr>
          <div className="work-section">
            <p>
              <a href="https://www.oregonfoodbank.org/" className="link">
                Oregon Food Bank
              </a>{" "}
              | Database & Systems Asst. Manager
            </p>
            <p className="date-text">October 2020 - September 2021</p>
            <div className="stack-bubbles-container">
              <div className="stack-bubble">Data Migration</div>
              <div className="stack-bubble">Relational Databases</div>
              <div className="stack-bubble">SQL</div>
              <div className="stack-bubble">Quality Assurance</div>
            </div>
            <ul className="work-section-bullet-points">
              <li>
                Led a team of two database coordinators in managing daily
                operations of the relational database and donor management
                software.
              </li>
              <li>
                Co-led the data migration from a local to cloud-hosted
                relational database in collaboration with the Development
                Operations Manager.
              </li>
              <li>
                Supervised quality control for the data entry team and standard
                operating procedure documentation.
              </li>
              <li>
                Acted as the designated Point of Contact across departments and
                teams for database queries, reporting, troubleshooting and
                quality assurance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
