import React from "react";
import SkillForm from "./helpers/skillsForm";

export default class Skills extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("skillsSet")) || {
      skillsSet: [],
    };
  }

  addSkill = () => {
    this.setState((prevState) => ({
      skillsSet: [...prevState.skillsSet, {}],
    }));
  };

  componentDidUpdate() {
    localStorage.setItem("skillsSet", JSON.stringify(this.state));
  }
  render() {
    return (
      <div className="wrapper">
        <div className="resume--form">
          <h1 className="profile--title">YOUR SKILLS</h1>
          <div className="form--inputs">
            <label>Section Heading</label>
            <input
              type="text"
              name="resume-section-name"
              placeholder="Skills"
            />
            <div className="line"></div>
          </div>
          <div className="thick-line"></div>
        </div>
        {this.state.skillsSet.map((skill, index) => (
          <SkillForm key={index} id={index} />
        ))}
        <button className="resume--button" onClick={this.addSkill}>
          Add Skill
        </button>
      </div>
    );
  }
}
