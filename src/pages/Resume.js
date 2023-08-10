import React from "react";
import Profile from "../components/Profile";
import Education from "../components/Education";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Awards from "../components/Awards";

export default class Resume extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedComponent: "Profile",
    };
  }
  handleComponentClick = (componentName) => {
    this.setState({ selectedComponent: componentName });
  };
  renderComponent = () => {
    const { selectedComponent } = this.state;
    switch (selectedComponent) {
      case "Profile":
        return <Profile />;
      case "Education":
        return <Education />;
      case "Work":
        return <Work />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "Awards":
        return <Awards />;
      default:
        return null;
    }
  };
  render() {
    console.log("Rendered");
    return (
      <main>
        <div className="resume--title">
          <span>CV</span>
          <p>Maker</p>
        </div>
        <div className="resume--wrapper">
          <div className="resume--sections">
            <nav>
              <div className="resume--nav">
                <div
                  className="resume--item"
                  onClick={() => this.handleComponentClick("Profile")}
                >
                  Profile
                </div>
                <div
                  className="resume--item"
                  onClick={() => this.handleComponentClick("Work")}
                >
                  Work
                </div>
                <div
                  className="resume--item"
                  onClick={() => this.handleComponentClick("Education")}
                >
                  Education
                </div>
                <div
                  className="resume--item"
                  onClick={() => this.handleComponentClick("Skills")}
                >
                  Skills
                </div>
                <div
                  className="resume--item"
                  onClick={() => this.handleComponentClick("Projects")}
                >
                  Projects
                </div>
                <div
                  className="resume--item"
                  onClick={() => this.handleComponentClick("Awards")}
                >
                  Awards
                </div>
              </div>
            </nav>
            <button className="resume--make--button">MAKE</button>
          </div>
          <div className="resume--forms">{this.renderComponent()}</div>
          <div className="resume--generator"></div>
        </div>
      </main>
    );
  }
}
