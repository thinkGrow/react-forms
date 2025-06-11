import React, { useState } from "react";

const ControlledField = (e) => {
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePassOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <p>Controlled Field is used when interactivity is high</p>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          defaultValue={password}
          onChange={handlePassOnChange}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledField;
