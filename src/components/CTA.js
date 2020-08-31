import React from "react";
import { addEmailToGoogleSheet } from "../GoogleSheet";
import { numContestants } from "../GoogleSheet";

import Mixpanel from "mixpanel";
const mixpanel = Mixpanel.init("0116233a22eec871253819800d0214a7");

export class CTA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: "",
      permission_to_contact: "yes",
      submitted: false,
      contestants: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const checkContestants = async () => {
      const contestants = await numContestants();
      this.setState({ contestants: contestants - 1 });
    };
    checkContestants();
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleCheckboxChange(e) {
    this.state.permission_to_contact === "yes"
      ? this.setState({ permission_to_contact: "no" })
      : this.setState({ permission_to_contact: "yes" });
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (this.state.email.includes("@")) {
      try {
        const addEmail = await addEmailToGoogleSheet(
          this.state.email,
          this.state.permission_to_contact
        );
        this.setState({ submitted: true });
        mixpanel.track("Prize draw entry", {
          email: this.state.email,
          permission_to_contact: this.state.permission_to_contact,
        });
      } catch (err) {
        this.setState({
          error:
            "There was a problem submitting your email adress. Check you're connected to the internet and try again.",
        });
      }
    } else {
      this.setState({ error: "Please enter an email address" });
    }
  }

  render() {
    return (
      <div>
        {this.state.submitted === false && (
          <form className="CTA" onSubmit={this.handleSubmit}>
            <h2>Congratulations</h2>
            <p>You did it!</p>
            {/* <p>
              Enter into a draw for the grand prize.{" "}
              {typeof this.state.contestants === "number" &&
                `There are ${this.state.contestants - 1} contestants so far!`}
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
              value="Enter prize draw"
            />

            <span className="error-message">{this.state.error}</span>

            <div className="checkbox-wrapper">
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
            <p>
              The lucky winner will be randomly selected on Monday 31st August.
              Good luck!
            </p>
          </div>
        )}
      </div>
    );
  }
}
