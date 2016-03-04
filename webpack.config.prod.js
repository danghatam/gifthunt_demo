'use strict';

const path = require('path');
const webpack = require('webpack');

var config = {
	devtool: 'eval',
	context: path.resolve(__dirname, 'src'),
	entry: [
		"eventsource-polyfill",
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
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
      {
        test: /\.png$/,
        loader: 'url?limit=100000'
      }
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin()
	]
};

module.exports = config;
