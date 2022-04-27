const path = require('path')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  "stories": [
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y'
  ],
  "webpackFinal": (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
       },{
         loader: 'css-loader',
         options: {
          url: false,
        }
      },{
          loader: 'sass-loader',
          options: {
            additionalData: "@import '/variables.scss';"
          }
      }],
      include: path.resolve(__dirname, '../'),
    })
    // Copy image assets to expose via CSS
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "../images"),
            to: "./images", 
          },
        ],
      })
    );

    config.resolve.alias = {
      "components": path.resolve(__dirname, "../components"),
      "data": path.resolve(__dirname, "../data"),
      "images": path.resolve(__dirname, "../images")
    }

    // Return the altered config
    return config;
  },
}