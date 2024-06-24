import React from "react";
import "../css/Cards.css";

import { FaGithub } from "react-icons/fa";

const Recof = (val) => {
  console.log(val.img);
  return (
    <div className="card">
      <img className="img" src={val.img} alt="" />
      {/* <h3 className="hover">Hover</h3> */}
      <button className="title ">{val.txt}</button>
      <button className="btn">
        <a href="https://wca-jeetcode.streamlit.app" target="_blank">
          VIEW
        </a>
      </button>
      <FaGithub className="btn2" />
    </div>
  );
};

let Cards = ({ Apidata }) => {
  return (
    <div className="Div cards" id="projects">
      {Apidata.map(Recof)}
    </div>
  );
};

export default Cards;
