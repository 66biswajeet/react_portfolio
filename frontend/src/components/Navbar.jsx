import React, { useState } from "react";
import "../css/Navbar.css";
import "../App.css";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    const nav_header = document.querySelector(".header");
    setIsMobileMenuOpen(nav_header.classList.toggle("active"));
  };

  return (
    <header className="header">
      <nav id="navbar">
        <div className="brand">
          {/* Replace with your image path */}
          {/* <img className="logo" src="image/logo.png" alt="brand logo" /> */}
          <a href="#">
            <span className="jeet">JEET</span>
            <span className="code">CODE</span>
          </a>
          <p>Win The Web</p>
        </div>
        <ul className="navbar-list" onClick={toggleMobileMenu}>
          <li>
            <a className="navbar-link" href="#section1">
              Home
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#achievement">
              Skills
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#blog">
              Blog
            </a>
          </li>
          <li>
            <a className="navbar-link" href="">
              Hire Me
            </a>
          </li>
        </ul>

        {/* mobile nav icons */}
        <div className="mobile-navbaricon">
          <FiAlignJustify name="open" onClick={toggleMobileMenu} />{" "}
          {/* Added onClick handler */}
          {isMobileMenuOpen && (
            <IoMdCloseCircle name="close" onClick={toggleMobileMenu} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
