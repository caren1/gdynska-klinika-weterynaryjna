import React from "react";
import { navigate } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

import navigationItemStyles from "./NavigationItem.module.scss";

const NavigationItem = (props) => {
  let isSecondary = false;
  let linkItem = null;

  if ( window.location.href.includes("/oferta") || window.location.href.includes("-")) {
    isSecondary = true;
  }

  if (isSecondary) {
    linkItem = (
      <a
        onClick={(event) => {
          event.preventDefault();
          window.history.back();
          setTimeout(() => {
            scrollTo(`#${props.section}`);
          }, 500);
        }}
      >
        {props.children}
      </a>
    );
  } else {
    linkItem = (
      <a
        onClick={(event) => {
          event.preventDefault();
          scrollTo(`#${props.section}`);
        }}
      >
        {props.children}
      </a>
    );
  }

  return <li className={navigationItemStyles.NavigationItem}>{linkItem}</li>;
};

export default NavigationItem;
