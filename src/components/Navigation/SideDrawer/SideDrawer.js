import React from "react";

import classes from "./SideDrawer.module.css";

import Aux from "../../../HOC/AuxHOC/AuxHOC";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = props => {
  const sideDrawerClasses = [classes.SideDrawer];
  props.showSideDrawer
    ? sideDrawerClasses.push(classes.Open)
    : sideDrawerClasses.push(classes.Close);
  return (
    <Aux>
      <Backdrop show={props.showSideDrawer} click={props.closeSideDrawer} />
      <div className={sideDrawerClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems
            logout={props.logoutHandler}
            isAuthenticated={props.isAuthenticated}
          />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
