// server.js

import express from 'express';
import dotenv from 'dotenv';
import { dbClient } from './utils/db'; // Import as named import
import { redisClient } from './utils/redis'; // Import as named import
import indexRouter from './routes/index';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// You can use dbClient and redisClient to keep them from being marked as unused
console.log(`MongoDB connected: ${dbClient.isAlive()}`);
console.log(`Redis connected: ${redisClient.isAlive()}`);

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
