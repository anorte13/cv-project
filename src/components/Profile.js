import React from "react";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("profileData")) || {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      link: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem("profileData")));
  }
  //Runs anytime there are changes to state or props.
  componentDidUpdate() {
    localStorage.setItem("profileData", JSON.stringify(this.state));
  }
  render() {
    return (
      <form>
        <fieldset className="resume--form">
          <h1 className="profile--title">YOUR PERSONAL INFO</h1>
          <div className="form--inputs">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Micheal Scott"
              onChange={(e) => this.handleChange(e)}
              value={this.state.fullName}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Email</label>
            <input
              name="email"
              type="text"
              placeholder="michealscott@gmail.com"
              onChange={(e) => this.handleChange(e)}
              value={this.state.email}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="(555) 123-4567"
              onChange={(e) => this.handleChange(e)}
              value={this.state.phone}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Scranton, PA"
              onChange={(e) => this.handleChange(e)}
              value={this.state.location}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Link</label>
            <input
              type="text"
              name="link"
              placeholder="michealscoolwebsite.com"
              onChange={(e) => this.handleChange(e)}
              value={this.state.link}
            />
            <div className="line"></div>
          </div>
        </fieldset>
      </form>
    );
  }
}
