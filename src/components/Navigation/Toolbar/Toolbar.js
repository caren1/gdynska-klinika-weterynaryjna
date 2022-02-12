import React, { useState, useEffect, useRef } from "react";
import toolbarStyles from "./Toolbar.module.scss";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle";
import Button from "../../UI/Button/Button";

const Toolbar = (props) => {

  const [scrollState, setScrollState] = useState(false);

  const navRef = useRef();
  navRef.current = scrollState;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 1;
      if (navRef.current !== show) {
        setScrollState(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let toolbar = null;

  if (scrollState || props.detailed) {
    toolbar = (
      <header id="header" className={toolbarStyles.SecondaryToolbar}>
        <Logo secondary={true}/>

        <DrawerToggle secondary={true} clicked={props.drawerToggleClicked}/>

        <nav className={toolbarStyles.DesktopOnlySecondary}>
          <ul>
            <li>
              Poniedziałek - Piątek : <strong>7 - 22</strong>
            </li>
            <li>
              Sobota : <strong>9 - 19</strong>
            </li>
            <li>
              Niedziela : <strong>10 - 18</strong>
            </li>
          </ul>
          <Button type="NavCall" />
        </nav>
      </header>
    );
  } else {
    toolbar = (
      <header id="header" className={toolbarStyles.Toolbar} >
        <Logo/>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <nav className={toolbarStyles.DesktopOnly}>
          <NavigationItems />
          <hr />
        </nav>
      </header>
    );
  }

  return toolbar;
};

export default React.memo(Toolbar);
