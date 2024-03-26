import "../styles/styles.css";

const Home = () => {
  return (
    <main>
      <div>
        <h1 className="name-header">angela francisco</h1>
      </div>

      <div className="section-container">
        <div className="section-container-bar"></div>

        <div className="container-content">
          <h2 className="header">section header</h2>
          <p>Welcome to my website.</p>
          <p>Here's some text about me that is an example of how the longer paragraph font styles will look. What's next? Who knows!</p>
          <a 
            href="https//www.google.com" 
            className="link"
            >Link example</a>
          <div>
            <button className="button">Button</button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Home;
