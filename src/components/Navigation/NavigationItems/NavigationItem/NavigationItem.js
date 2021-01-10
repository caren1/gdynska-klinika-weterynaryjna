import React from "react";
import { Link } from "gatsby";

import navigationItemStyles from "./NavigationItem.module.scss";

const NavigationItem = (props) => {
  return (
    <li className={navigationItemStyles.NavigationItem}>
      <Link to={`/#${props.section}`}>{props.children}</Link>
    </li>
  );
};

export default NavigationItem;
