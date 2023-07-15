import React from "react";
import { Link } from "react-router-dom";
export default class Home extends React.Component {
  render() {
    return (
      <div className="home--body">
        <div className="main">
          <div className="home--title--body">
            <div className="home--title">
              <span>CV</span>
              <p>Maker</p>
            </div>
            <Link to="/resume">
              <button className="home--button">Make New CV</button>
            </Link>
          </div>
        </div>
        <div className="home--footer">
          <p>© Angel Ortega</p>
          <p></p>
        </div>
      </div>
    );
  }
}
