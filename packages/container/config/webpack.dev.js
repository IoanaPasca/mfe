const { merge } = require('webpack-merge') // used to merge together two webpack
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJason = require('../package.json')
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/'
  },
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
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        auth: 'auth@http://localhost:8082/remoteEntry.js',
      },
      shared:packageJason.dependencies
    }),
  ]
}

module.exports = merge(commonConfig, devConfig);
