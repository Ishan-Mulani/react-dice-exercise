import "./App.css";
import React, { Component } from "react";
import RollDie from "./RollDie";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDie numOfDice={2} />
      </div>
    );
  }
}

export default App;
