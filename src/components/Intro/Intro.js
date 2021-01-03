import React from "react";
import introStyles from "./Intro.module.scss";

import Contact from "../Contact/Contact";
import Cta from '../Cta/Cta'
import Button from "../UI/Button/Button";

const Intro = () => {
  return (
    <section id="intro" className={introStyles.Intro}>
      <div className={introStyles.IntroWrapper}>
        <Contact />
        <Cta />
      </div>

      {/* <div className={introStyles.Buttons}>
        <Button type="Call" />
        <Button type="Route" />
      </div> */}
    </section>
  );
};

export default Intro;
