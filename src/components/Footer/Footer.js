import React, { useState, useEffect, useRef } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import footerStyles from "./Footer.module.scss";

import Contact from "../Contact/Contact";
import Button from "../UI/Button/Button";

import footerLogo from "../../assets/logos/GKW-main-logo.svg";
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"

const Footer = () => {
  const [scrollState, setScrollState] = useState(false);

  const navRef = useRef();
  navRef.current = scrollState;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 500;
      if (navRef.current !== show) {
        setScrollState(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer id="footer" className={footerStyles.Footer}>
      <div className={footerStyles.ContactSection}>
        <div className={footerStyles.ImageWrapper}>
          <img src={footerLogo} alt="GKW-footer-logo" />
        </div>
        <Contact raw={true} horizontal={true} />
        <div className={footerStyles.IconWrapper}>
          <a href="https://www.facebook.com/SzpitalWeterynaryjny" target="_blank"><img className={footerStyles.Icon} src={facebook} alt="facebook-icon" /></a>
          <a href="https://www.instagram.com/szpitalweterynaryjny" target="_blank"><img className={footerStyles.Icon} src={instagram} alt="instagram-icon" /></a>
        </div>
      </div>
      <div className={footerStyles.InfoSection}>
        <a href="https://www.google.pl/maps/place/Gdy%C5%84ska+Klinika+Weterynaryjna+lek.+wet.+Tomasza+Brzeskiego/@54.5083595,18.5285451,17z/data=!4m5!3m4!1s0x46fda72d21c3e51f:0xe33b5f47e2bbd6ee!8m2!3d54.508372!4d18.5298969" target="_blank">
          <div id="map" className={footerStyles.MapContainer}></div>
        </a>
        <h1>
          Zapraszamy do naszego szpitala, z troską zaopiekujemy się Państwa
          pupilami.
        </h1>
        <p>
          Zwierzętom przebywającym w naszym szpitalu zapewniamy całodobową
          opiekę.Zapraszamy do kontaktu telefonicznego lub mailowego oraz
          zapoznania się z naszą pełną ofertą.
        </p>
        <div className={footerStyles.Buttons}>
          <Button type="Call" secondary={true} />
          <Button type="Route" secondary={true} />
        </div>
      </div>
      <div className={footerStyles.BackToTop} style={ scrollState ? {display: 'block'} : {display: 'none'}} onClick={(event) => {
        event.preventDefault()
        scrollTo(`#intro`)}}>
        <i className={footerStyles.ArrowTop} ></i>
      </div>
    </footer>
  );
};

export default Footer;
