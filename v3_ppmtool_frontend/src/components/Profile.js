import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../actions/AuthenticationService";
import MemberService from "../actions/MemberService";
import * as AiIcons from "react-icons/ai";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
    this.refreshUsers = this.refreshUsers.bind(this);
  }

  componentDidMount() {
    this.refreshUsers();
  }
  refreshUsers() {
    let username = AuthenticationService.getLoggedInUserName();
    MemberService.retriveUserByName(username).then((Response) => {
      this.setState({ user: Response.data });
    });
  }

  render() {
    return (
      <>
        <div style={{ color: "#fff", textAlign: "center" }}>
          <h1 className="display-4">Profile</h1>
          <p className="lead text-center">Thank you for using jarvis </p>

          <div className="container center">
            <AiIcons.AiOutlineUser />
            <input
              className="btn-sm"
              type="text"
              value={this.state.user.userName}
            ></input>
            <br />
            <AiIcons.AiOutlineMail />
            <input
              className="btn-sm"
              type="text"
              value={this.state.user.email}
            ></input>
            <br />
            <AiIcons.AiOutlineLock />
            <input
              className="btn-sm"
              type="text"
              value={this.state.user.password}
            ></input>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
