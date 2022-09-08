const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Nft Market - Landing`,
    siteUrl: `https://landing-nft-market.web.app/`,
    description:
      "A new NFT experience | Non Fungible Tokens, Discover | collect and sell",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `none`,
          breakpoints: [460, 640, 768, 976, 1392],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-remark-images",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "constants",
        path: "./src/constants/",
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
    "gatsby-plugin-postcss",
  ],
};
