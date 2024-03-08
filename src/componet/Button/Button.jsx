import React from "react";

const Button = ({ showHolder = false }) => {
  return (
    <div>
      {showHolder || <h1>header</h1>}
      <button>submit</button>
    </div>
  );
};

export default Button;
