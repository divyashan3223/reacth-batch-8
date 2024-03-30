import React, { useState, useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  // Define a function that increments the count
  const incrementCount = () => {
    console.log("kdjflkasj");
    setCount(count + 1);
  };

  console.log("dharshuuu");
  //   Memoize the incrementCount function using useCallback
  const memoizedIncrement = useCallback(() => {
    console.log("child");
    incrementCount();
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Use the memoized function in the onClick handler */}
      <button onClick={memoizedIncrement}>Increment</button>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Parent;
