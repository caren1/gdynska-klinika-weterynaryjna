import React from "react";
import introStyles from "./Intro.module.scss";

import Contact from "../Contact/Contact";
import Cta from "../Cta/Cta";

const Intro = () => {
  return (
    <section id="intro" className={introStyles.Intro}>
      <div className={introStyles.IntroWrapper}>
        <Contact />
        <Cta />
      </div>
    </section>
  );
};

export default Intro;
