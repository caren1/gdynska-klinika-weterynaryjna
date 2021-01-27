import * as React from "react";
import errorCat from '../assets/images/404-cat.png'

import notFoundPageStyles from "./404.module.scss";

import Layout from "../components/Layout/Layout";
import SEO from '../components/SEO/Seo'
import Button from '../components/UI/Button/Button'

const NotFoundPage = () => {
  return (
    <Layout detailed={true}>
      <SEO title="Ups! - Wróć do strony głównej"/>
      <div className={notFoundPageStyles.NotFound}>
        <h1>Wygląda na to, że  dotarłeś w nieodpowiednie miejsce.</h1>
        <Button type="Back"/>
        <img src={errorCat} alt="error-cat" />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
