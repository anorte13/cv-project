import React from "react";
import ProjectsForm from "./helpers/projectsForm";

export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("projects")) || {
      projects: [],
    };
  }
  addProject = () => {
    this.setState((prevState) => ({
      projects: [...prevState.projects, {}],
    }));
  };
  componentDidUpdate() {
    localStorage.setItem("projects", JSON.stringify(this.state));
  }
  render() {
    return (
      <div className="wrapper">
        <div className="resume--form">
          <h1 className="profile--title">YOUR PROJECTS</h1>
          <div className="form--inputs">
            <label>Section Heading</label>
            <input
              type="text"
              name="resume-section-projects"
              placeholder="Projects"
            />
            <div className="line"></div>
          </div>
          <div className="thick-line"></div>
        </div>
        {this.state.projects.map((project, index) => (
          <ProjectsForm key={index} id={index} />
        ))}
        <button className="resume--button" onClick={this.addProject}>
          Add Project
        </button>
      </div>
    );
  }
}
