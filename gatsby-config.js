module.exports = {
  siteMetadata: {
    title: "GKW - Gdyńska klinika weterynaryjna",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }, "gatsbyt-plugin-sharp",
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
            }
          }
        ]
      }
    }
  ],
};
