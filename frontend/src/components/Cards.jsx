import React from "react";
import "../css/Cards.css";

import { FaGithub } from "react-icons/fa";

const Recof = (val) => {
  console.log(val.img);
  return (
    <div className="card">
      <img className="img" src={val.img} alt="" />
      {/* <h3 className="hover">Hover</h3> */}
      <button className="title ">
        {val.txt}
        <span className="title_text">{val.des}</span>
      </button>

      <a className="btn" href={val.href} target="_blank">
        <button href={val.href} className="btn b">
          VIEW
        </button>
      </a>

      <FaGithub className="btn2" />
    </div>
  );
};

let Cards = ({ Apidata, filterById }) => {
  const getFilteredData = () => {
    if (filterById === "ALL") {
      return Apidata;
    } else {
      return Apidata.filter((item) => item.type === filterById);
    }
  };

  const filteredData = getFilteredData();
  return (
    <div className="Div cards" id="projects">
      {filteredData.map(Recof)}
    </div>
  );
};

export default Cards;
