import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

import invoiceRoutes from './routes/invoice';
import usersRoutes from './routes/users'

const app = express();

// require('@babel/register')({
//     ignore: [/(node_modules)/],
//     presets: ['@babel/preset-env', '@babel/preset-react']
// });

app.use(bodyParser.json()); // application/json

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow_Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/', invoiceRoutes)
app.use('/users', usersRoutes)

app.listen(8080);