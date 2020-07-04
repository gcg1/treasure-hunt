import React from "react";
import { scroller } from "react-scroll";

export class Riddle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      answer: this.props.answer,
    };
    this.handleChange = this.handleChange.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(id) {
    scroller.scrollTo(id, {
      duration: 500,
      offset: 80,
      delay: 50,
      smooth: true,
    });
  }

  handleChange(e) {
    if (this.state.value.length === 0) {
      this.props.incrementTotalAnswers();
      if (this.props.questionsLeft > 0) {
        this.scrollTo(`riddle-${this.props.questionNumber + 1}`);
      } else {
        this.scrollTo("check");
      }
    }
    if (e.target.value === this.state.answer) {
      this.props.incrementCorrectAnswers();
    } else if (this.state.value === this.state.answer) {
      this.props.decrementCorrectAnswers();
    }
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const optionsList = this.props.options.map((option) => (
      <div
        key={this.props.questionNumber + "-" + option}
        onChange={this.handleChange}
      >
        <input
          required
          type="radio"
          id={`${this.props.questionNumber}-${option}`}
          name={this.props.id}
          value={option}
        />
        <label htmlFor={`${this.props.questionNumber}-${option}`}>
          {option}
        </label>
      </div>
    ));

    return (
      <div
        className={`riddle-wrapper ${
          this.state.value === "" ? "unanswered" : ""
        }`}
        id={`riddle-${this.props.questionNumber}`}
      >
        <div className="vertical-line"></div>
        <p className="riddle-question">
          {this.props.questionNumber}. {this.props.question}
        </p>
        <div className="options-container">{optionsList}</div>
      </div>
    );
  }
}
