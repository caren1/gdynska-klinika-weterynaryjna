import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import navigationItemStyles from "./NavigationItem.module.scss";

const NavigationItem = (props) => {
  return (
    <li className={navigationItemStyles.NavigationItem}>
      <a
        onClick={(event) => {
          event.preventDefault();
          scrollTo(`#${props.section}`);
        }}
      >
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
