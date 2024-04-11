"use client";

import Lottie from "lottie-react";
import downArrowAnimation from "../assets/downArrowAnimation.json";
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
        <h1 className="name-header">angela francisco</h1>
        <p>I'm a software engineer from the Pacific Northwest.</p>
        <p>~ currently coding in Minneapolis ~</p>
      </div>
      {/* <div className="scallop-border-box"> */}
      <div className="cloud-background">
        <img
          src="/about-me-photo.png"
          alt="About Me Photo"
          width={150}
          height={150}
          id="about-me-photo"
        />
      </div>
      <div className="arrow-container ">
        <Lottie animationData={downArrowAnimation} />
      </div>
      <AboutMe />
      <WorkExperience />
      <ContactFooter />
    </main>
  );
};

export default Home;
