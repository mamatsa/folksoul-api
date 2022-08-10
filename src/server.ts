import 'dotenv/config';
import express from 'express';
import { connectMongo } from 'config';

connectMongo();

const server = express();

server.get('/', (_, res) => {
  res.status(200).json({ message: 'Hello there' });
});

server.listen(process.env.PORT);
