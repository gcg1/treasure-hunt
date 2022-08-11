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
          Answer 10 questions around Morley Park to unlock the treasure.
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
