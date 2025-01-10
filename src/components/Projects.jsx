const Projects = () => {
  return (
    <div className="section-container">
      <div className="section-container-bar"></div>
      <div className="container-content">
        <h2 className="section-header">projects</h2>
        <div className="project-section-wrapper">
          <div className="project-section">
            <h3>Roam: </h3>
            <p>
              <a
                href="https://www.useroam.io/"
                target="_blank"
                className="link"
              >
                useRoam.io
              </a>
            </p>
            <div className="stack-bubbles-container">
              <div className="stack-bubble">React</div>
              <div className="stack-bubble">TypeScript</div>
              <div className="stack-bubble">Styled-Components</div>
              <div className="stack-bubble">Tailwind CSS</div>
              <div className="stack-bubble">Jest</div>
              <div className="stack-bubble">Playwright</div>
            </div>
          </div>
        </div>
        <hr className="horizontal-line"></hr>
        <div className="project-section-wrapper">
          <div className="project-section">
            <h3>Mozilla: </h3>
            <p>
              <a
                href="https://www.mozilla.org"
                target="_blank"
                className="link"
              >
                mozilla.org
              </a>
            </p>
            <div className="stack-bubbles-container">
              <div className="stack-bubble">React</div>
              <div className="stack-bubble">JavaScript</div>
              <div className="stack-bubble">HTML/CSS</div>
              <div className="stack-bubble">REST API</div>
              <div className="stack-bubble">MySQL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;