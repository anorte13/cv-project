import React from "react";
import WorkForm from "./helpers/workForm";

export default class Work extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("workExperience")) || {
      workExperiences: [],
    };
  }
  addWorkExperience = () => {
    this.setState((prevState) => ({
      workExperiences: [...prevState.workExperiences, {}],
    }));
  };
  componentDidUpdate() {
    localStorage.setItem("workExperience", JSON.stringify(this.state));
  }
  render() {
    return (
      <div className="wrapper">
        <div className="resume--form">
          <h1 className="profile--title">YOUR WORK EXPERIENCE</h1>
          <div className="form--inputs">
            <label>Section Heading</label>
            <input
              type="text"
              name="workHeading"
              placeholder="Work Experience"
            />
            <div className="line"></div>
          </div>
          <div className="thick-line"></div>
        </div>
        {this.state.workExperiences.map((work, index) => (
          <WorkForm key={index} id={index} />
        ))}
        <button className="resume--button" onClick={this.addWorkExperience}>
          Add Work
        </button>
      </div>
    );
  }
}
