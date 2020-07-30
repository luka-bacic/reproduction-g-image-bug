// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: "cabbp2t9lgez", // required
        accessToken: "h79tfsHDDzaD1afgbOQOpfaJZ6wEisYAcdQ9D54sr90", // required
        host: "cdn.contentful.com",
        environment: "master",
        typeName: "Contentful",
      },
    },
  ],
};
