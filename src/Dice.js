import React, { Component } from "react";
import "./Dice.css";

class Dice extends Component {
  static defaultProps = {
    face: 1,
  };
  render() {
    const { face } = this.props;
    const numToText = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
    };
    return (
      <div>
        <i
          className={`Dice-icon fa-solid fa-dice-${
            numToText[`${face}`]
          } fa-2xl`}
        ></i>
      </div>
    );
  }
}

export default Dice;
