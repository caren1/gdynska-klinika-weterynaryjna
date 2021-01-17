module.exports = {
  siteMetadata: {
    title: "GKW · Gdyńska klinika weterynaryjna",
    titleTemplate: "%s · Gdyńska klinika weterynaryjna",
    description:
      "Nowoczesna klinika weterynaryjna w Gdyni - Specjalistyczny personel kliniki oferuje pomoc w wielu dziedzinach, szerokie spektrum nowoczesnych badań diagnostycznych oraz opiekę ambulatoryjną i szpitalną.",
    url: "http://gkw.com.pl",
    image: "/static/assets/images/background.png",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GKW · Gdyńska klinika weterynaryjna`,
        short_name: `GKW`,
        description: `Nowoczesna klinika weterynaryjna w Gdyni - Specjalistyczny personel kliniki oferuje pomoc w wielu dziedzinach, szerokie spektrum nowoczesnych badań diagnostycznych oraz opiekę ambulatoryjną i szpitalną.`,
        lang: `pl`,
        display: `standalone`,
        icon: `src/assets/logos/GKW-main-vertical-logo.svg`,
        start_url: `/`,
        background_color: `#005826`,
        theme_color: `#ffffff`,
        cache_busting_mode: "none",
        crossOrigin: `use-credentials`
      },
    },
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
