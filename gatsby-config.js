module.exports = {
  pathPrefix: "/cv",
  siteMetadata: {
    title: `Le Van Son`,
    description: `Cv, le van son, fullstack developer, web developer, mobile developer`,
    role: `Fullstack Developer`,
    author: `@levansonqs`,
    skill: [
      {
        name: "Javascript",
        point: 85,
      },
      {
        name: "Html",
        point: 90,
      },
      {
        name: "Css",
        point: 90,
      },
      {
        name: "English",
        point: 70,
      },
      {
        name: "PHP",
        point: 80,
      },
      {
        name: "SQL",
        point: 80,
      },
      {
        name: "ReactJS",
        point: 85,
      },
      {
        name: "ReactNative",
        point: 85,
      },
    ],
    work: [
      {
        position: "Junior Developer @FPT",
        time: "MAY2014-DEC2015",
        description:
          "Work in fpt software as junior developer, Client from japan",
      },
      {
        position: "Senior Developer @NovaIo",
        time: "JAN2016-DEC2016",
        description:
          "Work in NovaIo as senior developer, Develop product for our company",
      },
      {
        position: "Project Manager @SoftOne",
        time: "DEC2016-DEC2017",
        description: "Work in SoftOne as junior developer, Client from korea",
      },
      {
        position: "Senior Developer @NexleSoft",
        time: "JAN2018-present",
        description:
          "Work in NexleSoft as senior developer, Client from around the world",
      },
    ],
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
