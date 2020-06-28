import React from "react";
import { Likes } from "./Likes";

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Likes />
        <span>
          by{" "}
          <a
            href="https://www.friendsofmorleypark.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Friends of Morley Park
          </a>
        </span>
      </footer>
    );
  }
}
