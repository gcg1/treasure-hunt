import React from "react";
import chest from "../treasure-chest.svg";
import { riddles } from "../riddles";
import { Riddle } from "./Riddle";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    // if ("Some questions haven't been answered") {
    //   console.log("You haven't answered all the questions.");
    // } else
    if ("All answers" == "correct") {
      console.log("Transitioning to success...");
    } else {
      console.log("One or more answers are inccorect.");
    }
    e.preventDefault();
  }

  render() {
    const riddlesList = riddles.map((riddle) => (
      <Riddle
        key={riddle.id}
        id={riddle.id}
        question={riddle.question}
        options={riddle.options}
        onChange={this.handleChange}
      />
    ));

    return (
      <form onSubmit={this.handleSubmit}>
        {riddlesList}
        <img src={chest} alt="Treasure Chest" />
        <input type="submit" value="Check your answers" />
      </form>
    );
  }
}
