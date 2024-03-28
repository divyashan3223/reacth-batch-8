import "./App.css";

// import { useCallback, useMemo, useState } from "react";
// import ChildComponent from "./components/ChildComponent";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Context from "./router/Context";
import Signin from "./router/Signin";
import Error from "./router/Error";
import Logo from "./router/Logo";
import User from "./router/useprames/User";
import Login from "./router/Login";
import Dashboard from "./router/Dashboard";
import { Max } from "./memo/Memo";
function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = useCallback(() => {
  //   console.log("working");
  //   // return { name: "div" };
  //   setCount((pre) => pre + 1);
  // }, []);

  return (
    <div>
      <Max />
    </div>
  );
}

export default App;
