import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const activeStyle = { color: "orange" };
  return (
    <nav className="nav">
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home{" "}
      </NavLink>
      {"  |  "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses{" "}
      </NavLink>
      {"  |  "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About{" "}
      </NavLink>
    </nav>
  );
};

export default Header;
