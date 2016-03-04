'use strict';

const express = require('express');
const path = require('path');
const url = require('url');
const proxy = require('express-http-proxy');

const app = express();

app.use('/proxy', proxy(process.env.PROXY_HOST, {
	forwardPath: (req, res) => url.parse(req.url).path
}));

app.get("/javascripts/index.bundle.js", (req, res) => {
	res.sendFile(path.resolve(__dirname, "javascripts/index.bundle.js"));
});

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(8888, '0.0.0.0', err => {
	if (err) {
		console.warn(err);
	} else {
		console.log("App is listening at http://0.0.0.0:8888");
	}
});