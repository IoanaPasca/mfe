const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common')
const packageJason = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN;

// when we are in production mode all the files are optimised and mimified
const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
         marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`
      },
      shared:packageJason.dependencies
    })
  ]
}

module.exports = merge(commonConfig, prodConfig);