import React from "react";
import { deleteWork } from "../functions/delete";
import SkillForm from "./helpers/skillsForm";

export default class Skills extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("skillsSet")) || {
      skillsSet: [],
      skillHeading: "",
    };
  }

  addSkill = () => {
    this.setState((prevState) => ({
      skillsSet: [...prevState.skillsSet, { id: Date.now() }],
    }));
  };

  delete = () => {
    const skills = [...this.state.skillsSet];
    deleteWork(skills, "skills", "skillsSet", this.setState.bind(this));
  };

  componentDidUpdate() {
    localStorage.setItem("skillsSet", JSON.stringify(this.state));
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
          <h1 className="profile--title">YOUR SKILLS</h1>
          <div className="form--inputs">
            <label>Section Heading</label>
            <input
              type="text"
              name="skillHeading"
              placeholder="Skills"
              onChange={(e) => this.handleChange(e)}
              value={this.state.skillHeading}
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
        <button className="resume--button" onClick={this.delete}>
          Delete Skill
        </button>
      </div>
    );
  }
}
