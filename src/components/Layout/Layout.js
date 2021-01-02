import React, { useState } from "react";

import layoutStyles from "./Layout.module.scss";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";

const Layout = (props) => {
  const [showSideDrawer, setSideDrawer] = useState(false);

  const onCloseSideDrawer = () => {
    setSideDrawer(false);
  };

  const onToggleSideDrawer = () => {
    setSideDrawer(!showSideDrawer);
  };

  return (
    <>
      <Toolbar drawerToggleClicked={onToggleSideDrawer} />
      <Sidedrawer open={showSideDrawer} closed={onCloseSideDrawer} />
      <main className={layoutStyles.Content}>{props.children}</main>
    </>
  );
};

export default Layout;
