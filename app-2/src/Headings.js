import React, { Component } from "react";

class Headings extends Component {
  constructor() {
    super();
    this.state = { arr: ["Jacob", "Joe", "Jin", "Aaron"] };
  }
  render() {
    var newArr = this.state.arr.map((elem, indx) => {
      return <h2 key={indx}>{elem}</h2>;
    });
    return <div>{newArr}</div>;
  }
}
export default Headings;
