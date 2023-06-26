import React, { useState } from "react";
import { Users } from "./users";
import "./App.css";

/*Rendering static list and displaying as per the input string*/
const App = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(input)
        ).map((user) => (
          <li className="listItem">{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
