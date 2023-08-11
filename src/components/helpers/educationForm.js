import React from "react";

export default class EdForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(
      localStorage.getItem(`EdDetails${this.props.id}`)
    ) || {
      schoolName: "",
      schoolLocation: "",
      degree: "",
      major: "",
      gpa: "",
      startDate: "",
      endDate: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  componentDidUpdate() {
    localStorage.setItem(
      `EdDetails${this.props.id}`,
      JSON.stringify(this.state)
    );
  }
  render() {
    return (
      <form>
        <fieldset className="resume--form">
          <div className="form--inputs">
            <label>Schools Name</label>
            <input
              type="text"
              name="schoolName"
              placeholder="University of California, Davis"
              onChange={(e) => this.handleChange(e)}
              value={this.state.schoolName}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>School Location</label>
            <input
              type="text"
              name="schoolLocation"
              placeholder="Davis, CA"
              onChange={(e) => this.handleChange(e)}
              value={this.state.schoolLocation}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Degree</label>
            <input
              type="text"
              name="degree"
              placeholder="BA"
              onChange={(e) => this.handleChange(e)}
              value={this.state.degree}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Major</label>
            <input
              type="text"
              name="major"
              placeholder="Chicano Studies"
              onChange={(e) => this.handleChange(e)}
              value={this.state.major}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>GPA</label>
            <input
              type="text"
              name="gpa"
              placeholder="3.4"
              onChange={(e) => this.handleChange(e)}
              value={this.state.gpa}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Start Date</label>
            <input
              type="text"
              name="startDate"
              placeholder="Sep 2018"
              onChange={(e) => this.handleChange(e)}
              value={this.state.startDate}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>End Date</label>
            <input
              type="text"
              name="endDate"
              placeholder="Jun 2022"
              onChange={(e) => this.handleChange(e)}
              value={this.state.endDate}
            />
            <div className="line"></div>
          </div>
        </fieldset>
      </form>
    );
  }
}
