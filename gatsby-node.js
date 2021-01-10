const path = require("path");

module.exports.createPages = async ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions;

  const offerTemplate = path.resolve(`./src/templates/offer.js`);
  const personTemplate = path.resolve(`./src/templates/person.js`);

  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              icon
              slug
            }
            html
          }
        }
      }
    }
  `);

  response.data.allMarkdownRemark.edges.forEach(({
    node
  }) => {
    let template = null;

    if (node.frontmatter.slug.includes("oferta")) {
      template = offerTemplate;
    } else {
      template = personTemplate;
    }

    createPage({
      component: template,
      path: `${node.frontmatter.slug}`,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};