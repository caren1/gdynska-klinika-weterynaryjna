import React from "react";
import contactStyles from "./Contact.module.scss";

import Zegar from "../../assets/icons/zegar.svg";
import Klinika from "../../assets/icons/klinika.svg";
import Telefon from "../../assets/icons/telefon.svg";
import Weterynarz from "../../assets/icons/weterynarz.svg";

const Contact = () => {
  return (
    <div className={contactStyles.Contact}>
      <h2 className={contactStyles.Heading}>
        Gdyńska Klinika Weterynaryjna <br />{" "}
        <span>let. wet. Tomasza Brzeskiego</span>
      </h2>
      <div className={contactStyles.ContactInfo}>
        <ul className={contactStyles.ContactList}>
          <li className={contactStyles.ListItem}>
            <div className={contactStyles.IconContainer}>
              <img src={Zegar} alt="zegar-icon" />
            </div>
            <div>
              <p className={contactStyles.ListParagraph}>
                Poniedziałek - Piątek : 7 - 22
              </p>
              <p className={contactStyles.ListParagraph}>Sobota : 8 - 22</p>
              <p className={contactStyles.ListParagraph}>Niedziela : 10 - 19</p>
            </div>
          </li>
          <li className={contactStyles.ListItem}>
            <div className={contactStyles.IconContainer}>
              <img src={Klinika} alt="klinika-icon" />
            </div>
            <div>
              <p className={contactStyles.ListParagraph}>Kielecka 22</p>
              <p className={contactStyles.ListParagraph}>81-303, Gdynia</p>
            </div>
          </li>
          <li className={contactStyles.ListItem}>
            <div className={contactStyles.IconContainer}>
              <img src={Telefon} alt="telefon-icon" />
            </div>
            <div>
              <p className={contactStyles.ListParagraph}>+48 58 620-55-55</p>
              <p className={contactStyles.ListParagraph}>+48 508-072-234</p>
            </div>
          </li>
          <li className={contactStyles.ListItem}>
            <div className={contactStyles.IconContainer}>
              <img src={Weterynarz} alt="weterynarz-icon" />
            </div>
            <div>
              <p className={contactStyles.ListParagraph}>klinikagdynia@wp.pl</p>
              <p className={contactStyles.ListParagraph}>gkwbiuro@gmail.com</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;