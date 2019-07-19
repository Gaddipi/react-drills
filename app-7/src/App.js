import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List.Component";
import Newtask from "./NewTask.Component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };

    this.handleAddtask = this.handleAddtask.bind(this);
  }

  handleAddtask(task) {
    this.setState({ list: [...this.list.state, task] });
  }
  render() {
    return (
      <div className="App">
        <h1> My ToDo List</h1>
        <Newtask add={this.handleAddtask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
