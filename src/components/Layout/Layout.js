import React, { useState } from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";
import SEO from "../SEO/Seo";

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
      <SEO />
      <Toolbar
        detailed={props.detailed}
        drawerToggleClicked={onToggleSideDrawer}
      />
      <Sidedrawer open={showSideDrawer} closed={onCloseSideDrawer} />
      <main>{props.children}</main>
    </>
  );
};

export default React.memo(Layout);
