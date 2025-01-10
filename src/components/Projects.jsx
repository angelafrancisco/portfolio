const Projects = () => {
  return (
    <div className="section-container">
      <div className="section-container-bar"></div>
      <div className="container-content">
        <h2 className="section-header">projects</h2>
        <div className="project-section-wrapper">
          <img
            className="project-image"
            src="/project-roam-1080.jpg"
            alt="screenshot of roam homepage"
          />
          <div className="project-section">
            <h3>
              <a
                href="https://app.useroam.io/login"
                target="_blank"
                className="link"
              >
                Roam
              </a>
            </h3>
            <p>
              An AI-powered SaaS platform built for digital creatives. Built
              core features as one of the first three engineers at early-stage
              startup.
            </p>
            <ul className="stack-bubbles-container">
              <li className="stack-bubble">React</li>
              <li className="stack-bubble">TypeScript</li>
              <li className="stack-bubble">Styled-Components</li>
              <li className="stack-bubble">Tailwind CSS</li>
              <li className="stack-bubble">Jest</li>
              <li className="stack-bubble">Playwright</li>
            </ul>
          </div>
        </div>
        <hr className="horizontal-line"></hr>
        <div className="project-section-wrapper">
          <img
            className="project-image"
            src="/project-mozilla.jpg"
            alt="screenshot of roam homepage"
          />
          <div className="project-section">
            <h3>
              <a
                href="https://www.mozilla.org/en-US/"
                target="_blank"
                className="link"
              >
                Mozilla
              </a>
            </h3>
            <p>Various contributions to open-source code at Mozilla.</p>
            <ul className="stack-bubbles-container">
              <li className="stack-bubble">React</li>
              <li className="stack-bubble">JavaScript</li>
              <li className="stack-bubble">MySQL</li>
              <li className="stack-bubble">REST API</li>
              <li className="stack-bubble">HTML/CSS</li>
            </ul>
          </div>
        </div>
        <hr className="horizontal-line"></hr>
        <div className="project-section-wrapper">
          <img
            className="project-image"
            src="/project-readme-1080.jpg"
            alt="screenshot of project readme homepage"
          />
          <div className="project-section">
            <h3>
              <a
                href="https://bookapp-capstone.netlify.app/"
                target="_blank"
                className="link"
              >
                ReadME
              </a>
            </h3>
            <p>
              A full-stack MERN web application for finding and tracking your
              next book.
            </p>
            <ul className="stack-bubbles-container">
              <li className="stack-bubble">MongoDB</li>
              <li className="stack-bubble">Express</li>
              <li className="stack-bubble">React</li>
              <li className="stack-bubble">Node</li>
              <li className="stack-bubble">REST API</li>
              <li className="stack-bubble">HTML/CSS</li>
            </ul>
          </div>
        </div>
        <hr className="horizontal-line"></hr>
        <div className="project-section-wrapper">
          <img
            className="project-image"
            src="/project-plantpet-1080.jpg"
            alt="screenshot of project plant pet homepage"
          />
          <div className="project-section">
            <h3>
              <a
                href="https://github.com/angelafrancisco/plantpet-react-fe"
                target="_blank"
                className="link"
              >
                Plant Pet
              </a>
            </h3>
            <p>A full-stack web application for tracking plant care.</p>
            <ul className="stack-bubbles-container">
              <li className="stack-bubble">React</li>
              <li className="stack-bubble">Python</li>
              <li className="stack-bubble">Django</li>
              <li className="stack-bubble">PostgreSQL</li>
              <li className="stack-bubble">REST API</li>
              <li className="stack-bubble">HTML/CSS</li>
            </ul>
          </div>
        </div>
        <hr className="horizontal-line"></hr>
        <div className="project-section-wrapper">
          <img
            className="project-image"
            src="/project-events-1080.jpg"
            alt="screenshot of project plant pet homepage"
          />
          <div className="project-section">
            <h3>
              <a
                href="https://github.com/ercheung3/event-finder"
                target="_blank"
                className="link"
              >
                Event Finder
              </a>
            </h3>
            <p>A full-stack web application for finding local events.</p>
            <ul className="stack-bubbles-container">
              <li className="stack-bubble">MongoDB</li>
              <li className="stack-bubble">Express</li>
              <li className="stack-bubble">JavaScript</li>
              <li className="stack-bubble">EJS</li>
              <li className="stack-bubble">REST API</li>
              <li className="stack-bubble">CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
