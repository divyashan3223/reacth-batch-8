import React from "react";

const Button = () => {
  let handleClick = () => {
    alert("hello");
  };
  return (
    <div>
      <h1>hello friends</h1>
      <button onClick={() => handleClick()}>click me the button</button>
    </div>
  );
};

export default Button;
