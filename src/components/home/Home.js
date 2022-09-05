import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="jumbotron">
      <h2>React and Redux project</h2>
      <p>React, Redux and React Router for ultra-responsive web apps.</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn More
      </Link>
    </div>
  );
}
