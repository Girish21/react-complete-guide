import React from "react";

import { connect } from "react-redux";

import { logOut } from "../../store/actions/auth";

import Aux from "../../HOC/AuxHOC/AuxHOC";

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
          <Toolbar
            isAuthenticated={this.props.isAuthenticated !== null}
            logoutHandler={this.props.logout}
            openSideDrawer={this.openSideDrawerHandler}
          />
          <SideDrawer
            isAuthenticated={this.props.isAuthenticated !== null}
            logoutHandler={this.props.logout}
            showSideDrawer={this.state.sideDrawerOpen}
            closeSideDrawer={this.closeSideDrawerHandler}
          />
        </div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
