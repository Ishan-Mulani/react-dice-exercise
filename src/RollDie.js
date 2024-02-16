import React, { Component } from "react";
import Dice from "./Dice";
import "./RollDie.css";

function genRandomDieValArr(maxLength) {
  return Array(parseInt(maxLength))
    .fill(true)
    .map((die) => {
      return Math.floor(Math.random() * 6) + 1;
    });
}

class RollDie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRolling: false,
      valArr: genRandomDieValArr(this.props.numOfDice),
    };
    this.randomDiecount = this.randomDiecount.bind(this);
  }
  static defautProps = {
    numOfDice: 1,
  };

  randomDiecount(evt) {
    const { numOfDice } = this.props;
    const dieArrWithVal = genRandomDieValArr(numOfDice);
    this.setState({ isRolling: true });
    setTimeout(() => {
      this.setState({ valArr: dieArrWithVal });
      this.setState({ isRolling: false });
    }, 800);
  }

  render() {
    const { isRolling, valArr } = this.state;
    return (
      <div className="RollDie">
        <div className="RollDie-container">
          {valArr.map((val) => {
            return <Dice face={val} />;
          })}
        </div>
        <button
          className={`RollDie-button ${isRolling && "RollDie-rollingButton"}`}
          onClick={this.randomDiecount}
          disabled={this.state.isRolling}
        >
          {isRolling ? "Rolling..." : "Roll Die"}
        </button>
        ;
      </div>
    );
  }
}

export default RollDie;
