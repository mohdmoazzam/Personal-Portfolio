import React from "react";
import MobileNav from "../components/MobileNav";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Techstack from "../components/TechStack";
import Project from "../components/Projects";
import Experience from "../components/Experience";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <div>
      <MobileNav />
      <Hero />
      <AboutMe />
      <Education />
      <Techstack />
      <Project />
      <Experience />
      <ContactMe />
      <Footer />
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{
          backgroundColor: "#1e1e2c",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
    </div>
  );
};

export default Home;
