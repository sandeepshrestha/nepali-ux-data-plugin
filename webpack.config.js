const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;

module.exports = {
  entry: './src/code.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'code.js', // final controller file
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // extract CSS to file
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/ui.html',
      filename: 'ui.html',
      inject: 'body', // injects <script> at end of body
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css', // temporary CSS file
    }),
    new HtmlInlineCSSWebpackPlugin(), // inlines CSS from style.css into ui.html
  ],
//   mode: 'development',
};
