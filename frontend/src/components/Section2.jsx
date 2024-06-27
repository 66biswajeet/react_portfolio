import React, { useState } from "react";
import Cards from "./Cards";
import Card_api from "../Api/Card_api";
import "../css/Cards.css";
import "../css/Section2.css";

let Section2 = () => {
  const [selectedButtonId, setSelectedButtonId] = useState("ML"); // State for button ID

  const handleButtonClick = (buttonId) => {
    setSelectedButtonId(buttonId); // Update state with clicked button ID
    console.log(`${buttonId}`); // Log the ID
  };

  return (
    <div className="container">
      <h2>
        <span className="pro">{selectedButtonId} </span>PROJECTS
      </h2>
      <div className="btn_box">
        <button className="btn3" onClick={() => handleButtonClick("WEB")}>
          WEB
        </button>
        <button className="btn3" onClick={() => handleButtonClick("ML")}>
          ML
        </button>

        <button className="btn3" onClick={() => handleButtonClick("ALL")}>
          ALL
        </button>
      </div>
      <Cards Apidata={Card_api} filterById={selectedButtonId} />
    </div>
  );
};

export default Section2;
