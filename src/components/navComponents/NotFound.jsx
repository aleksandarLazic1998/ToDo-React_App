import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>Error Page Not Found</h2>
      <p>Click on link below to go to Home Page</p>
      <Link to="/">Home Page</Link>
    </div>
  );
}

export default NotFound;
