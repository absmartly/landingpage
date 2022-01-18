require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://absmartly.netlify.app/",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-webmention`,
      options: {
        username: "www.absmartly.com",
        identity: {
          twitter: "absmartly",
        },
        mentions: true,
        pingbacks: false,
        domain: "www.absmartly.com",
        fetchLimit: 100,
        token: process.env.WEBMENTIONS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://absmartly.netlify.app",
        sitemap: "https://absmartly.netlify.app/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        jsxPragma: "jsx",
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "AB Smartly",
        short_name: "Ab Smartly",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/assets/favicon.svg",
      },
    },
  ],
};
