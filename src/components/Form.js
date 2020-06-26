import React from "react";
import chest from "../treasure-chest.svg";
import { Riddle } from "./Riddle";

export class Form extends React.Component {
  render() {
    return (
      <form>
        <Riddle />
        <img src={chest} />
        <button type="submit">Check your answers</button>
      </form>
    );
  }
}
