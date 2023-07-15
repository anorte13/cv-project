import "./styles.css";
import React from "react";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
