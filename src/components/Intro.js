import React from "react";

export const Intro = () => {
  return (
    <div className="intro">
      <span>FOMP's</span>
      <h1>Treasure Hunt</h1>
      <p>
        Answer 10 riddles around Morley Park to find the treasure. Check{" "}
        <button>your map</button> for clues.
      </p>
      <button>Start</button>
    </div>
  );
};
