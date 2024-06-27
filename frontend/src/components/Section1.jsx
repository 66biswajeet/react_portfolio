import React from "react";
import "../css/Section1.css";
import "../App.css";
import Typo from "./Typo";
import { Link } from "react-router-dom";
import pdf from "../assets/myresume.pdf";
import { FaDownload } from "react-icons/fa6";
const Section1 = () => {
  return (
    <>
      <div className="section1" id="section1">
        <div className="hero-text">
          <h1>
            <p className="herodec">Hi,</p>
            <p className="herodec">
              I am <span className="name">BISWAJEET</span>
            </p>
            {/* <ul>
              <li>
                <span>AI </span>
              </li>
              <li>
                <span>MACHINE LEARNING</span>
              </li>
              <li>
                <span>DEEP LEARNING</span>
              </li>
              <li>
                <span>FULL STACK</span>
              </li>
            </ul> */}
            <Typo />
          </h1>

          <div className="btncls">
            <div className="know">
              <a href={pdf} target="_blank">
                <span>MY RESUME </span>
                <FaDownload />
              </a>
            </div>
            <div className="know">
              <a href="#hireme">
                <span>HIRE ME</span>
              </a>
            </div>
          </div>
        </div>
        <img
          alt=""
          className="logo"
          //   data-aos="fade-left"
          //   data-aos-duration="1000"
          //   data-aos-easing="linear"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgB1x9C76LeQtudNOKQQIcgX6Kj1bRhEl073fu0dZz3eo4n9wbBSpl5cBASiRmYuI8t5wq0uIlNdTladCvNY8sDr0g7e1OBZSDDXtGkL63RqLQmPt1AY4cJGoIbneHw_jiqMR5cdeGorC6gRDuJegw_b9oE39s0nxsobJ76I_JYeWu8q8SV6Bs9Wb7UC0hE/w318-h320/hero1234.png"
        />
      </div>
    </>
  );
};

export default Section1;
