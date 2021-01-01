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
    }
  ],
};
