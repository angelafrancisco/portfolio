import "../styles/styles.css";
import AboutMe from "@/components/AboutMe";
import ContactFooter from "@/components/Footer";
import WorkExperience from "@/components/WorkExperience";

const Home = () => {
  return (
    <main>
      <div>
        <h1 className="name-header">angela francisco</h1>
      </div>
      <div className="scallop-border-box">
        <img 
          src="/about-me-photo.png"
          alt="About Me Photo"
          width={300} 
          height={300}
        />
      </div>
      <AboutMe />
      <WorkExperience />
      <ContactFooter />
    </main>
  );
};

export default Home;
