import React from "react";
import { Link } from "react-router-dom";

function AboutComponent() {
  return (
    <div>
      <h2>About Component</h2>
      <ul>
        <li> <Link to="/" >Home</Link> </li>
        <li> <Link to="/about" >About</Link> </li>
        <li> <Link to="/contact" >Contact</Link> </li>
      </ul>
    </div>
  );
}

export default AboutComponent;
