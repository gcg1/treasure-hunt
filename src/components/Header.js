import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <button className="inline-button print-button" onClick={window.print}>
        Print
      </button>
    );
  }
}
