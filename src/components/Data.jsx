import axios from "axios";
import React, { useEffect, useState } from "react";

const Data = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setInfo(response.data));
  }, []);
  return (
    <div>
      <h1>datas name</h1>
      {info.map((element, i) => (
        <div>
          <p key={i}>{element.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
