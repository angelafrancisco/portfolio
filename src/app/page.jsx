import "../styles/styles.css";
import Navigation from "@/components/Navigation";
import HomeHeader from "@/components/HomeHeader";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <main id="home">
      <Navigation />
      <HomeHeader />
      <AboutMe />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;
