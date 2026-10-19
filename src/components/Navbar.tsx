import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiGithub, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { GITHUB_PROFILE_URI, NAV_LINKS } from "../utils/contants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-zinc-200/70 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70"
          : "border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer font-display text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          MDM<span className="text-orange-400">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                spy
                smooth
                offset={-64}
                duration={500}
                activeClass="!text-indigo-600 dark:!text-indigo-300 bg-indigo-500/10"
                className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="icon-btn"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <a
            href={GITHUB_PROFILE_URI}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub profile"
          >
            <FiGithub />
          </a>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="icon-btn md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="container-page flex flex-col gap-1 pb-4">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                spy
                smooth
                offset={-64}
                duration={500}
                activeClass="!text-indigo-600 dark:!text-indigo-300 bg-indigo-500/10"
                className="block cursor-pointer rounded-xl px-4 py-3 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
