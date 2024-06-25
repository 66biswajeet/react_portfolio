import React from "react";
import "./Preloader.css";
import preloader from "../assets/preload2.gif";

const Preloader = () => {
  return (
    <>
      {" "}
      {/* <!-- ------------ PRELOADER ---------  --> */}
      <div className="preloader">
        {" "}
        <img src={preloader} alt="Loading..." />{" "}
      </div>{" "}
    </>
  );
};

export default Preloader;
