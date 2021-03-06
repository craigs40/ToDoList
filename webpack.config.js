const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './dist',
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, './dist'),
    filename: './main.js',
    publicPath: '',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
