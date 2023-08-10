import React from "react";

export default class Education extends React.Component {
  render() {
    return (
      <form>
        <fieldset className="resume--form">
          <h1 className="profile--title">YOUR EDUCATIONAL BACKGROUND</h1>
          <div className="form--inputs">
            <label>Section Heading</label>
            <input
              type="text"
              name="resume-education"
              placeholder="Education"
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Schools Name</label>
            <input
              type="text"
              name="resume-school"
              placeholder="University of California, Davis"
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>School Location</label>
            <input
              type="text"
              name="resume-school-location"
              placeholder="Davis, CA"
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Degree</label>
            <input type="text" name="resume-degree" placeholder="BA" />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Major</label>
            <input
              type="text"
              name="resume-degree"
              placeholder="Chicano Studies"
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>GPA</label>
            <input type="text" name="resume-gpa" placeholder="3.4" />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Start Date</label>
            <input type="text" name="resume-start" placeholder="Sep 2018" />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>End Date</label>
            <input type="text" name="resume-degree" placeholder="Jun 2022" />
            <div className="line"></div>
          </div>
        </fieldset>
      </form>
    );
  }
}
