import * as React from "react";
import { useEffect } from "react";
import "./index.css";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/lato";
import "@fontsource/lato/300.css";

import Layout from "../components/Layout/Layout";
import Intro from "../components/Intro/Intro";
import Offer from "../components/Offer/Offer";
import About from "../components/About/About";
import Staff from "../components/Staff/Staff";
import Footer from "../components/Footer/Footer";
import Partners from "../components/Partners/Partners";

import StaffContextProvider from "../context/staff-context";
import SEO from "../components/SEO/Seo";

const IndexPage = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  return (
    <StaffContextProvider>
      {/* <Layout> */}
       {/*  <SEO />
        <Intro />
        <Offer /> */}
        <About />
        {/* <Staff />
        <Partners />
        <Footer />*/}
      {/* </Layout>  */}
    </StaffContextProvider>
  );
};

export default React.memo(IndexPage);
