import React, { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon, FaGithub } from "react-icons/fa";
import { GITHUB_PROFILE_URI } from "../utils/contants";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 w-full z-10">
        <div className="h-14 w-full bg-gray-900 p-2 flex items-center">
          {open ? (
            <AiOutlineMenuFold
              size={30}
              className="text-white cursor-pointer"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="text-white cursor-pointer"
              onClick={handleOpen}
            />
          )}
          <span className="ml-5 text-orange-500 font-bold capitalize text-lg">
            MDM
          </span>
          <div className="ml-auto flex items-center space-x-4">
            <button onClick={toggleTheme} className="text-white">
              {theme === "dark" ? <FaSun size={30} /> : <FaMoon size={30} />}
            </button>
            <a
              href={GITHUB_PROFILE_URI}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 hover:scale-110 transition-transform duration-300"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
        <div
          className={`${
            open ? "max-h-screen" : "max-h-0"
          } bg-gray-900 overflow-hidden transition-max-height duration-500 ease-in-out`}
        >
          <div className="p-1 pb-5 rounded-b-lg opacity-95">
            <div className="flex flex-col items-center space-y-1 cursor-pointer">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="text-white text-lg font-semibold hover:text-yellow-300 hover:underline transition-colors duration-300 px-1 py-1 rounded-lg"
                onClick={handleMenuClick}
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="text-white text-lg font-semibold hover:text-yellow-300 hover:underline transition-colors duration-300 px-1 py-1 rounded-lg"
                onClick={handleMenuClick}
              >
                About
              </Link>
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="text-white text-lg font-semibold hover:text-yellow-300 hover:underline transition-colors duration-300 px-1 py-1 rounded-lg"
                onClick={handleMenuClick}
              >
                Education
              </Link>
              <Link
                to="tech-stack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="text-white text-lg font-semibold hover:text-yellow-300 hover:underline transition-colors duration-300 px-1 py-1 rounded-lg"
                onClick={handleMenuClick}
              >
                Tech Stack
              </Link>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="text-white text-lg font-semibold hover:text-yellow-300 hover:underline transition-colors duration-300 px-1 py-1 rounded-lg"
                onClick={handleMenuClick}
              >
                Projects
              </Link>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="text-white text-lg font-semibold hover:text-yellow-300 hover:underline transition-colors duration-300 px-1 py-1 rounded-lg"
                onClick={handleMenuClick}
              >
                Experience
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="text-white text-lg font-semibold hover:text-yellow-300 hover:underline transition-colors duration-300 px-1 py-1 rounded-lg"
                onClick={handleMenuClick}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
