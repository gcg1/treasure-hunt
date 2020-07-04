import React from "react";
// import { Likes } from "./Likes";

export class Footer extends React.Component {
  render() {
    const supportMessageTemplate =
      "Hi,%20I'm%20having%20some%20trouble%20with%20the%20treasure%20hunt...";

    return (
      <footer>
        {/* <Likes /> */}
        <div className="attribution">
          <span>
            Made by{" "}
            <a
              href="https://www.friendsofmorleypark.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Friends of Morley Park
            </a>
          </span>
        </div>
        <a
          className="support-link hidden-on-desktop"
          href={`sms:07851598021&body=${supportMessageTemplate}`}
          target="_blank"
        >
          Support
        </a>
        <a
          className="support-link hidden-on-mobile"
          href="mailto:georgefbcunliffe+treasurehunt@gmail.com?&subject=Treasure%20Hunt"
          target="_blank"
        >
          Support
        </a>
      </footer>
    );
  }
}
