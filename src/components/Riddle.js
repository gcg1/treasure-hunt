import React from "react";

export class Riddle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", answer: this.props.options[0] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (this.state.value.length === 0) {
      this.props.incrementTotalAnswers();
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
      <div key={option} onChange={this.handleChange}>
        <input
          required
          type="radio"
          id={option}
          name={this.props.id}
          value={option}
        />
        <label htmlFor={option}>{option}</label>
      </div>
    ));

    return (
      <div>
        <div className="vertical-line"></div>
        <p className="riddle-question">
          {this.props.questionNumber + 1}. {this.props.question}
        </p>
        {optionsList}
      </div>
    );
  }
}
