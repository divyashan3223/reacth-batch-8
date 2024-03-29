import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [totos, setTotos] = useState([]);
  const increment = () => {
    setCount(count + 1);
  };
  const addtotos = useCallback(() => {
    setTotos((t) => [...t, "new Todos"]);
  }, []);
  return (
    <div>
      <Child totos={totos} addtotos={addtotos} />
      <p>count:{count}</p>
      <button onClick={increment}>count add</button>
    </div>
  );
};

export default Parent;
