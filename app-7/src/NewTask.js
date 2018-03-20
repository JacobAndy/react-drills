import React, { Component } from "react";

class NewTask extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var newArr = this.props.Tasks.map((elem, indx) => {
      return <li key={indx}>{elem}</li>;
    });
    return (
      <div>
        <button type="button" onClick={this.props.addTasks}>
          Add to List
        </button>
        <ol>{newArr}</ol>
      </div>
    );
  }
}

export default NewTask;
