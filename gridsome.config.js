// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require("path");

const siteUrl = process.env.GRIDSOME_SITE_URL || "https://www.sioncentral.com";

const gridsome = {
  siteName: "SION",
  icon: "./src/favicon.png",
  siteUrl,
  siteDescription:
    "SION is a powerful commission management software for travel agents",
  titleTemplate: "%s — Sion",
  metadata: {
    opengraphImageUrl: `${siteUrl}/images/opengraph.jpg`,
    contactFormApiUrl: "https://submit-form.com/xmQtl_-FPkY5HiHkuTrBy",
    contactFormSubjectTemplate: `New message from {{name}} - {{email}}`,
  },
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          includePaths: [path.join(__dirname, "src/assets")],
        },
      },
    },
  },
  plugins: [
    { use: "gridsome-plugin-pug" },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "yaml",
        path: "./data/**/*.yml",
      },
    },
  ],
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
};

if (process.env.NODE_ENV === "production") {
  // Google analytics
  gridsome.plugins.push({
    use: "@gridsome/plugin-google-analytics",
    options: {
      id: process.env.GRIDSOME_GOOGLE_ANALYTICS_ID,
    },
  });
  // Sitemap
  gridsome.plugins.push({
    use: "@gridsome/plugin-sitemap",
    options: {
      cacheTime: 600000, // default
      config: {},
    },
  });
  // Manifest
  gridsome.plugins.push({
    use: "gridsome-plugin-pwa",
    options: {
      title: "Sion",
      startUrl: "/",
      display: "standalone",
      statusBarStyle: "default",
      manifestPath: "manifest.json",
      disableServiceWorker: true,
      serviceWorkerPath: "service-worker.js",
      cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg",
      shortName: "sion",
      themeColor: "#14D2AF",
      backgroundColor: "#ffffff",
      icon: "src/app-icon.png", // must be provided
      msTileImage: "",
      msTileColor: "#14D2AF",
    },
  });
  // Critical (inlines css above the fold)
  gridsome.plugins.push({
    use: "@gridsome/plugin-critical",
    options: {
      paths: ["/"],
      width: 1300,
      height: 1200,
    },
  });
}

module.exports = gridsome;
