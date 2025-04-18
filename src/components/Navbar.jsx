import { Link, NavLink, useLocation } from "react-router-dom";
import { SiAegisauthenticator } from "react-icons/si";
import { useContext, useState } from "react";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import { ThemeContext } from "@/provider/ThemeProvider";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import cv from "../assets/Ela-Resume .pdf";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [hamburger, setHamburger] = useState(false);
  const location = useLocation(); // ✅ Correct placement
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const activeClassName =
    "font-semibold text-primary border-b-2 border-primary transition-all duration-300 hover:text-primary-dark hover:border-primary-dark";

  const inactiveClassName =
    "font-medium text-gray-600 dark:text-gray-300 border-b-2 border-transparent transition-all duration-300 hover:text-primary hover:border-primary";

  const navLinks = (
    <>
      {["/", "/about", "/skills", "/projects", "/contact"].map(
        (path, index) => {
          const names = ["Home", "About", "Skills", "Projects", "Contact"];
          return (
            <li className="py-2" key={path}>
              <NavLink
                to={path}
                onClick={() => setHamburger(false)}
                className={({ isActive }) =>
                  `px-3 py-2 relative group ${
                    isActive ? activeClassName : inactiveClassName
                  }`
                }
              >
                {names[index]}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out w-11/12 mx-auto" />
              </NavLink>
            </li>
          );
        }
      )}
    </>
  );

  return (
    <nav
      className={`sticky top-0 z-50 ${
        isHome
          ? "bg-gray-100 dark:bg-gray-900"
          : "bg-base-100 dark:bg-gray-800 shadow"
      }`}
    >
      <div className="navbar w-full px-4 md:px-8 max-w-7xl mx-auto">
        {/* Left: Logo and Hamburger */}
        <div className="navbar-start flex items-center">
          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <Hamburger
              toggled={hamburger}
              toggle={setHamburger}
              className="text-primary"
              color={isDarkMode ? "#45b3fa" : "#333"}
              rounded
            />
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="btn btn-ghost text-xl md:text-3xl items-center headerfont"
          >
            <SiAegisauthenticator
              size={24}
              className="text-green-500 bg-gradient-to-r inline-flex mr-1 from-primary/15 to-primary/30 rounded-md px-0 dark:text-secondary dark:from-secondary/10 dark:to-secondary"
            />

            <motion.div
              className="flex hidden md:block items-center space-x-1 font-bold text-2xl "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Ambia with floating bounce */}
              <motion.span
                className="text-teal-500"
                animate={{
                  y: [0, -5, 0], // bounce up and down
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                Ambia
              </motion.span>

              {/* Ela with slight horizontal wiggle */}
              <motion.span
                className="text-white"
                animate={{
                  x: [0, 5, -5, 0], // wiggle left-right
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                Ela
              </motion.span>

              {/* Developer with scale pulsing */}
              <motion.span
                className="hidden md:inline-block text-teal-500"
                animate={{
                  scale: [1, 1.1, 1], // subtle zoom in/out
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                Developer
              </motion.span>
            </motion.div>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2">{navLinks}</ul>
        </div>

        {/* Right: Theme & Resume */}
        <div className="navbar-end gap-4">
          {/* Theme Toggle */}
          <label className="grid cursor-pointer place-items-center">
            <input
              type="checkbox"
              onChange={toggleDarkMode}
              checked={isDarkMode}
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          <a
            href={cv}
            download
            rel="noopener noreferrer"
          >
            <InteractiveHoverButton
              text="Resume"
              className="bg-secondary dark:bg-primary"
            />
          </a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {hamburger && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-md">
          <ul className="menu menu-vertical p-4">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
