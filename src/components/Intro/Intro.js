import React from "react";
import introStyles from "./Intro.module.scss";

import Contact from "../Contact/Contact";
import Cta from "../Cta/Cta";
import warningIcon from "../../assets/icons/warning-icon.svg"

const Intro = () => {
  return (
    <section id="intro" className={introStyles.Intro}>
      <div className={introStyles.IntroWrapper}>
        <Contact />
        <Cta />
      </div>
      <div className={introStyles.Tooltip}>
        <div className={introStyles.TooltipIconWrapper}>
          <img src={warningIcon} alt="warning-icon"/>
        </div>
        <span className={introStyles.TooltipText}><p>Witamy! To my, Gdyńska Klinika Weterynaryjna. Dokonaliśmy zmiany nazwy, ale wciąż oferujemy te same usługi i jesteśmy otwarci w tej samej lokalizacji. Zapraszamy na Kielecką!</p></span>
      </div>
    </section>
  );
};

export default Intro;
