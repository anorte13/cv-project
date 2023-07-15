import React from "react";

export default class Resume extends React.Component {
  render() {
    return (
      <main>
        <div className="resume--title">
          <span>CV</span>
          <p>Maker</p>
        </div>
        <div className="resume--wrapper">
          <div className="resume--sections">
            This is where the sections of our resume go
          </div>
          <div className="resume--generator">
            This is where a preview of the resume will go
          </div>
        </div>
      </main>
    );
  }
}
