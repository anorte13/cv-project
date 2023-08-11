import React from "react";

export default class WorkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(
      localStorage.getItem(`workDetails${this.props.id}`)
    ) || {
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
  componentDidUpdate() {
    localStorage.setItem(
      `workDetails${this.props.id}`,
      JSON.stringify(this.state)
    );
  }
  render() {
    return (
      <form>
        <fieldset className="resume--form">
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
          <div className="thick-line"></div>
        </fieldset>
      </form>
    );
  }
}
