const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJason = require('../package.json');
const commonConfig = require('../config/webpack.common');


const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/auth/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename:'remoteEntry.js',
      exposes: {
        './AuthApp':'./src/bootstrap'
      },
      shared:packageJason.dependencies
    })
  ]
}

module.exports = merge(commonConfig, prodConfig);