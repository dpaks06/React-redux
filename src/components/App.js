import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/Home";
import About from "./about/About";
import Header from "./header/Header";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
