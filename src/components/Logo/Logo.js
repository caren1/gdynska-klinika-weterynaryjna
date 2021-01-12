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
  let isSecondary = false;

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

  // const module = typeof window !== (`undefined` && window.location.href.includes("/oferta")) ? isSecondary = true : isSecondary = false;

  if (
    window.location.href.includes("/oferta") ||
    window.location.href.includes("-")
  ) {
    isSecondary = true;
  } else {
    isSecondary = false;
  }

  let logo = (
    <div
      className={logoStyles.Logo}
      onClick={() => {
        scrollTo(`#intro`);
      }}
    >
      <img src={logoViewport} alt="GKW - Gdyńska Klinika, weterynarii logo" />
    </div>
  );

  if (!module) {
    logo = (
      <div
        className={logoStyles.Logo}
        onClick={(event) => {
          event.preventDefault();
          window.history.back();
          setTimeout(() => {
            scrollTo(`#intro`);
          }, 500);
        }}
      >
        <img src={logoViewport} alt="GKW - Gdyńska Klinika weterynarii logo" />
      </div>
    );
  }

  return logo;
};

export default React.memo(Logo);
