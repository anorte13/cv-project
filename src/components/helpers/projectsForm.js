import React from "react";

export default class ProjectsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(
      localStorage.getItem(`project${this.props.id}`)
    ) || {
      projectName: "",
      projectDescription: "",
      projectLink: "",
      projectTools: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  componentDidUpdate() {
    localStorage.setItem(`project${this.props.id}`, JSON.stringify(this.state));
  }
  render() {
    return (
      <form>
        <fieldset className="resume--form">
          <div className="form--inputs">
            <label>Project Name</label>
            <input
              type="text"
              name="projectName"
              placeholder="The Dundies"
              onChange={(e) => this.handleChange(e)}
              value={this.state.projectName}
            />
            <div className="line"></div>
          </div>
          <div className="line"></div>
          <div className="form--inputs">
            <label>Project Description</label>
            <input
              type="text"
              name="projectDescription"
              placeholder="A community award ceremony for employees."
              onChange={(e) => this.handleChange(e)}
              value={this.state.projectDescription}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Link to Project</label>
            <input
              type="text"
              name="projectLink"
              placeholder="http://thedundies.com"
              onChange={(e) => this.handleChange(e)}
              value={this.state.projectLink}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Tools Used</label>
            <input
              type="text"
              name="projectTools"
              placeholder="Microsoft Office"
              onChange={(e) => this.handleChange(e)}
              value={this.state.projectTools}
            />
            <div className="line"></div>
          </div>
        </fieldset>
      </form>
    );
  }
}
