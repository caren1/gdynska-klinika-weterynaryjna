import React from "react";

import drawerStyles from "./DrawerToggle.module.scss";

const DrawerToggle = (props) => {
  let inlineStyle = props.secondary ? { backgroundColor: "white" } : null;

  return (
    <div className={drawerStyles.DrawerToggle} onClick={props.clicked} role="menu">
      <div style={inlineStyle}></div>
      <div style={inlineStyle}></div>
      <div style={inlineStyle}></div>
    </div>
  );
};

export default DrawerToggle;
