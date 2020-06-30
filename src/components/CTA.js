import React from "react";

export const CTA = () => {
  return (
    <form className="CTA">
      <h2>Congratulations!</h2>
      <p>Enter an email address to claim your treasure.</p>
      <input type="email" placeholder="jack@sparrow.com" required></input>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          id="permission-to-contact"
          name="permission-to-contact"
          value="true"
        />
        <label htmlFor="permission-to-contact">Tell me about park news.</label>
      </div>
      <input className="big-button fill-button" type="submit" />
    </form>
  );
};
