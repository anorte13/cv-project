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

  handleClick() {
    const profile = JSON.parse(localStorage.getItem("profileData"));
    const workKeys = [];
    const educationKeys = [];
    const skillKeys = [];
    const projectKeys = [];
    const awardKeys = [];

    const combinedData = {
      profile: profile,
      work: [],
      education: [],
      skills: [],
      projects: [],
      awards: [],
    };

    for (let i = 0; i < 5; i++) {
      const workKey = `workDetails${i}`;
      const educationKey = `EdDetails${i}`;
      const skillKey = `skills${i}`;
      const projectKey = `project${i}`;
      const awardKey = `award${i}`;

      workKeys.push(workKey);
      educationKeys.push(educationKey);
      skillKeys.push(skillKey);
      projectKeys.push(projectKey);
      awardKeys.push(awardKey);
    }

    for (const key of workKeys) {
      const data = JSON.parse(localStorage.getItem(key));
      if (data) {
        combinedData.work.push(data);
      }
    }
    for (const key of educationKeys) {
      const data = JSON.parse(localStorage.getItem(key));
      if (data) {
        combinedData.education.push(data);
      }
    }
    for (const key of skillKeys) {
      const data = JSON.parse(localStorage.getItem(key));
      if (data) {
        combinedData.skills.push(data);
      }
    }
    for (const key of projectKeys) {
      const data = JSON.parse(localStorage.getItem(key));
      if (data) {
        combinedData.projects.push(data);
      }
    }
    for (const key of awardKeys) {
      const data = JSON.parse(localStorage.getItem(key));
      if (data) {
        combinedData.awards.push(data);
      }
    }
    console.log(combinedData);
  }
  render() {
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
            <button className="resume--make--button" onClick={this.handleClick}>
              MAKE
            </button>
          </div>
          <div className="resume--forms">{this.renderComponent()}</div>
          <div className="resume--generator"></div>
        </div>
      </main>
    );
  }
}
