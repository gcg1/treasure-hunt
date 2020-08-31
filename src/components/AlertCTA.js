import React, { useState } from "react";
import { addEmailToGoogleSheet } from "../GoogleSheet";

import Mixpanel from "mixpanel";
const mixpanel = Mixpanel.init("0116233a22eec871253819800d0214a7");

export const AlertCTA = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      try {
        const addEmail = await addEmailToGoogleSheet(email, "yes");
        setSubmitted(true);
        mixpanel.track("Subscribe via alert", {
          email: email,
        });
      } catch (err) {
        setError(
          "There was a problem submitting your email adress. Check you're connected to the internet and try again."
        );
      }
    } else {
      setError("Please enter an email address");
    }
  };

  return (
    <div>
      {submitted === false && (
        <form className="CTA" onSubmit={handleSubmit}>
          {/* <h2>Title</h2> */}
          <p>
            Following 45 entries, a winner of the prize draw has now been
            selected! Leave your email below to be notified of future park
            events.
          </p>

          <input
            type="email"
            placeholder="jack@sparrow.com"
            value={email}
            onChange={handleEmailChange}
            required
          ></input>

          <input
            className="big-button fill-button"
            type="submit"
            value="Let me know"
          />

          <span className="error-message">{error}</span>
        </form>
      )}
      {submitted === true && (
        <div>
          <h2>Thank you</h2>
          <p>We'll keep you in the loop.</p>
        </div>
      )}
    </div>
  );
};
