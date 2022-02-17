import React, { Component } from "react"
import AddMemberButton from "./Member/AddMemberButton";
import MemberItem from "./Project/MemberItem";
import { connect } from "react-redux";
import { removeMember } from "../actions/MemberActions";
import PropTypes from "prop-types";
import MemberService from "../actions/MemberService";
import { Link } from "react-router-dom";
import classnames from "classnames";



class Member extends Component {
  constructor(props) {

    super(props);

    this.state = {
      members: [],
      name: null,
      errors: {}
    }
    this.retrieveMembers = this.retrieveMembers.bind(this);
    // this.removeMemberClicked=this.removeMemberClicked.bind(this);
    // // this.addMemberClicked=this.addMemberClicked.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDeleteClick=this.onDeleteClick.bind(this);
  }
  retrieveMembers() {

    const { id } = this.props.match.params;

    MemberService.retriveAllMembers(id).then((response) => {

      // console.log(response)

      this.setState({ members: response.data });

    });

  }
  componentDidMount() {
    console.log("componentDidMount");
    this.retrieveMembers();
    console.log(this.state);
  }


  // removeMemberClicked(username) { 
  //   MemberService.removeMember(username).then((response) => { 
  //     this.setState({ message: `Remove of member ${username} is successful `}); 
  //     this.retrieveMembers(); 
  //   }); 
  // } 

  // addMemberClicked() { 
  //   this.props.navigate(`/members/-1`); 
  // }

  onSubmit(value) {
    value.preventDefault();
    const username = this.state.username;
    const { id } = this.props.match.params;
    MemberService.addNewMembers(id, username);
    this.retrieveMembers();
  }
  onChange(value) {
    this.setState({ [value.target.name]: value.target.value });
  }

  onDeleteClick = (userName,projectIdentifier) => {

    MemberService.removeMembers(userName,projectIdentifier);
  };

  render() {
    const { id } = this.props.match.params;
    const { errors } = this.state;
    //const { members } = this.props.user;
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Members</h1>
              <br />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="username"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.username
                    })}
                    placeholder="enter a user name"
                    name="username"
                    onChange={this.onChange}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>
                <button type="submit" className="btn btn-info btn-block mt-4">
                  Add a Member
                </button>

              </form>
              <br />
              <hr />
              <br />
              <hr />
              {this.state.members.map(member => (
                // <MemberItem key={member.id} member={member} />
                <div className="container">
                  <div className="card card-body bg-light mb-3">
                    <div className="row">
                      <div className="col-2">
                        <span className="mx-auto">{member.userName}</span>
                      </div>
                      <div className="col-lg-6 col-md-4 col-8">
                        <h3>{member.contact}</h3>
                        <p>{member.email}</p>
                      </div>
                      <div className="col-md-4 d-none d-lg-block">
                        <ul className="list-group">
                          <Link to={`/trasferProject/${member.projectIdentifier}/${member.userName}`}>
                            <li className="list-group-item board">
                              <i className="fa fa-flag-checkered pr-1"> Transfer Project to this member </i>
                            </li>
                          </Link>
                          <button onClick={(ev) => { this.onRemoveClick(ev, member.userName, member.projectIdentifier) }}>
                            Remove this member from Project
                          </button>
                          <li
                            className="list-group-item delete"
                            onClick={this.onDeleteClick.bind(
                              this,
                              member.userName,
                              id
                            )}
                          >
                            <i className="fa fa-minus-circle pr-1"> Remove Member</i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*Member.propTypes = {
  user: PropTypes.object.isRequired,
  getMembers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});
*/
export default Member;



