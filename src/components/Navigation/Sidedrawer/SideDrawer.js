import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import sideDrawerStyles from "./Sidedrawer.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  let attachedsideDrawerStyles = [sideDrawerStyles.SideDrawer, sideDrawerStyles.Close];
  if (props.open) {
    attachedsideDrawerStyles = [sideDrawerStyles.SideDrawer, sideDrawerStyles.Open];
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedsideDrawerStyles.join(" ")} onClick={props.closed}>
        <nav>
        <a href="#" className={sideDrawerStyles.Exit} />
        <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
