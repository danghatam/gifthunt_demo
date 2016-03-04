'use strict';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const url = require('url');
const proxy = require('express-http-proxy');

var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use('/proxy', proxy(process.env.PROXY_HOST, {
	forwardPath: (req, res) => url.parse(req.url).path
}));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(8080, 'localhost', err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening at http://localhost:8080');
    }
});