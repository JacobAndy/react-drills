import React, { Component } from "react";

class FilterNames extends Component {
  constructor() {
    super();
    this.state = {
      names: ["Jacob", "Jin", "Joe", "Aaron"],
      userInput: ""
    };
  }
  render() {
    var newArr = this.state.names
      .filter(e => e.includes(this.state.userInput))
      .map(e => {
        return <h2>{e}</h2>;
      });

    return (
      <div>
        <input onChange={e => this.setState({ userInput: e.target.value })} />
        {newArr}
      </div>
    );
  }
}
export default FilterNames;
