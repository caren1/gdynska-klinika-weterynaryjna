import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import sideDrawerStyles from "./Sidedrawer.module.scss";

const sideDrawer = (props) => {
  let attachedsideDrawerStyles = [
    sideDrawerStyles.SideDrawer,
    sideDrawerStyles.Close,
  ];
  if (props.open) {
    attachedsideDrawerStyles = [
      sideDrawerStyles.SideDrawer,
      sideDrawerStyles.Open,
    ];
  }
  return (
    <>
      <div
        className={attachedsideDrawerStyles.join(" ")}
        onClick={props.closed}
      >
        <nav>
          <a href="#" className={sideDrawerStyles.Exit} />
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;