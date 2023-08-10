import React from "react";

export default class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [],
    };
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.createSkill = this.createSkill.bind(this);
  }

  createSkill(e) {
    const { skills } = this.state;
    this.setState({
      skills: [...skills, ""],
    });
  }
  handleSkillChange = (index, event) => {
    const { skills } = this.state;
    const updatedSkills = [...skills];
    updatedSkills[index] = event.target.value;
    this.setState({
      skills: updatedSkills,
    });
  };
  render() {
    const { skills } = this.state;

    return (
      <form>
        <fieldset className="resume--form">
          <h1 className="profile--title">YOUR SKILLS</h1>
          <div className="form--inputs">
            <label>Section Heading</label>
            <input
              type="text"
              name="resume-section-name"
              placeholder="Skills"
            />
            <div className="line"></div>
          </div>
          <div className="line"></div>
          <div className="form--inputs">
            <label>Skill Name</label>
            <input
              type="text"
              name="resume-skill-name"
              placeholder="Programming Languages"
            />
            <div className="line"></div>
          </div>
          <div className="line"></div>
          <div className="form--inputs">
            <label>Skill Details</label>
            <div>
              {skills.map((inputValue, index) => (
                <input>
                  key={index}
                  value={inputValue}
                  onChange={(event) => this.handleSkillChange(index, event)}
                </input>
              ))}
              <button onClick={this.createSkill}>+</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}
