import { useEffect, useRef, useState } from "react";

const AddingCount = () => {
  const inputRef = useRef(10);
  console.log(inputRef);
  // useEffect(() => {
  //   inputRef.current = inputRef.current + 1;
  //   alert("you clikck" + inputRef.current + "times");
  // });
  let handleClick = () => {
    inputRef.current = inputRef.current + 1;
    // alert("you clikck" + inputRef.current + "times");
    console.log(inputRef.current);
  };

  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default AddingCount;
