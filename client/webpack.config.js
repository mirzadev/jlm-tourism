const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  entry: {
    app: './client/src/App.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/src`
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name(file) {
                return '[path][name].[ext]';
              },
              publicPath(url) {
                return url.replace('../', '/assets/');
              }
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new WebpackPwaManifest({
      name: 'JLM Tourism',
      short_name: 'JLMTour',
      description: 'An app that allows you to view your upcomming tours.',
      start_url: "/",
      "theme_color": "#0b0101",
      "background_color": "#0b0101",
      fingerprints: false,
      inject: false,
      icons: [
        {
          src: path.resolve('assets/icons/icon-512x512.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('images', 'icons')
        }
      ]
    })
  ],
  mode: 'development'
};

module.exports = config;
