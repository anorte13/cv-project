import React from "react";
import AwardsForm from "./helpers/awardsForm";

export default class Awards extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("awards")) || {
      awards: [],
    };
  }
  addAward = () => {
    this.setState((prevState) => ({
      awards: [...prevState.awards, {}],
    }));
  };

  componentDidUpdate() {
    localStorage.setItem("awards", JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="wrapper">
        <div className="resume--form">
          <h1 className="profile--title">HONORS & AWARDS</h1>
          <div className="form--inputs">
            <label>Section Heading</label>
            <input
              type="text"
              name="resume-section-name"
              placeholder="Awards"
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
      </div>
    );
  }
}
