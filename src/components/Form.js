import React from "react";
import chest from "../assets/treasure-chest.svg";
import { Riddle } from "./Riddle";
// import fanfare from "../assets/sounds/fanfare.mp3";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswers: 0,
      riddles: [
        {
          id: "latin",
          question: "What's the latin motto?",
          options: ["Serviam", "Meliora", "Emeritus", "Apricus"],
        },
        {
          id: "flowers",
          question: "What colour flower can't you find?",
          options: ["Red", "Yellow", "White", "Purple"],
        },
      ],
    };

    this.incrementCorrectAnswers = this.incrementCorrectAnswers.bind(this);
    this.decrementCorrectAnswers = this.decrementCorrectAnswers.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  incrementCorrectAnswers() {
    const updatedCorrectAnswers = this.state.correctAnswers + 1;
    this.setState({ correctAnswers: updatedCorrectAnswers });
  }

  decrementCorrectAnswers() {
    const updatedCorrectAnswers = this.state.correctAnswers - 1;
    this.setState({ correctAnswers: updatedCorrectAnswers });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.correctAnswers === this.state.riddles.length) {
      document.getElementsByClassName("fanfare")[0].play();
      // alert("Congratulations! You answered all questions correctly.");
    } else {
      alert("One or more answers are incorrect :(");
    }
  }

  render() {
    const riddlesList = this.state.riddles.map((riddle) => (
      <Riddle
        key={riddle.id}
        id={riddle.id}
        question={riddle.question}
        options={riddle.options}
        incrementCorrectAnswers={this.incrementCorrectAnswers}
        decrementCorrectAnswers={this.decrementCorrectAnswers}
      />
    ));

    return (
      <form id="form" onSubmit={this.handleSubmit}>
        {riddlesList}
        <div className="vertical-line"></div>
        <img src={chest} alt="Treasure Chest" />
        <input
          className="big-button fill-button"
          type="submit"
          value="Check your answers"
        />
      </form>
    );
  }
}
