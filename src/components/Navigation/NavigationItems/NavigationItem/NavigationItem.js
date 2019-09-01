import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const navigationItem = props => (
  <li className={classes.NavigationItem}>
    {!props.type && (
      <NavLink to={props.link} exact activeClassName={classes.active}>
        {props.children}
      </NavLink>
    )}
    {props.type && <button onClick={props.logout}>{props.children}</button>}
  </li>
);

export default navigationItem;
