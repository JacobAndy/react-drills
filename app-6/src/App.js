import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userTasks: [],
      userInput: ""
    };
    this.addItems = this.addItems.bind(this);
  }
  addItems() {
    let { userTasks, userInput } = this.state;
    userTasks.push(userInput);
    this.setState({
      userTasks: userTasks,
      userInput: userInput
    });
  }
  render() {
    console.log(this.state.userInput);
    return (
      <div>
        <input onChange={e => this.setState({ userInput: e.target.value })} />
        <button type="button" onClick={this.addItems}>
          Add Items
        </button>
        <Todo userT={this.state.userTasks} />
      </div>
    );
  }
}

export default App;
