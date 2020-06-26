import React from "react";
import { Likes } from "./Likes";

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Likes />
        <span>
          by{" "}
          <a href="https://www.friendsofmorleypark.org.uk/">
            Friends of Morley Park
          </a>
        </span>
      </footer>
    );
  }
}
