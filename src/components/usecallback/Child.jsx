import React, { memo } from "react";

const Child = ({ addtotos, totos }) => {
  console.log("child re render");
  return (
    <div>
      <h1>totos</h1>
      {totos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addtotos}>add todo</button>
    </div>
  );
};

export default memo(Child);
