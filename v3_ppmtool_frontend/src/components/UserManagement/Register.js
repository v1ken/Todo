import React, { Component } from "react";
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      contact: "",
      designation: "",
      email: "",
      password: "",
      projectIdentifier: "",
      userName: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      userName: this.state.userName,
      contact: this.state.contact,
      designation: this.state.designation,
      email: this.state.email,
      password: this.state.password,
      projectIdentifier: this.state.projectIdentifier,
    };
    this.props.createNewUser(newUser, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="register" style={{ color: "#fff", textAlign: "center" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4">Sign Up</h1>
              <p className="lead text-center">Create your account</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="userName"
                    className={classnames("form-control form-control-sm", {
                      "is-invalid": errors.userName,
                    })}
                    placeholder="Username"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.onChange}
                  />
                  {errors.userName && (
                    <div className="invalid-feedback">{errors.userName}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-sm", {
                      "is-invalid": errors.email,
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="Password"
                    className={classnames("form-control form-control-sm", {
                      "is-invalid": errors.password,
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="contact"
                    className={classnames("form-control form-control-sm", {
                      "is-invalid": errors.contact,
                    })}
                    placeholder="Contact"
                    name="contact"
                    value={this.state.contact}
                    onChange={this.onChange}
                  />
                  {errors.contact && (
                    <div className="invalid-feedback">{errors.contact}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn-sm btn-primary btn-block mt-4"
                />
              </form>
              <br />
              <div className="lead">
                Already have an account?
                <Link to="login"> Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { createNewUser })(Register);
