import React from "react";

export const Intro = () => {
  return (
    <div className="Intro">
      <span>FOMP's</span>
      <h1>Treasure Hunt</h1>
      <p className="instructions">
        Answer 10 riddles around Morley Park to find the treasure. Check{" "}
        <button className="inline-button">your map</button> for clues.
      </p>
      <button className="big-button outline-button">Start</button>
    </div>
  );
};
