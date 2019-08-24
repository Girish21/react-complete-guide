import React from "react";

import classes from "./Logo.module.css";

import logoSrc from "../../assets/images/burger-logo.png";

const logo = props => (
  <div className={classes.Logo}>
    <img src={logoSrc} alt="logo" />
  </div>
);

export default logo;
