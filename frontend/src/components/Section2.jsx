import React from "react";
import Cards from "./Cards";
import Card_api from "../Api/Card_api";
import "../css/Cards.css";

let Section2 = () => {
  return (
    <div className="container">
      <h2> PROJECTS</h2>
      <Cards Apidata={Card_api} />
    </div>
  );
};

export default Section2;
