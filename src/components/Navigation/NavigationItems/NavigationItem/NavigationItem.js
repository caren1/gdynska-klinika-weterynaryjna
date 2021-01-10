import React from "react";
import { navigate } from 'gatsby'
import scrollTo from "gatsby-plugin-smoothscroll";

import navigationItemStyles from "./NavigationItem.module.scss";

const NavigationItem = (props) => {
  return (
    <li className={navigationItemStyles.NavigationItem}>
      <a
        // to={`/#${props.section}`}
        onClick={(event) => {
          event.preventDefault()
          // navigate(
          //   `/#${props.section}`,
          //   { replace: true }
          // )
          window.history.back();
          setTimeout(() => {
            scrollTo(`#${props.section}`);
          }, 1000);
        }}
      >
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
