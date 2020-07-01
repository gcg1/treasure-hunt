import React from "react";
import { addEmailToGoogleSheet } from "../GoogleSheet";

export class CTA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      // permission_to_contact: "yes",
      submitted: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  // handleCheckboxChange(e) {
  //   this.state.permission_to_contact === "yes"
  //     ? this.setState({ permission_to_contact: "no" })
  //     : this.setState({ permission_to_contact: "yes" });
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    addEmailToGoogleSheet(this.state.email);
  }

  render() {
    return (
      <div>
        {this.state.submitted === false && (
          <form className="CTA" onSubmit={this.handleSubmit}>
            <h2>Congratulations!</h2>
            <p>
              Enter your email below to hear about more activities + important
              news from{" "}
              <a href="https://www.friendsofmorleypark.org.uk/" target="_blank">
                FOMP
              </a>
              .
            </p>
            <input
              type="email"
              placeholder="jack@sparrow.com"
              value={this.state.email}
              onChange={this.handleEmailChange}
              required
            ></input>

            <input
              className="big-button fill-button"
              type="submit"
              value="Submit"
            />

            {/* <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="permission-to-contact"
                name="permission-to-contact"
                value="true"
                defaultChecked
                onChange={this.handleCheckboxChange}
              />
              <label htmlFor="permission-to-contact">
                Tell me about park news.
              </label>
            </div> */}
          </form>
        )}
        {this.state.submitted === true && (
          <div>
            <h2>Thank you</h2>
            <p>See you on the next park adventure!</p>
          </div>
        )}
      </div>
    );
  }
}
