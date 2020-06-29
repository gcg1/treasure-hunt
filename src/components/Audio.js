import React from "react";
import fanfare from "../assets/sounds/fanfare.mp3";

export const Audio = () => {
  return (
    <audio className="fanfare">
      <source className="src_mp3" type="audio/mp3" src={fanfare} />
    </audio>
  );
};
