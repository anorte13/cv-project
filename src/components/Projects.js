import React from "react";

export default class Projects extends React.Component {
  render() {
    return (
      <form>
        <fieldset className="resume--form">
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
        </fieldset>
      </form>
    );
  }
}
