import React from "react";

export default class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: {},
    };
  }
  render() {
    const resumeData = this.props.data;

    if (!resumeData || Object.keys(resumeData).length === 0) {
      console.log("No resume data");
      return null;
    }
    return (
      <div>
        <div className="resume--background">
          {Object.keys(resumeData).map((key) => {
            const data = resumeData[key];

            return (
              <div key={key} className="data-section">
                <h3>{key}</h3>

                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
