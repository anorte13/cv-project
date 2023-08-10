import React from "react";

export default class Work extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("workExperience")) || {
      workHeading: "",
      companyName: "",
      jobTitle: "",
      jobLocation: "",
      startDate: "",
      endDate: "",
      jobResponsibilites: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem("workExperience")));
  }
  //Runs anytime there are changes to state or props.
  componentDidUpdate() {
    localStorage.setItem("workExperience", JSON.stringify(this.state));
  }
  render() {
    return (
      <form>
        <fieldset className="resume--form">
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
          <div className="form--inputs">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Microsoft"
              onChange={(e) => this.handleChange(e)}
              value={this.state.companyName}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Marketing"
              onChange={(e) => this.handleChange(e)}
              value={this.state.jobTitle}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Job Location</label>
            <input
              type="text"
              name="jobLocation"
              placeholder="San Diego, CA"
              onChange={(e) => this.handleChange(e)}
              value={this.state.jobLocation}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Start Date</label>
            <input
              type="text"
              name="startDate"
              placeholder="May 2015"
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
              placeholder="May 2017 / Present /Etc."
              onChange={(e) => this.handleChange(e)}
              value={this.state.endDate}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Job Responsibilities</label>
            <input
              type="text"
              name="jobResponsibilites"
              placeholder="Did XYZ at company"
              onChange={(e) => this.handleChange(e)}
              value={this.state.jobResponsibilites}
            />
            <div className="line"></div>
          </div>
        </fieldset>
      </form>
    );
  }
}
