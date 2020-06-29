import React from "react";
import fanfare from "../assets/sounds/fanfare.mp3";
import locked from "../assets/sounds/locked.mp3";
import ohdear from "../assets/sounds/ohdear.mp3";

export const Audio = () => {
  return (
    <div>
      <audio className="fanfare">
        <source className="src_mp3" type="audio/mp3" src={fanfare} />
      </audio>

      <audio className="locked">
        <source className="src_mp3" type="audio/mp3" src={locked} />
      </audio>

      <audio className="ohdear">
        <source className="src_mp3" type="audio/mp3" src={ohdear} />
      </audio>
    </div>
  );
};
