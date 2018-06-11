'use strict';

const express = require('express');
const logger = require('morgan');
const { proxyArr } = require('./proxyList');

const app = express();

app.use(logger('dev'));

let currentIndex = 0;

app.get('/fetch-proxy', (req, res) => {
	let dispatchProxy = proxyArr[currentIndex];

	(proxyArr.length - 1 === currentIndex) ? currentIndex = 0 : currentIndex++;

	res.send(dispatchProxy);
})

module.exports = app;
