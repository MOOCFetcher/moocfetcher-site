import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

module.exports = {
  context: `${__dirname}/src`,
  target: 'web',
  entry: './index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.ejs',
    minify: {
      html5: true,
      removeComments: true,
      collapseWhitespace: true
    }
  })],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}
