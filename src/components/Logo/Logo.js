import React, { useState, useEffect } from "react";
import logoStyles from "./Logo.module.scss";
import mainLogo from "../../assets/logos/GKW-main-vertical-logo.svg";
import secondaryLogo from "../../assets/logos/GKW-horizontal-greypaw-whitecross.svg";
import mobileLogo from "../../assets/logos/GKW-main-horizontal.svg";

import scrollTo from "gatsby-plugin-smoothscroll";
import { navigate } from "gatsby";

const Logo = (props) => {
  const [isDesktop, setDesktop] = useState(true);
  const [isSecondary, setIsSecondary] = useState(false);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 845);
  };

  const updateLogo = () => {
    if (
      window.location.href.includes("/oferta") |
      window.location.href.includes("-") |
      window.location.href.includes("/lekarze") |
      window.location.href.includes("/tech") |
      window.location.href.includes("/admin")
    ) {
      setIsSecondary(true);
    } else {
      setIsSecondary(false);
    }
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    window.addEventListener("hashchange", updateLogo);
    return () => {
      window.removeEventListener("hashchange", updateLogo);
    };
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

  let logo = (
    <div
      className={logoStyles.Logo}
      onClick={() => {
        navigate("/");
        scrollTo(`#intro`);
      }}
    >
      <img src={logoViewport} alt="GSWet - Gdyński Szpital Weterynaryjny logo" />
    </div>
  );

  if (isSecondary) {
    logo = (
      <div
        tabIndex="1"
        className={logoStyles.Logo}
        onClick={(event) => {
          event.preventDefault();
          navigate("/");
          console.log("clicked");
          setTimeout(() => {
            scrollTo(`#intro`);
          }, 500);
        }}
      >
        <img src={logoViewport} alt="GSWet - Gdyński Szpital Weterynaryjny logo" />
      </div>
    );
  }

  return logo;
};

export default React.memo(Logo);
