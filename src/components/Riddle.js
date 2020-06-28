import React from "react";

export class Riddle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", answer: this.props.options[0] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
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
      <option key={option} value={option}>
        {option}
      </option>
    ));

    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.question}</label>
        <select
          onChange={this.handleChange}
          name={this.props.id}
          id={this.props.id}
          size={this.props.options.length}
          required
        >
          <option hidden disabled value></option>
          {optionsList}
        </select>
      </div>
    );
  }
}
