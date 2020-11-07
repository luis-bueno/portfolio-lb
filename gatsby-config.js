module.exports = {
  siteMetadata: {
    title: `Luis Bueno`,
    description: `Awesome portfolio website.`,
    author: `@luisbueno`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luis Bueno`,
        short_name: `Luis Bueno`,
        start_url: `/`,
        background_color: `#eee`,
        theme_color: `#333`,
        display: `standalone`,
        icon: `${__dirname}/static/logos/lb-logo.png`,
      },
    },
  ],
}
