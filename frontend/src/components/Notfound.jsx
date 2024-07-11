import React from "react";
import "../css/Notfound.css";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="not-found-container">
      <h1 className="error-number">404</h1>
      <div className="error-message">
        <h2>Oops! That page is lost in the Bermuda Triangle</h2>
        <p>
          The page you're looking for doesn't exist, could be moved, or might be
          hiding. No need to panic though!
        </p>
        <div className="buttons">
          <Link to="/">
            <button>
              <span class="text">Back To Home</span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
