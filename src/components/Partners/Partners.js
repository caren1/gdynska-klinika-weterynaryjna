import React from "react";
import partnersStyles from "./Partners.module.scss";
import SinglePartner from "./SinglePartner/SinglePartner";

import ppwlogo from "../../assets/logos/ppw.png";
import veticoverlogo from "../../assets/logos/veticover.svg";
import vetiratylogo from "../../assets/logos/vetiraty.png";

const Partners = () => {
  return (
    <section id="partnerzy" className={partnersStyles.Partners}>
      <SinglePartner
        image={ppwlogo}
        title="Polski Program Weterynaryjny"
        alt="PPW"
        paragraph="Pojedynczej praktyce weterynaryjnej skupionej na realizacji swojej podstawowej funkcji usługowej coraz trudniej organizacyjnie i finansowo sprostać wzorcom na miarę oczekiwań klientów, identyfikacji niezbędnych zmian, myślenia strategicznego oraz odpowiedniej komunikacji w mediach społecznościowych. PPW przyświeca idea zgodnie, z którą stworzenie organizacji zrzeszającej wiele podmiotów w ramach zintegrowanej struktury, otwiera możliwość zastosowania rozwiązań, które jak dotąd nie występują na rynku usług weterynaryjnych w Polsce."
        link="https://www.ppwet.pl/"
        linktext="więcej"
      />
      <SinglePartner
        image={veticoverlogo}
        title="Veticover"
        alt="Veticover"
        paragraph="VetiCover to innowacyjny, polski projekt stworzony przez grupę specjalistów i pasjonatów, od wielu lat związanych z branżą weterynaryjną. VetiCover to pierwszy w Polsce program profilaktyki w ochronie zdrowia psów i kotów. Pakiety profilaktyczne zawierają najważniejsze procedury medyczne przewidziane w roku kalendarzowym pomagające utrzymać pupila w najlepszym zdrowiu i kondycji fizycznej."
        link="https://veticover.pl/"
        linktext="więcej"
      />
      <SinglePartner
        image={vetiratylogo}
        title="VetiRaty"
        alt="VetiRaty"
        paragraph="Jest to system ratalny stworzony specjalnie z myślą o rynku weterynaryjnym. Umożliwia finansowanie niemal wszystkich procedur wykonywanych w placówkach weterynaryjnych. Pomaga właścicielowi zwierzęcia sfinansować koszty leczenia i rozłożyć je na wygodne raty. Placówka ma do dyspozycji narzędzie umożlwiające optymalne zaplanowanie leczenia, które nie musi być uzależnione od jego kosztów. Ma również gwarancję szybkiej zapłaty za przeprowadzone leczenie."
        link="https://veticover.pl/"
        linktext="więcej"
      />
    </section>
  );
};

export default Partners;
