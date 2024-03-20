import { useEffect, useState } from "react";

const AddingCount = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(10);
  function handleClick() {
    setCount(count + 1);
  }
  function handleClickminus() {
    setCount1(count1 - 1);
  }
  useEffect(() => {
    console.log("runs all state change");
  }, [count1]);
  return (
    <div>
      <p>count:{count}</p>
      <p>count:{count1}</p>

      <button onClick={handleClick}>add num</button>
      <button onClick={handleClickminus}>minus num</button>
    </div>
  );
};

export default AddingCount;
