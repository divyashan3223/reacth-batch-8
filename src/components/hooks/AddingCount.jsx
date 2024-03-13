import { useState } from "react";

const AddingCount = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  function handleClickminus() {
    setCount(count - 1);
  }
  return (
    <div>
      <p>count:{count}</p>

      <button onClick={handleClick}>add num</button>
      <button onClick={handleClickminus}>minus num</button>
    </div>
  );
};

export default AddingCount;
