require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Vita Training`,
    description: `Safeguarding Victims of Modern Slavery`,
    author: `@Zellement and @samuelgoddard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vita-training`,
        short_name: `vita`,
        start_url: `/`,
        background_color: `#ab0033`,
        theme_color: `#ab0033`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
