import React from "react";
import { Link } from "react-router-dom";

const CreateProjectButton = () => {
  return (
    <React.Fragment>
      <Link
        to="/addProject"
        className="btn btn-primary"
        style={{ margin: "30px" }}
      >
        Create a project
      </Link>
    </React.Fragment>
  );
};

export default CreateProjectButton;
