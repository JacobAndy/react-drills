import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FilterNames from "./FilterNames";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterNames />
      </div>
    );
  }
}

export default App;
