import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../actions/RecommendService";

class RecommenComponent extends Component {
  constructor(props) {
    super(props);
    this.retrieveRecommendation = this.retrieveRecommendation.bind(this);
    this.state = {
      items: [],
      name: null,
    };
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <>
        <h1 className="display-4 text-center">Podcast Recommender</h1>

        <div className="container center lead">
          Enter the name of your favourite podcast
          <form>
            <label>
              Name:
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                style={{ margin: "10px" }}
              />
            </label>
          </form>
          {this.state.name && (
            <button
              onClick={this.retrieveRecommendation}
              className="btn btn-success col-2"
            >
              Get Podcasts
            </button>
          )}
        </div>
        <br />
        <div className="container">
          <table className="table text-white lead">
            <thead>
              <tr>
                <th>Title</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item) => (
                <div>
                  <tr>
                    <td>{item.title}</td>
                    <td>
                      <Link to={`${item.link}`} target="_blank">
                        {item.link}
                      </Link>
                    </td>
                  </tr>
                </div>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  retrieveRecommendation() {
    HelloWorldService.executeRecommendationService(this.state.name)
      .then((response) => this.handleSuccessfulResponse(response))
      .catch((error) => this.handleError(error));
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.setState({ items: response.data });

    console.log(this.state.items);
  }
  handleError(error) {
    console.log(error.response);
    let errorMessage = "";
    if (error.message) {
      errorMessage += error.message;
    }

    if (error.response && error.response.data) {
      errorMessage += error.response.data.message;
    }
    this.setState({ welcomeMessage: errorMessage });
  }
}

export default RecommenComponent;
