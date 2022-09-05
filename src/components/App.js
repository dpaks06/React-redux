import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/Home";
import About from "./about/About";
import Header from "./header/Header";
import CoursesPage from "./courses/CoursePage";
import NoPageFound from "./nopagefound/NoPageFound";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={About} />
        <Route component={NoPageFound} />
      </Switch>
    </div>
  );
}

export default App;
