import React from "react";

export default class WorkSection extends React.Component {
  render() {
    const workData = this.props.data;
    return (
      <div className="work--wrapper">
        <h2>Work Experience</h2>
        {Object.keys(workData).map((job) => {
          return (
            <div key={job} className="work--details">
              {" "}
              <div className="resume--section--1">
                <h3>{workData[job].companyName}</h3>
                <p>{workData[job].jobLocation}</p>
              </div>
              <div className="resume--section--1">
                <p>{workData[job].jobTitle}</p>
                <p>
                  {workData[job].startDate} - {workData[job].endDate}
                </p>
              </div>
              <p>•{workData[job].jobResponsibilites}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
