import React from "react";
import navigationItemsStyles from "./NavigationItems.module.scss";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className={navigationItemsStyles.NavigationItems}>
      <NavigationItem>Oferta</NavigationItem>
      <NavigationItem>Klinika</NavigationItem>
      <NavigationItem>Blog</NavigationItem>
      <NavigationItem>Kadra</NavigationItem>
      <NavigationItem>Kontakt</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
