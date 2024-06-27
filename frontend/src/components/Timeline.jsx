import React, { useState } from "react";
import timelineData from "../Api/timelineData";
import TimelineItem from "./TimelineItem";
import "../css/TimelineItem.css";

import "../css/Cards.css";
import "../css/Section2.css";

const Timeline = () => {
  const [selectedButtonId, setSelectedButtonId] = useState("ML"); // State for button ID

  const handleButtonClick = (buttonId) => {
    setSelectedButtonId(buttonId); // Update state with clicked button ID
    console.log(`${buttonId}`); // Log the ID
  };
  return (
    <div className="container" id="skills">
      <h2>
        <span className="pro">{selectedButtonId} </span>SKILL TOOLKIT
      </h2>
      <div className="btn_box">
        <button className="btn3" onClick={() => handleButtonClick("WEB")}>
          WEB
        </button>
        <button className="btn3" onClick={() => handleButtonClick("ML")}>
          ML
        </button>

        <button className="btn3" onClick={() => handleButtonClick("LANG")}>
          LANGS
        </button>
      </div>
      <TimelineItem Apidata={timelineData} filterById={selectedButtonId} />
    </div>
  );
};

export default Timeline;
