import React from "react";
import aboutStyles from "./About.module.scss";
import Info from "./Info/Info";
import Blog from "./Blog/Blog";

import klinikaImage from "../../assets/images/klinika-main-image.jpg";
import sectionCat from "../../assets/images/section-cat.png";

const About = () => {
  return (
    <section className={aboutStyles.About}>
      <div className={aboutStyles.CrossVertical}></div>
      <div className={aboutStyles.CrossHorizontal}></div>
      <div className={aboutStyles.AboutContainer}>
        <Info
          image={klinikaImage}
          alt="klinika-główny-budynek"
          title="Klinika"
          paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid beatae, provident ab atque praesentium deserunt? Iste velit quis suscipit quia!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid beatae, provident ab atque praesentium deserunt? Iste velit quis suscipit quia!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid beatae, provident ab atque praesentium deserunt? Iste velit quis suscipit quia!"
        />

        <Blog
          image={sectionCat}
          alt="kot-sekcja"
          title="Poznaj historię naszych pacjentów"
          paragraph="Blog przeznaczony dla pasjonatów weterynarii."
          blogtext="zobacz blog"
        />
      </div>
    </section>
  );
};

export default About;
