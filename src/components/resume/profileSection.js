import React from "react";

export default class ProfileSection extends React.Component {
  render() {
    return (
      <div className="profile--wrapper">
        <h1 className="resume--name">{this.props.data.fullName}</h1>
        <div className="resume--profile">
          <p>{this.props.data.location}</p>
          <p>{this.props.data.email}</p>
          <p>{this.props.data.phone}</p>
          <p>{this.props.data.link}</p>
        </div>
      </div>
    );
  }
}
