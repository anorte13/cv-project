import React from "react";

export default class Profile extends React.Component {
  render() {
    return (
      <form>
        <fieldset className="resume--form">
          <h1 className="profile--title">YOUR PERSONAL INFO</h1>
          <div className="form--inputs">
            <label>Full Name</label>
            <input type="text" name="resume-name" placeholder="Micheal Scott" />
            <div class="line"></div>
          </div>
          <div className="form--inputs">
            <label>Email</label>
            <input
              type="text"
              name="resume-email"
              placeholder="michealscott@gmail.com"
            />
            <div class="line"></div>
          </div>
          <div className="form--inputs">
            <label>Phone Number</label>
            <input
              type="text"
              name="resume-number"
              placeholder="(555) 123-4567"
            />
            <div class="line"></div>
          </div>
          <div className="form--inputs">
            <label>Location</label>
            <input
              type="text"
              name="resume-location"
              placeholder="Scranton, PA"
            />
            <div class="line"></div>
          </div>
          <div className="form--inputs">
            <label>Link</label>
            <input
              type="text"
              name="resume-link"
              placeholder="michealscoolwebsite.com"
            />
            <div class="line"></div>
          </div>
        </fieldset>
      </form>
    );
  }
}
