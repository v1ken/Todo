import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthenticationService from "../../actions/AuthenticationService";

class AuthenticatedRouter extends Component {
  render() {
    if (AuthenticationService.isUserLoggedin()) {
      return <Route {...this.props}></Route>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default AuthenticatedRouter;
