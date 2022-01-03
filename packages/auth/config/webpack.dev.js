const { merge } = require('webpack-merge') // used to merge together two webpack
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    publicPath:'http://localhost:8082/'
    
  },
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name:"auth", // the name of of teh sub project, use as a global variable when the scripts loads  up inside the container
      filename: "remoteEntry.js",
      exposes: {
        './AuthApp':'./src/bootstrap'
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
