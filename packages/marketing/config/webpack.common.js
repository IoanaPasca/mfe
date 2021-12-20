
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/, // do not  try to babel node modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // transform jsx to js, transfom es6 to es
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
       //to tell webpack start to process some projesct we import in our projects (transform es6  to es5)
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
     template: './public/index.html'
   })
  ]
}