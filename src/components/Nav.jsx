import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/queue">Queue</NavLink>
        </li>
        <li>
          <NavLink to="/Stack">Stack</NavLink>
        </li>
        <li>
          <NavLink to="/bubblesort">Bubble sort</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
