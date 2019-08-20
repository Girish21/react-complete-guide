import React from "react";
import Aux from "../../AuxHOC";

const layout = props => {
  return (
    <Aux>
      <div>
        <code>Toolbar, Sidenav, Backdrop</code>
      </div>
      <main>{props.children}</main>
    </Aux>
  );
};

export default layout;
