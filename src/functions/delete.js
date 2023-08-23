const deleteWork = () => {
  const work = [...this.state.workExperiences];
  const id = work.length - 1;
  const deletedWork = work.pop();

  if (deletedWork && deletedWork.id) {
    const storedData = JSON.parse(localStorage.getItem("workExperience")) || {
      workExperiences: [],
    };

    const updatedWorkExperiences = storedData.workExperiences.filter(
      (workExp) => workExp.id !== deletedWork.id
    );

    localStorage.setItem(
      "workExperience",
      JSON.stringify({ workExperiences: updatedWorkExperiences })
    );
    localStorage.removeItem(`workDetails${id}`);
  }

  this.setState({
    workExperiences: work,
  });
};
