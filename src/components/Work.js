import React from "react";
import WorkForm from "./helpers/workForm";

export default class Work extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("workExperience")) || {
      workExperience: [],
      workHeading: "",
    };
  }
  addWorkExperience = () => {
    this.setState((prevState) => ({
      workExperience: [...prevState.workExperience, { id: Date.now() }],
    }));
  };
  deleteWork = () => {
    const work = [...this.state.workExperience];
    const id = work.length - 1;
    const deletedWork = work.pop();

    if (deletedWork && deletedWork.id) {
      const storedData = JSON.parse(localStorage.getItem("workExperience")) || {
        workExperience: [],
      };

      const updatedWorkExperiences = storedData.workExperience.filter(
        (workExp) => workExp.id !== deletedWork.id
      );

      localStorage.setItem(
        "workExperience",
        JSON.stringify({ workExperience: updatedWorkExperiences })
      );
      localStorage.removeItem(`workDetails${id}`);
    }

    this.setState({
      workExperience: work,
    });
  };

  componentDidUpdate() {
    localStorage.setItem("workExperience", JSON.stringify(this.state));
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
          <h1 className="profile--title">YOUR WORK EXPERIENCE</h1>
          <div className="form--inputs">
            <label>Section Heading</label>
            <input
              type="text"
              name="workHeading"
              placeholder="Work Experience"
              onChange={(e) => this.handleChange(e)}
              value={this.state.workHeading}
            />
            <div className="line"></div>
          </div>
          <div className="thick-line"></div>
        </div>
        {this.state.workExperience.map((work, index) => (
          <WorkForm key={index} id={index} />
        ))}
        <button className="resume--button" onClick={this.addWorkExperience}>
          Add Work
        </button>
        <button className="resume--button" onClick={this.deleteWork}>
          Delete Work
        </button>
      </div>
    );
  }
}
