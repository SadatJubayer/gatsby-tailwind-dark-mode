module.exports = {
  siteMetadata: {
    title: `Gatsby-Tailwind Dark Mode`,
    description: `Gatsby and Tailwind dark mode with no FOC.`,
    author: `@SadatJubayer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-use-dark-mode`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-use-dark-mode",
    },
  ],
}
