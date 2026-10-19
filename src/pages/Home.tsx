import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FiArrowUp } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Techstack from "../components/TechStack";
import Project from "../components/Projects";
import Experience from "../components/Experience";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Techstack />
        <Experience />
        <Project />
        <Education />
        <ContactMe />
      </main>
      <Footer />
      <ScrollToTop
        smooth
        component={<FiArrowUp className="mx-auto text-xl text-white" />}
        className="!flex items-center justify-center !rounded-full !bg-gradient-to-r from-indigo-500 to-violet-500 !shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-1"
        style={{ width: 48, height: 48, right: 24, bottom: 24 }}
      />
    </>
  );
};

export default Home;
