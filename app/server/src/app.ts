import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
dotenv.config();

import invoiceRoutes from './routes/invoice';
import usersRoutes from './routes/users';

const app = express();

app.use(bodyParser.json()); // application/json

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow_Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/', invoiceRoutes);
app.use('/users', usersRoutes);

mongoose
  .set('strictQuery', false)
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
