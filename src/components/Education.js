import React from "react";
import EdForm from "./helpers/educationForm";

export default class Education extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("educationExperience")) || {
      educationBackgrounds: [],
      educationHeading: "",
    };
  }
  addEducation = () => {
    this.setState((prevState) => ({
      educationBackgrounds: [...prevState.educationBackgrounds, {}],
    }));
  };
  componentDidUpdate() {
    localStorage.setItem("educationExperience", JSON.stringify(this.state));
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
          <h1 className="profile--title">YOUR EDUCATIONAL BACKGROUND</h1>
          <div className="form--inputs">
            <label>Section Heading</label>
            <input
              type="text"
              name="educationHeading"
              placeholder="Education"
              onChange={(e) => this.handleChange(e)}
              value={this.state.educationHeading}
            />
            <div className="line"></div>
          </div>
          <div className="thick-line"></div>
        </div>
        {this.state.educationBackgrounds.map((work, index) => (
          <EdForm key={index} id={index} />
        ))}
        <button className="resume--button" onClick={this.addEducation}>
          Add School
        </button>
      </div>
    );
  }
}
