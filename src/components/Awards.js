import React from "react";

export default class Awards extends React.Component {
  render() {
    return (
      <form>
        <fieldset className="resume--form">
          <h1 className="profile--title">HONORS & AWARDS</h1>
          <div className="form--inputs">
            <label>Section Heading</label>
            <input
              type="text"
              name="resume-section-awards"
              placeholder="Awards"
            />
          </div>
          <div className="line"></div>
        </fieldset>
      </form>
    );
  }
}
