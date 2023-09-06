import React from "react";

export default class SkillSection extends React.Component {
  render() {
    const workData = this.props.data;
    const title = JSON.parse(localStorage.getItem("skillsSet"));
    return (
      <div className="work--wrapper">
        <h2>{title.skillHeading}</h2>
        <hr></hr>
        {Object.keys(workData).map((job) => {
          return (
            <div key={job} className="work--details">
              <div className="skill--section">
                <p>{workData[job].skillName}:</p>
                <p className="skill--details">{workData[job].skillDetails}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
