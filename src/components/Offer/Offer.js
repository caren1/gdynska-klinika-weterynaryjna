import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import offerStyles from "./Offer.module.scss";

import SingleOffer from "./SingleOffer/SingleOffer";

const Offer = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter:{
            slug: {regex: "/oferta/"}
          }
        }
      ){
        edges{
          node {
            frontmatter{
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
  // const offers = edges.filter((edge) =>
  //   edge.node.frontmatter.slug.includes("oferta")
  // );
  // console.log(offers);

  return (
    <section className={offerStyles.Offer}>
      <div className={offerStyles.OfferWrapper}>
        {offers.map(({ node }) => (
          <SingleOffer
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
