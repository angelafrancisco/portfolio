"use client"
import Lottie from "lottie-react";
import womanLaptopAnimation from "../assets/womanLaptopAnimation.json";

const ContactFooter = () => {
  return (
    <footer id="contact-me">
      <h2 className="section-header">contact me</h2>
      <div className="container-content">
        <Lottie animationData={womanLaptopAnimation} />
        <div className="container-content">
          <p>
            I love connecting with others from diverse backgrounds in tech,
            especially from non-traditional paths. Let's build community
            together!
          </p>
          <ul className="contact-links">
            <li>
              <a
                href="mailto:angelat.francisco@gmail.com"
                target="_blank"
                className="link"
              >
                EMAIL
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/angela-francisco/"
                target="_blank"
                className="link"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                href="https://github.com/angelafrancisco"
                target="_blank"
                className="link"
              >
                GITHUB
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
