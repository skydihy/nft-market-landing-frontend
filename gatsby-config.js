const path = require("path");

module.exports = {
  siteMetadata: {
    title: `landing-nft-market`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        root: path.join(__dirname, "src"),
      },
    },

    "gatsby-plugin-postcss",
  ],
};
