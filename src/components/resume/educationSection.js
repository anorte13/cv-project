import React from "react";

export default class EducationSection extends React.Component {
  render() {
    const workData = this.props.data;
    const title = JSON.parse(localStorage.getItem("educationExperience"));
    return (
      <div className="work--wrapper">
        <h2>{title.educationHeading}</h2>
        <hr></hr>
        {Object.keys(workData).map((job) => {
          return (
            <div
              style={{ marginBottom: "1.5rem" }}
              key={job}
              className="work--details"
            >
              <div className="resume--section--1">
                <h3>{workData[job].schoolName}</h3>
                <p>{workData[job].schoolLocation}</p>
              </div>
              <div className="resume--section--1">
                <div className="resume--section--2">
                  <p>{workData[job].degree}</p>
                  <p>{workData[job].major}</p>
                  <p style={{ fontStyle: "italic" }}>{workData[job].gpa}</p>
                </div>
                <p>
                  {workData[job].startDate} - {workData[job].endDate}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
