const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJason = require('../package.json');
const commonConfig = require('../config/webpack.common');


const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/dashboard/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename:'remoteEntry.js',
      exposes: {
        './DashboardApp':'./src/bootstrap'
      },
      shared:packageJason.dependencies
    })
  ]
}

module.exports = merge(commonConfig, prodConfig);