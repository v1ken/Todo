import React, { Component } from "react";
import CreateProjectButton from "./Project/CreateProjectButton";
import ProjectItem from "./Project/ProjectItem";
import { connect } from "react-redux";
import { getUserProjects } from "../actions/projectActions";
import PropTypes from "prop-types";
import AuthenticationService from "../actions/AuthenticationService";

class Dashboard extends Component {
  componentDidMount() {
    const name=AuthenticationService.getLoggedInUserName();
    // this.props.getProjects();
    this.props.getUserProjects(name);
  }
  render() {
    const { projects } = this.props.project;
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <div className="text-center">
                <CreateProjectButton />
              </div>

              {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getUserProjects })(Dashboard);
