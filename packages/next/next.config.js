
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const { withFederatedSidecar } = require('@module-federation/nextjs-mf');



module.exports = withFederatedSidecar({
  name:"next", // the name of of teh sub project, use as a global variable when the scripts loads  up inside the container
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './NextApp':'./pages/index.js'
  },
})({
  webpack5: true,
  webpack(config, options) {
    config.experiments = { topLevelAwait: true };
    config.module.rules.push({
      test: /_app.js/,
      loader: '@module-federation/nextjs-mf/lib/federation-loader.js',
    });
    return config;
  }
  
})


