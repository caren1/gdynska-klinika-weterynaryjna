import React from "react";
import navigationItemStyles from "./NavigationItem.module.scss";

const NavigationItem = (props) => {
  return (
    <li className={navigationItemStyles.NavigationItem}>
      <a href="#">
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
