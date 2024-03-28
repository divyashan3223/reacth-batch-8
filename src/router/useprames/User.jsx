import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>user</h1>
      <h4>user id:{id}</h4>
    </div>
  );
};

export default User;
