const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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