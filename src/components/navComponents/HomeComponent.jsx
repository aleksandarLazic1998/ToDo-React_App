import React from "react";
import { Link } from "react-router-dom";

function HomeComponent() {
  return (
    <div>
      <h2>Home Component</h2>
      <ul>
        <li> <Link to="/" >Home</Link> </li>
        <li> <Link to="/about" >About</Link> </li>
        <li> <Link to="/contact" >Contact</Link> </li>
      </ul>
    </div>
  );
}

export default HomeComponent;
