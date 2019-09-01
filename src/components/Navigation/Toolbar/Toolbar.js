import React from "react";

import classes from "./Toolbar.module.css";

import Logo from "../../Logo/Logo";
import ToggleButton from "../SideDrawer/ToggleButton/ToggleButton";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <ToggleButton open={props.openSideDrawer} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.NavigationItems}>
      <NavigationItems
        logout={props.logoutHandler}
        isAuthenticated={props.isAuthenticated}
      />
    </nav>
  </header>
);

export default toolbar;
