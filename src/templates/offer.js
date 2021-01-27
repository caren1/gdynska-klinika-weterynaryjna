import React from "react";
import { graphql  } from "gatsby";
import Layout from "../components/Layout/Layout";
import offerStyles from "./offer.module.scss";
import SEO from "../components/SEO/Seo";

const Offer = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const onClose = () => {
    window.history.back();
  }
  

  return (
    <Layout detailed={true}>
      <SEO title={frontmatter.title}/>
      <section className={offerStyles.Offer}>
        <a className={offerStyles.Exit} onClick={onClose}/>
        <div className={offerStyles.OfferWrapper}>
          <div className={offerStyles.Intro}>
            <img src={frontmatter.icon} alt={frontmatter.title} />
            <h1>{frontmatter.title}</h1>
          </div>
          <div
            className={offerStyles.Content}
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      </section>
    </Layout>
  );
};

export default Offer;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        icon
        slug
      }
    }
  }
`;