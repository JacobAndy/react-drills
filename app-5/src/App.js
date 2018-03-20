import React, { Component } from "react";
import "./App.css";
import ImageFolder from "./ImageFolder";

class App extends Component {
  render() {
    return (
      <div>
        <ImageFolder photo="https://github.com/DevMountain/react-drills/blob/assets/5.png?raw=true" />
      </div>
    );
  }
}

export default App;
