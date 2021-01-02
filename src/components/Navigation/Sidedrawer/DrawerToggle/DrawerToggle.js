import React from "react";

import drawerStyles from "./DrawerToggle.module.scss";

const DrawerToggle = (props) => (
  <div className={drawerStyles.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
