import React from "react";
import ProfileSection from "../resume/profileSection";
import WorkSection from "../resume/workSection";
import EducationSection from "../resume/educationSection";
import SkillSection from "../resume/skillsSection";

export default class Generator extends React.Component {
  render() {
    const resumeData = this.props.data;

    if (!resumeData || Object.keys(resumeData).length === 0) {
      return null;
    }
    return (
      <div>
        <div className="resume--background">
          {Object.keys(resumeData).map((sectionKey) => {
            if (sectionKey === "profile") {
              return (
                <ProfileSection
                  data={resumeData[sectionKey]}
                  key={sectionKey}
                />
              );
            }
            if (sectionKey === "work") {
              return (
                <WorkSection data={resumeData[sectionKey]} key={sectionKey} />
              );
            }
            if (sectionKey === "education") {
              return (
                <EducationSection
                  data={resumeData[sectionKey]}
                  key={sectionKey}
                />
              );
            }
            if (sectionKey === "skills") {
              return (
                <SkillSection data={resumeData[sectionKey]} key={sectionKey} />
              );
            }
            return null; // If you don't want to render anything for other sections
          })}
        </div>
      </div>
    );
  }
}
