const { merge } = require('webpack-merge') // used to merge together two webpack
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJason = require('../package.json')
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js' 
      },
      shared:packageJason.dependencies
    }),
  ]
}

module.exports = merge(commonConfig, devConfig);
