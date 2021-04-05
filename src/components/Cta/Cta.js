import React from "react";
import ctaStyles from "./Cta.module.scss";

import Button from "../UI/Button/Button";

const Cta = () => {
  return (
    <div className={ctaStyles.Cta}>
      <div className={ctaStyles.CtaInfo}>
        <h1 className={ctaStyles.Heading}>
          Nowoczesny szpital weterynaryjny w Gdyni
        </h1>
        <p className={ctaStyles.Paragraph}>
          Specjalistyczny personel szpitala oferuje pomoc w wielu dziedzinach,
          szerokie spektrum nowoczesnych badań diagnostycznych oraz opiekę
          ambulatoryjną i szpitalną
        </p>
      </div>

      <div className={ctaStyles.Buttons}>
        <Button type="Call" />
        <Button type="Route" />
      </div>
    </div>
  );
};

export default Cta;
