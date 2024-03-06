import React from "react";

const Demo = () => {
  let persons = [
    { name: "dhars", age: 22, id: 1 },
    { name: "dinesh", age: 22, id: 2 },
    { name: "roshini", age: 22, id: 3 },
    { name: "prabav", age: 22, id: 4 },
  ];

  let details = persons.map((person) => (
    <li key={person.id}>age:{person.age}</li>
  ));
  return (
    <div>
      <ul>{details}</ul>
    </div>
  );
};

export default Demo;
