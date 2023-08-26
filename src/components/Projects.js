import React from "react";
import { deleteWork } from "../functions/delete";
import ProjectsForm from "./helpers/projectsForm";

export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("projects")) || {
      projects: [],
      projectHeading: "",
    };
  }
  addProject = () => {
    this.setState((prevState) => ({
      projects: [...prevState.projects, { id: Date.now() }],
    }));
  };

  delete = () => {
    const project = [...this.state.projects];
    deleteWork(project, "project", "projects", this.setState.bind(this));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
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
              name="projectHeading"
              placeholder="Projects"
              onChange={(e) => this.handleChange(e)}
              value={this.state.projectHeading}
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
        <button className="resume--button" onClick={this.delete}>
          Delete Project
        </button>
      </div>
    );
  }
}
