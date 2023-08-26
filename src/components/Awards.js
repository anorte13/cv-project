import React from "react";
import { deleteWork } from "../functions/delete";
import AwardsForm from "./helpers/awardsForm";

export default class Awards extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("awards")) || {
      awards: [],
      awardHeading: "",
    };
  }
  addAward = () => {
    this.setState((prevState) => ({
      awards: [...prevState.awards, { id: Date.now() }],
    }));
  };

  delete = () => {
    const awards = [...this.state.awards];
    deleteWork(awards, "award", "awards", this.setState.bind(this));
  };

  componentDidUpdate() {
    localStorage.setItem("awards", JSON.stringify(this.state));
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="wrapper">
        <div className="resume--form">
          <h1 className="profile--title">HONORS & AWARDS</h1>
          <div className="form--inputs">
            <label>Section Heading</label>
            <input
              type="text"
              name="awardHeading"
              placeholder="Awards"
              onChange={(e) => this.handleChange(e)}
              value={this.state.awardHeading}
            />
            <div className="line"></div>
          </div>
          <div className="thick-line"></div>
        </div>
        {this.state.awards.map((skill, index) => (
          <AwardsForm key={index} id={index} />
        ))}
        <button className="resume--button" onClick={this.addAward}>
          Add Award
        </button>
        <button className="resume--button" onClick={this.delete}>
          Delete Award
        </button>
      </div>
    );
  }
}
