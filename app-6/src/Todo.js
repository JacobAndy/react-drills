import React, { Component } from "react";
function Todo(props) {
  var arr = props.userT.map((elem, indx) => {
    return <li key={indx}>{elem}</li>;
  });
  return <ol>{arr}</ol>;
}
export default Todo;
