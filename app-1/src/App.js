import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    };
  }
  changeImput(e) {
    this.setState({ userInput: e });
  }
  render() {
    return (
      <div className="App">
        <h4>{this.state.userInput}</h4>
        <input onChange={e => this.changeImput(e.target.value)} />
      </div>
    );
  }
}

export default App;
