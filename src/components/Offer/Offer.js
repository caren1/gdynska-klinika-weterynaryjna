import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import offerStyles from "./Offer.module.scss";

import SingleOffer from "./SingleOffer/SingleOffer";

const Offer = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { slug: { regex: "/oferta/" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                icon
                slug
              }
            }
          }
        }
      }
    `
  );

  const { edges } = allMarkdownRemark;
  const offers = edges;

  return (
    <section id="offer" className={offerStyles.Offer}>
      <div className={offerStyles.OfferWrapper}>
        {offers.map(({ node }) => (
          <SingleOffer
            key={node.frontmatter.slug}
            title={node.frontmatter.title}
            icon={node.frontmatter.icon}
            slug={node.frontmatter.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default Offer;
