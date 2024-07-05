import React from "react";
import "../css/Button.css";

const Button = ({ Name }) => {
  return (
    <div class="radio-input">
      <input value="value-1" name="value-radio" id="value-1" type="radio" />
      <label for="value-1">{Name}</label>
    </div>
  );
};

export default Button;
