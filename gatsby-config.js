const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Nft Market | Landing`,
    siteUrl: `http://localhost:8000/`,
    description:
      "A new NFT experience | Non Fungible Tokens, Discover | collect and sell",
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
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        root: path.join(__dirname, "src"),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-postcss",
  ],
};
