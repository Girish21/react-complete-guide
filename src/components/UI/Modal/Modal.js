import React from "react";

import PropTypes from "prop-types";

import classes from "./Modal.module.css";

import Aux from "../../../HOC/AuxHOC/AuxHOC";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <Aux>
    <Backdrop click={props.click} show={props.show} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

modal.prototype = {
  show: PropTypes.bool.isRequired
};

export default React.memo(modal);
