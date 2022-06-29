const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/*`,
    toPath: `/`,
  });
};
