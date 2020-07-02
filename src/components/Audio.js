import React from "react";
import locked from "../assets/sounds/locked.mp3";
import ohdear from "../assets/sounds/ohdear.mp3";
import creak from "../assets/sounds/creak.mp3";
import fanfare from "../assets/sounds/fanfare.mp3";

export const Audio = () => {
  return (
    <div>
      <audio preload="auto" className="locked">
        <source className="src_mp3" type="audio/mp3" src={locked} />
      </audio>

      <audio preload="auto" className="ohdear">
        <source className="src_mp3" type="audio/mp3" src={ohdear} />
      </audio>

      <audio preload="auto" className="creak">
        <source className="src_mp3" type="audio/mp3" src={creak} />
      </audio>

      <audio preload="auto" className="fanfare">
        <source className="src_mp3" type="audio/mp3" src={fanfare} />
      </audio>
    </div>
  );
};
