import React from "react";
import map from "../assets/map.svg";
import { Link } from "react-scroll";
import christmas from "../assets/christmas.svg";

export class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
        {/* <span>Morley Park</span> */}
        {/* <img className="christmas-subtitle" src={christmas} /> */}
        <br />
        <h1>Treasure Hunt</h1>
        <p className="instructions">
          Hunt for the 9 pictures placed around Morley Park and choose the
          matching bird, plant, animal, tree or item from the choices below.
          Re-arrange the first letters of each correct answer to make a new
          9-letter word. Clue: the word is a very popular one right now!
          {/* Check{" "}
          <button className="inline-button" onClick={this.props.mapPrompt}>
            your map
          </button>{" "}
          for clues! */}
        </p>
        <Link to="riddles" smooth={true} offset={80} duration={500}>
          <button className="big-button outline-button">Start</button>
        </Link>

        <img className="inline-map" src={map} alt="Treasure Map" />
      </div>
    );
  }
}
