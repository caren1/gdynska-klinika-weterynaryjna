import React from "react";
import ctaStyles from './Cta.module.scss'

import Button from "../UI/Button/Button";

const Cta = () => {
  return (
    <div className={ctaStyles.Cta}>
      <h1 className={ctaStyles.Heading}>
        Nowoczesna klinika weterynaryjna w Gdyni
      </h1>
      <p className={ctaStyles.Paragraph}>
        Specjalistyczny personel kliniki oferuje pomoc w wielu dziedzinach,
        szerokie spektrum nowoczesnych badań diagnostycznych oraz opiekę
        ambulatoryjną i szpitalną
      </p>
      <div className={ctaStyles.Buttons}>
        <Button type="Call" />
        <Button type="Route" />
      </div>
    </div>
  );
};

export default Cta;
