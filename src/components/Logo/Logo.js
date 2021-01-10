import React, { useState, useEffect } from "react";
import logoStyles from "./Logo.module.scss";
import mainLogo from "../../assets/logos/GKW-main-vertical-logo.svg";
import secondaryLogo from "../../assets/logos/GKW-horizontal-greypaw-whitecross.svg";
import mobileLogo from "../../assets/logos/GKW-main-horizontal.svg";

import scrollTo from "gatsby-plugin-smoothscroll";

const Logo = (props) => {
  const [isDesktop, setDesktop] = useState(true);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 845);
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  let logoViewport = null;

  if (isDesktop) {
    logoViewport = mainLogo;
  } else {
    logoViewport = mobileLogo;
  }

  if (props.secondary) {
    logoViewport = secondaryLogo;
  } else if (props.horizontal) {
    logoViewport = mobileLogo;
  }

  return (
    <div
      className={logoStyles.Logo}
      onClick={() => {
        scrollTo(`#intro`);
      }}
    >
      <img src={logoViewport} alt="GKW - Gdyńska Klinika weterynarii logo" />
    </div>
  );
};

export default Logo;
