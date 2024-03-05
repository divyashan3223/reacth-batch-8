import React from "react";
import "./demo.css";
import img from "../assets/eagle.jpg";
const Demo = () => {
  let person = {
    name: "frenzo",
    age: 22,
    size: 10,
    image: img,
  };
  return (
    <div className="container">
      <h1>name:{person.name}</h1>
      <h2>{person.age}</h2>
      <img src={`${person.image}`} alt="" />
    </div>
  );
};

export default Demo;
