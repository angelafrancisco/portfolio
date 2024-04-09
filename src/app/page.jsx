import "../styles/styles.css";
import Navigation from "@/components/Navigation";
import AboutMe from "@/components/AboutMe";
import ContactFooter from "@/components/Footer";
import WorkExperience from "@/components/WorkExperience";

const Home = () => {
  return (
    <main>
      <Navigation />
      <div>
        <h1 className="name-header">software engineer</h1>
        <p>I'm a software engineer from the Pacific Northwest.</p>
        <p>~ currently coding in Minneapolis ~</p>
      </div>
      <div className="scallop-border-box-shadow">
        <div className="scallop-border-box">
          <img
            src="/about-me-photo.png"
            alt="About Me Photo"
            width={300}
            height={300}
            id="about-me-photo"
          />
        </div>
      </div>
      <div className="arrow-container ">arrow image here</div>
      <AboutMe />
      <WorkExperience />
      <ContactFooter />
    </main>
  );
};

export default Home;
