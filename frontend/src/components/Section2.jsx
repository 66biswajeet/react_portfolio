import React, { useState, Suspense, lazy, useEffect } from "react";

import Card_api from "../Api/Card_api";
import "../css/Cards.css";
import "../css/Section2.css";
import "../css/Button.css";

const CardLazy = lazy(() => import("./Cards"));
import Preloader from "../preloader/Preloader";

let Section2 = () => {
  const [selectedButtonId, setSelectedButtonId] = useState("ML");

  const handleButtonClick = (buttonId) => {
    setSelectedButtonId(buttonId);
    console.log(buttonId);
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

      <Suspense fallback={<Preloader />}>
        <CardLazy Apidata={Card_api} filterById={selectedButtonId} />
      </Suspense>
    </div>
  );
};

export default Section2;
