import React from "react";
import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {
  EMAIL,
  GITHUB_PROFILE_URI,
  LINKEDIN_PROFILE_URI,
  NAV_LINKS,
} from "../utils/contants";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/10">
      <div className="container-page flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Logo className="h-8 w-8" />
          </div>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Made with ❤️ by Mohd Moazzam &copy; {new Date().getFullYear()}
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth
                offset={-64}
                duration={500}
                className="cursor-pointer text-zinc-500 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <a href={`mailto:${EMAIL}`} className="icon-btn" aria-label="Email">
            <FiMail />
          </a>
          <a
            href={LINKEDIN_PROFILE_URI}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn profile"
          >
            <FiLinkedin />
          </a>
          <a
            href={GITHUB_PROFILE_URI}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub profile"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
