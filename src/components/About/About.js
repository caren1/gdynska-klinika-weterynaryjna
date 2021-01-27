import React from "react";
import aboutStyles from "./About.module.scss";
import Info from "./Info/Info";
import Blog from "./Blog/Blog";

import klinikaImage from "../../assets/images/klinika-main-image.jpg";
import sectionCat from "../../assets/images/section-cat.png";

const About = () => {
  return (
    <section  className={aboutStyles.About}>
      <div className={aboutStyles.CrossVertical}></div>
      <div className={aboutStyles.CrossHorizontal}></div>
      <div className={aboutStyles.AboutContainer}>
        <Info
          image={klinikaImage}
          alt="klinika-główny-budynek"
          title="Klinika lek. wet. Tomasza Brzeskiego"
          paragraph="W naszej klinice leczenie opieramy na holistycznym podejściu do pacjentów. Sposób ten to podejście kompleksowe do zgłaszanych przez właściciela dolegliwości oraz zdiagnozowanych chorób. Leczymy wszystkie składowe wpływające na stan zdrowia i naprawę czynników wpływających na zaburzenia równowagi ciała i psychiki. Środowisko, dieta, predyspozycje dziedziczne - wszystko to wpływa na zdrowie naszych pupili. Dzięki temu, że pracujemy od 1991 roku mamy doświadczenie i wieloletni kontakt z naszymi pacjentami i ich opiekunami. Klinikę założył w 1991 roku lek. wet. Tomasz Brzeski, który pracuje do dnia dzisiejszego. Dysponujemy nowoczesnym sprzetem diagnostycznym co wyróżnia nas na tle innch klinik weterynaryjnych. Posiadamy najnowocześniejszy, weterynaryjny tomogram komputerowy do dyspozycji naszych pacjentów. Głównym atutem to kadra doświadczonych lekarzy i techników oraz szpital nadzorowany całodobowo."
        />

        <Blog
          image={sectionCat}
          alt="kot-sekcja"
          title="Poznaj historię naszych pacjentów"
          paragraph="Blog przeznaczony dla pasjonatów weterynarii."
          blogtext="zobacz blog"
          link="#"
        />
        <div id="kadra"  className={aboutStyles.CrossHorizontalOverCat}></div>
      </div>
    </section>
  );
};

export default About;
