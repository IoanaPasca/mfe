const { merge } = require('webpack-merge') // used to merge together two webpack
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJason = require('../package.json')
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name:"marketing", // the name of of teh sub project, use as a global variable when the scripts loads  up inside the container
      filename: "remoteEntry.js",
      exposes: {
        './MarketingApp':'./src/bootstrap'
      },
      shared: {
      //  ...packageJason.dependencies,
        'react': {
          singleton: true,
          eager:true,
        },
        'react-dom': {
          singleton: true,
          eager:true,
        }
      }
    }),
  ]
}

module.exports = merge(commonConfig, devConfig);
