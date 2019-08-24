import React from "react";
import Aux from "../../AuxHOC";

import classes from "./Layout.module.css";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  openSideDrawerHandler = () => {
    this.setState({ sideDrawerOpen: true });
  };

  closeSideDrawerHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    return (
      <Aux>
        <div>
          <Toolbar openSideDrawer={this.openSideDrawerHandler} />
          <SideDrawer
            showSideDrawer={this.state.sideDrawerOpen}
            closeSideDrawer={this.closeSideDrawerHandler}
          />
        </div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
