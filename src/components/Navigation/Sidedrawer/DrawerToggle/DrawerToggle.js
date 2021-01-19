import React from "react";

import drawerStyles from "./DrawerToggle.module.scss";

const DrawerToggle = (props) => {
  let inlineStyle = props.secondary ? { backgroundColor: "white" } : null;

  const classes = [drawerStyles.DrawerToggle];

  return (
    <div
      className={drawerStyles.DrawerToggle}
      onClick={props.clicked}
      role="menu"
      tabIndex="1"
    >
      <div className={drawerStyles.SingleLine} style={inlineStyle}></div>
      <div className={drawerStyles.SingleLine} style={inlineStyle}></div>
      <div className={drawerStyles.SingleLine} style={inlineStyle}></div>
    </div>
  );
};

export default React.memo(DrawerToggle);
