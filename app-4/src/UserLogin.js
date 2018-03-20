import React, { Component } from "react";

class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      pass: ""
    };
    this.passAlert = this.passAlert.bind(this);
  }
  passAlert() {
    alert(`Username:${this.state.user} Password:${this.state.pass}`);
  }
  render() {
    return (
      <div>
        <h3>UserName</h3>
        <input onChange={e => this.setState({ user: e.target.value })} />
        <h3>Password</h3>
        <input onChange={e => this.setState({ pass: e.target.value })} />
        <button type="button" onClick={this.passAlert}>
          Click Me
        </button>
      </div>
    );
  }
}
export default UserLogin;
