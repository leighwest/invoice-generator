const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const webpack = require('webpack');
const webpackConfig = require('./webpack');

// webpack(webpackConfig);

require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
});


app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow_Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const invoiceRoutes = require('./routes/invoice');
app.use('/', invoiceRoutes)

app.listen(8080);