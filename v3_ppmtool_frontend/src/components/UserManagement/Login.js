import React, { Component } from "react";
import AuthenticationService from "../../actions/AuthenticationService";
import MemberService from "../../actions/MemberService";
import { Redirect, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Users: [],
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.retrieveUsers = this.retrieveUsers.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }
  retrieveUsers() {
    MemberService.retriveAllUsers().then((response) => {
      this.setState({ Users: response.data });
    });
  }
  loginClicked() {
    this.retrieveUsers();
    this.state.Users.map((user) => {
      console.log(user);
      if (
        this.state.username === user.userName &&
        this.state.password === user.password
      ) {
        AuthenticationService.registerSuccessfulLogin(
          this.state.username,
          this.state.password
        );
        let name = AuthenticationService.getLoggedInUserName();
        this.setState({ showSuccessMessage: true });
        this.setState({ hasLoginFailed: false });
        console.log("login!");
        console.log(name);
        this.context.history.push("/dashboard");
      } else {
        this.setState({ hasLoginFailed: true });
      }
    });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    return (
      <div style={{ color: "#fff", textAlign: "center" }}>
        <h1 className="display-4">Welcome</h1>
        <p className="lead text-center">
          Manage your projects easily with jarvis{" "}
        </p>

        <div className="container center">
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {this.state.showSuccessMessage && <div>Login Successful</div>}

          <AiIcons.AiOutlineUser />
          <input
            className="btn-sm"
            placeholder="Enter username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          ></input>
          <br />
          <AiIcons.AiOutlineLock />
          <input
            className="btn-sm"
            placeholder="Enter password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          ></input>
          <br />
          <br />
          <button onClick={this.loginClicked} className="btn-sm btn-primary">
            Log in
          </button>
        </div>
        <br />
        <div className="container center lead">
          Don't have an account?
          <Link to="/register"> Sign Up! </Link>
        </div>
        {this.state.showSuccessMessage && (
          <div>
            <Redirect to="/dashboard/"></Redirect>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
