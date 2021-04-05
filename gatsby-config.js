module.exports = {
  siteMetadata: {
    title: " GSWet · Gdyński Szpital Weterynaryjny lek. wet. Tomasza Brzeskiego",
    titleTemplate: "%s · GSWet · Gdyński Szpital Weterynaryjny lek. wet. Tomasza Brzeskiego",
    description:
      "Nowoczesny szpital weterynaryjny w Gdyni - Szukasz weterynarza lub kompleksowych badań weterynaryjnych w Trójmieście? Specjalistyczny personel szpitala oferuje pomoc w wielu dziedzinach, szerokie spektrum nowoczesnych badań diagnostycznych oraz opiekę ambulatoryjną i szpitalną. ",
    url: "http://gswet.pl",
    image: "/static/assets/images/background.png",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 850,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};
