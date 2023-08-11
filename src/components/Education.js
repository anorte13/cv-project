import React from "react";
import EdForm from "./helpers/educationForm";

export default class Education extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("educationBackground")) || {
      educationBackgrounds: [],
    };
  }
  addEducation = () => {
    this.setState((prevState) => ({
      educationBackgrounds: [...prevState.educationBackgrounds, {}],
    }));
  };
  componentDidUpdate() {
    localStorage.setItem("educationBackground", JSON.stringify(this.state));
  }
  render() {
    return (
      <div className="wrapper">
        <div className="resume--form">
          <h1 className="profile--title">YOUR EDUCATIONAL BACKGROUND</h1>
          <div className="form--inputs">
            <label>Section Heading</label>
            <input
              type="text"
              name="resume-education"
              placeholder="Education"
            />
            <div className="line"></div>
          </div>
          <div className="thick-line"></div>
          {this.state.educationBackgrounds.map((work, index) => (
            <EdForm key={index} id={index} />
          ))}
        </div>
        <button className="resume--button" onClick={this.addEducation}>
          Add School
        </button>
      </div>
    );
  }
}
