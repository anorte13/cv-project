import React from "react";

export default class SkillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem(`skills${this.props.id}`)) || {
      skillName: "",
      skillDetails: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  componentDidUpdate() {
    localStorage.setItem(`skills${this.props.id}`, JSON.stringify(this.state));
  }
  render() {
    return (
      <form>
        <fieldset className="resume--form">
          <div className="form--inputs">
            <label>Skill Name</label>
            <input
              type="text"
              name="skillName"
              placeholder="Programming Languages"
              onChange={(e) => this.handleChange(e)}
              value={this.state.skillName}
            />
            <div className="line"></div>
          </div>
          <div className="line"></div>
          <div className="form--inputs">
            <label>Skill Details</label>
            <input
              type="text"
              name="skillDetails"
              placeholder="Java"
              onChange={(e) => this.handleChange(e)}
              value={this.state.skillDetails}
            />
            <div className="line"></div>
          </div>
          <div className="thick-line"></div>
        </fieldset>
      </form>
    );
  }
}
