import "./App.css";
import Demo2 from "./componet/Demo";
// import { useCallback, useMemo, useState } from "react";
// import ChildComponent from "./components/ChildComponent";

function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = useCallback(() => {
  //   console.log("working");
  //   setCount((pre) => pre + 1);
  // }, []);

  return (
    <div>
      <Demo2 />
      {/* <h1>{count}</h1>
      <ChildComponent handleClick={handleClick} /> */}
    </div>
  );
}

export default App;
