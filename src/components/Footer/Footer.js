import React, { useState, useEffect, useRef } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import footerStyles from "./Footer.module.scss";

import Contact from "../Contact/Contact";
import Button from "../UI/Button/Button";

import footerLogo from "../../assets/logos/GKW-main-logo.svg";

const Footer = () => {
  // useEffect(() => {
  //     const gdyniaGKW = { lat: 54.508515246668836, lng: 18.530186576907568 }
  //     const map = new google.maps.Map(document.getElementById('map'), {
  //         zoom: 3,
  //         center: gdyniaGKW
  //     })
  // }, [])
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
      </div>
      <div className={footerStyles.InfoSection}>
        <div id="map" className={footerStyles.MapContainer}></div>
        <h1>
          Zapraszamy do naszej kliniki, z troską zaopiekujemy się Państwa
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
      <div className={footerStyles.BackToTop} style={ scrollState ? {display: 'block'} : {display: 'none'}}>
        <i className={footerStyles.ArrowTop} onClick={(event) => {
        event.preventDefault()
        scrollTo(`#intro`)}}></i>
      </div>
    </footer>
  );
};

export default Footer;
