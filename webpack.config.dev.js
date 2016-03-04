'use strict';

const path = require('path');
const webpack = require('webpack');

var config = {
	devtool: 'cheap-module-eval-source-map',
	context: path.resolve(__dirname, 'src'),
	entry: [
		"eventsource-polyfill",
		"webpack-hot-middleware/client?path=http://127.0.0.1:8080/__webpack_hmr",
		"./index"
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.bundle.js',
		publicPath: '/javascripts/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				include: path.join(__dirname, 'src'),
				exclude: /node_modules/
			},
      {
        test: /\.png$/,
        loader: 'url?limit=100000'
      },
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
			fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
		new webpack.NoErrorsPlugin()
	]
};

module.exports = config;
