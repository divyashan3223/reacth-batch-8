import React from "react";

export const Demo = () => {
  return (
    <div>
      <h1>welcome to frenzo technologies</h1>
    </div>
  );
};

const Demo2 = () => {
  return (
    <div>
      <Demo />
      <h2>this is nestedd component</h2>
    </div>
  );
};

export default Demo2;
