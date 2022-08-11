import 'dotenv/config';
import express from 'express';
import { connectMongo } from 'config';
import { loginRoute } from 'routes';
import { errorMiddleware } from 'middlewares';

connectMongo();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get('/', (_, res) => {
  res.status(200).json({ message: 'Hello there' });
});

server.use(loginRoute);

server.use(errorMiddleware);

server.listen(process.env.PORT);
