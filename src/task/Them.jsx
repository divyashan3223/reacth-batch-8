import React, { useContext, useState, createContext } from "react";

const ColorContext = createContext();

const User = ({ children }) => {
  const [result, setResult] = useState("light");

  const Change = () => {
    setResult(result === "light" ? "dark" : "light");
  };

  return (
    <div>
      <ColorContext.Provider value={{ result, Change }}>
        {children}
      </ColorContext.Provider>
      <OnChange />
    </div>
  );
};

export default User;

export const OnChange = () => {
  const { result, Change } = useContext(ColorContext);
  return (
    <button
      onClick={Change}
      style={{
        background: result === "light" ? "white" : "black",
        color: result === "light" ? "black" : "white",
      }}
    >
      Click me
    </button>
  );
};
