import React from "react";

export const Ribbon = (props) => {
  return (
    <div className="ribbon">
      <button onClick={props.toggleAlert}>We have a winner!</button>
    </div>
  );
};
