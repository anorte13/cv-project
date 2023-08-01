import React from "react";

export default class Work extends React.Component {
  render() {
    return (
      <form>
        <fieldset className="resume--form">
          <h1 className="profile--title">YOUR WORK EXPERIENCE</h1>
          <div className="form--inputs">
            <label>Section Heading</label>
            <input
              type="text"
              name="resume-work-heading"
              placeholder="Work Experience"
            />
            <div class="line"></div>
          </div>
          <div className="form--inputs">
            <label>Company Name</label>
            <input type="text" name="resume-company" placeholder="Microsoft" />
            <div class="line"></div>
          </div>
          <div className="form--inputs">
            <label>Job Title</label>
            <input
              type="text"
              name="resume-job-title"
              placeholder="Marketing"
            />
            <div class="line"></div>
          </div>
          <div className="form--inputs">
            <label>Job Location</label>
            <input
              type="text"
              name="resume-job-location"
              placeholder="San Diego, CA"
            />
            <div class="line"></div>
          </div>
          <div className="form--inputs">
            <label>Start Date</label>
            <input type="text" name="resume-job-start" placeholder="May 2015" />
            <div class="line"></div>
          </div>
          <div className="form--inputs">
            <label>End Date</label>
            <input
              type="text"
              name="resume-job-end"
              placeholder="May 2017 / Present /Etc."
            />
            <div class="line"></div>
          </div>
          <div className="form--inputs">
            <label>Job Responsibilities</label>
            <input
              type="text"
              name="resume-responsibilites"
              placeholder="Did XYZ at company"
            />
            <div class="line"></div>
          </div>
        </fieldset>
      </form>
    );
  }
}
