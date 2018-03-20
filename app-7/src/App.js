import React, { Component } from "react";
import "./App.css";
import NewTask from "./NewTask";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      userTasks: []
    };
    this.addTasks = this.addTasks.bind(this);
  }
  addTasks() {
    let { userInput, userTasks } = this.state;
    userTasks.push(userInput);
    this.setState({ userInput: userInput, userTasks: userTasks });
  }

  render() {
    return (
      <div>
        <h1>My To Do List</h1>
        <input onChange={e => this.setState({ userInput: e.target.value })} />
        <NewTask Tasks={this.state.userTasks} addTasks={this.addTasks} />
      </div>
    );
  }
}

export default App;
