import React, { createContext, useContext, useState } from "react";
const userContext = createContext();
const Usecontext = () => {
  const [user] = useState("vasanth");
  const [count, setCount] = useState(0);
  let increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <>
      <userContext.Provider value={{ user, count, increment }}>
        <div>Use</div>
        <One />
      </userContext.Provider>
    </>
  );
};

export default Usecontext;

export const One = () => {
  return (
    <div>
      <p>component1</p>
      <Two />
    </div>
  );
};
export const Two = () => {
  const { count, increment } = useContext(userContext);
  return (
    <div>
      <p>component2</p>
      <h1>count:{count}</h1>
      <button onClick={increment}>incre</button>
      <Three />
    </div>
  );
};
export const Three = () => {
  return (
    <div>
      <p>component3</p>
      <Four />
    </div>
  );
};
export const Four = () => {
  return (
    <div>
      <p>component4</p>
      <Five />
    </div>
  );
};
export const Five = () => {
  const { user } = useContext(userContext);
  return <h1>user:{user}</h1>;
};
