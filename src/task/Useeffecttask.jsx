import React, { useState, useEffect } from "react";

function MyComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // This function will run after the component mounts or whenever its dependencies change
    const interval = setInterval(() => {
      // Update the time state variable every second
      setTime(new Date());
    }, 1000);

    // Clean-up function to clear the interval when the component unmounts or before the effect runs again
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array means this effect will only run once after initial render

  return (
    <div>
      <h1>Current Time</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default MyComponent;
