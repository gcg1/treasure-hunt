import React from "react";
import { addEmailToGoogleSheet } from "../GoogleSheet";
import { numContestants } from "../GoogleSheet";

export class CTA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.email.includes("@")) {
      this.setState({ submitted: true });
      addEmailToGoogleSheet(this.state.email, this.state.permission_to_contact);
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
            <p>
              Enter into a draw for the grand prize. There are only{" "}
              {this.state.contestants} contestants so far!
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
            </div>
          </form>
        )}
        {this.state.submitted === true && (
          <div>
            <h2>Thank you</h2>
            <p>
              The winner of the draw will be randomly selected on Friday 31st
              August. Good luck!
            </p>
          </div>
        )}
      </div>
    );
  }
}
