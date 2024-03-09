import React from "react";

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const username = formData.get("name");
    console.log(username);
    // const password = formData.get("password");
    // console.log(" username:", username, "and password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="name" id="one" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
