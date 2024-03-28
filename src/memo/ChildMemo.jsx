import { memo } from "react";
import React, { useEffect } from "react";

const ChildMemo = memo((props) => {
  useEffect(() => {
    console.log("child rerender");
  });
  return (
    <div>
      <p>count:{props.count}</p>

      <button onClick={props.handleClick}>click to change the count</button>
    </div>
  );
});

export default ChildMemo;
