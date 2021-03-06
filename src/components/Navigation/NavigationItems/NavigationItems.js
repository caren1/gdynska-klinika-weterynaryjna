import React from "react";
import navigationItemsStyles from "./NavigationItems.module.scss";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  

  return (
    <ul className={navigationItemsStyles.NavigationItems}>
      <NavigationItem section="oferta">Oferta</NavigationItem>
      <NavigationItem section="klinika">Szpital</NavigationItem>
      <NavigationItem section="klinika">Blog</NavigationItem>
      <NavigationItem section="kadra">Kadra</NavigationItem>
      <NavigationItem section="partnerzy">Partnerzy</NavigationItem>
      <NavigationItem section="footer">Kontakt</NavigationItem>
    </ul>
  );
};

export default React.memo(NavigationItems);
