import React, { useState, useEffect } from "react";
import logoStyles from "./Logo.module.scss";
import mainLogo from "../../assets/logos/GKW-main-vertical-logo.svg";
import secondaryLogo from '../../assets/logos/GKW-main-horizontal.svg'

const Logo = (props) => {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 744);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 744);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  let logoViewport = null;
  if (isDesktop){
    logoViewport = mainLogo
  }else{
    logoViewport = secondaryLogo;
  }


  return (
    <div className={logoStyles.Logo}>
      <img src={logoViewport} alt="GKW - Gdyńska Klinika weterynarii" />
    </div>
  );
};

export default Logo;
