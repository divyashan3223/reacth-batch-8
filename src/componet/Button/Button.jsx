import React from "react";

const Button = ({ user = false }) => {
  // return user ? (
  //   <div>
  //     <h1>insta open</h1>
  //     <button>logout</button>
  //   </div>
  // ) : (
  //   <>
  //     <h1>log in first</h1>
  //     <button>login</button>
  //   </>
  // );

  if (user) {
    return (
      <div>
        <h1>insta open</h1>
        <button>logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>login first</h1>
        <button>login</button>
      </div>
    );
  }
};

export default Button;
