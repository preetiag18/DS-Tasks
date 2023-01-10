import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import classes from "./Nav.module.css";

const Nav = () => {
  const [responsive, setResponsive] = useState(false);
  const onHeaderClick = () => {
    setResponsive(!responsive);
  };
  return (
    <nav>
      <button className={classes.mob_button} onClick={onHeaderClick}>
        <MenuRoundedIcon />
      </button>
      <ul className={responsive ? classes.displayUl : classes.hideUl}>
        <li className={responsive ? classes.displayLi : ""}>
          <NavLink
            to="/queue"
            className={responsive ? classes.displayLiA : ""}
            onClick={onHeaderClick}
          >
            Queue
          </NavLink>
        </li>
        <li className={responsive ? classes.displayLi : ""}>
          <NavLink
            to="/stack"
            className={responsive ? classes.displayLiA : ""}
            onClick={onHeaderClick}
          >
            Stack
          </NavLink>
        </li>
        <li className={responsive ? classes.displayLi : ""}>
          <NavLink
            to="/bubblesort"
            className={responsive ? classes.displayLiA : ""}
            onClick={onHeaderClick}
          >
            Bubble sort
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
