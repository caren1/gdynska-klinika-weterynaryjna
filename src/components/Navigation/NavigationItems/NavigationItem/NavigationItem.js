import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

import navigationItemStyles from "./NavigationItem.module.scss";

const NavigationItem = (props) => {
  // let isSecondary = false;
  const [isSecondary, setIsSecondary] = useState(false);
  let linkItem = null;

  useEffect(() => {
    if (
      window.location.href.includes("/oferta") ||
      window.location.href.includes("-") ||
      window.location.href.includes("/lekarze") ||
      window.location.href.includes("/tech") ||
      window.location.href.includes("/admin")
    ) {
      setIsSecondary(true);
    }
  }, []);

  if (isSecondary) {
    linkItem = (
      <a
      tabIndex="1"
        onClick={(event) => {
          event.preventDefault();
          navigate("/");
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
      tabIndex="1"
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
