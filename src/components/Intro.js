import React from "react";
import map from "../assets/map.svg";

export class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
        <span>FOMP's</span>
        <h1>Treasure Hunt</h1>
        <p className="instructions">
          Answer 10 riddles around Morley Park to unlock the treasure. Check{" "}
          <button className="inline-button" onClick={this.props.mapPrompt}>
            the map
          </button>{" "}
          for clues.
        </p>
        {/* <a href="#form" className="big-button outline-button">
          Start
        </a> */}
        <img className="inline-map" src={map} alt="Treasure Map" />
      </div>
    );
  }
}
