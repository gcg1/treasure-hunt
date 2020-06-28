import React from "react";

export class Riddle extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: "" };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(e) {
  //   this.setState({
  //     value: e.target.value,
  //   });
  // }

  // When you need to handle multiple controlled input elements,
  // you can add a name attribute to each element and let the
  // handler function choose what to do based on the value of
  // event.target.name.

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
          // value={this.state.value}
          // onChange={this.handleChange}
          name={this.props.id}
          id={this.props.id}
          // key={this.props.id}
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

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
