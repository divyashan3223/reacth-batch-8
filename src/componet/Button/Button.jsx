import React from "react";
import "./button.css";
const Button = ({ content, color, bgColor, size }) => {
  return (
    <div>
      {/* <button className={`${color}`}>{content}</button> */}
      <button
        style={{ backgroundColor: bgColor, color: color, fontSize: size }}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
