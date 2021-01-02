import React from "react";
import toolbarStyles from "./Toolbar.module.scss";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  return (
    <header id="header" className={toolbarStyles.Toolbar}>
      <Logo />

      <DrawerToggle clicked={props.drawerToggleClicked} />

      <nav className={toolbarStyles.DesktopOnly}>
        <NavigationItems />
        <hr />
      </nav>
    </header>
  );
};

export default Toolbar;
