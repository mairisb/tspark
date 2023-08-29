const dotenv = require('dotenv');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const envFilePath = './.env';
const envConfigSrc = fs.existsSync(envFilePath)
  ? dotenv.config({ path: envFilePath }).parsed
  : process.env;

const envVarPrefix = 'TSPARK_APP_';
const envConfig = {};
Object.keys(envConfigSrc)
  .filter((key) => key.startsWith(envVarPrefix))
  .forEach((key) => {
    envConfig[key] = envConfigSrc[key];
  });

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /\.spec\.tsx?$/],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(envConfig),
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      inject: true,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
