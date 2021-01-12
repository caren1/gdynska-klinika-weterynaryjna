module.exports = {
  siteMetadata: {
    title: "GKW - Gdyńska klinika weterynaryjna",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-smoothscroll",
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