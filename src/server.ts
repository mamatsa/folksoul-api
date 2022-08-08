import express from 'express';

const server = express();

server.get('/', (_, res) => {
  res.status(200).json({ message: 'Hello there' });
});

server.listen(3000);
