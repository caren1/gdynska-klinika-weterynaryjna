import React from "react";
import buttonStyles from "./Button.module.scss";

const Button = ({ type }) => {
  let button = null;

  switch (type) {
    case "Call":
      button = (
        <a href="tel:+48508072234" className={buttonStyles.Call}>
          Zadzwoń
        </a>
      );
      break;

    case "NavCall":
      button = (
        <a href="tel:+48508072234" className={buttonStyles.NavCall}>
          Zadzwoń
        </a>
      );
      break;

    case "Route":
      button = (
        <a
        target="_blank"
        rel="noreferrer"
          href="https://www.google.com/maps/place/GKW.+Gdy%C5%84ska+Klinika+Weterynaryjna+lek.+wet.+Tomasza+Brzeskiego/@54.508372,18.5277082,17z/data=!3m1!4b1!4m5!3m4!1s0x46fda72d21c3e51f:0xe33b5f47e2bbd6ee!8m2!3d54.508372!4d18.5298969"
          className={buttonStyles.Route}
        >
          Trasa
        </a>
      );
      break;

    default:
      break;
  }

  return button;
};

export default Button;
