import React from "react";

export default class AwardsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem(`award${this.props.id}`)) || {
      awardName: "",
      awardDate: "",
      awarder: "",
      summary: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  componentDidUpdate() {
    localStorage.setItem(`award${this.props.id}`, JSON.stringify(this.state));
  }
  render() {
    return (
      <form>
        <fieldset className="resume--form">
          <div className="form--inputs">
            <label>Award Name</label>
            <input
              type="text"
              name="awardName"
              placeholder="Salesman of the Year"
              onChange={(e) => this.handleChange(e)}
              value={this.state.awardName}
            />
            <div className="line"></div>
          </div>
          <div className="line"></div>
          <div className="form--inputs">
            <label>Award Date</label>
            <input
              type="text"
              name="awardDate"
              placeholder="May 2015"
              onChange={(e) => this.handleChange(e)}
              value={this.state.awardDate}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Awarder</label>
            <input
              type="text"
              name="awarder"
              placeholder="Dunder Mifflin"
              onChange={(e) => this.handleChange(e)}
              value={this.state.awarder}
            />
            <div className="line"></div>
          </div>
          <div className="form--inputs">
            <label>Summary</label>
            <input
              type="text"
              name="summary"
              placeholder="Recognized for being the best salesman"
              onChange={(e) => this.handleChange(e)}
              value={this.state.summary}
            />
            <div className="line"></div>
          </div>
          <div className="thick-line"></div>
        </fieldset>
      </form>
    );
  }
}
