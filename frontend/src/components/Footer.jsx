import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import "../css/Footer.css"; // Import the CSS file
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main" id="hireme">
      <div className="div">
        <div className="div1">
          <span className="span">WHO AM I ?</span>
          <h3>
            Hi i am Biswajeet Jena || AI-Aspiring Data Scientist | Highly
            motivated Computer Science student with a passion for AI and
            building data-driven solutions. Skilled in Data Analysis , NLP
            Machine Learning, Deep Learning concepts and frameworks , web
            development (MERN stack). Seeking a Data Scientist role to leverage
            expertise and contribute to impactful projects.
          </h3>
        </div>
        <div className="div1">
          <span className="span">Contact Info</span>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJfsdbhGwCnXgRdQGfCRLXqLwCfQnpstlSZnWQtdKfppgxcRrrhRfJGhbSBHsKsXhDFHRBV"
            className="link"
          >
            biswajeetjena2003@gmail.com
          </a>
          <a className="link"> +91 8144564990</a>
          <a href="https://github.com/66biswajeet" className="link">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/biswajeet-jena-86bb27212/"
            className="link"
          >
            Linked IN
          </a>
          <a href="https://instagram.com" className="link">
            Instagram
          </a>
        </div>

        <div className="div1">
          <ContactForm />
        </div>
      </div>
      <div className="icon">
        <a href="https://instagram.com">
          {" "}
          <FaInstagram className="icon" />
        </a>
        <a href="https://github.com/66biswajeet">
          {" "}
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/biswajeet-jena-86bb27212/">
          {" "}
          <FaLinkedin className="icon" />
        </a>
        <a href="https://twitter.com">
          {" "}
          <RiTwitterXFill className="icon" />
        </a>
      </div>
      <div className="h4">Portfolio Website | © 2024 Biswajeet Jena |</div>
    </div>
  );
};

export default Footer;
