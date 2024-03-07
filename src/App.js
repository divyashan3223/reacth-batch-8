import "./App.css";
import Demo from "./componet/Demo";
// import Demo2 from "./componet/Demo";
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
      <Demo />
      {/* <h1>{count}</h1>
      <ChildComponent handleClick={handleClick} /> */}
    </div>
  );
}

export default App;
