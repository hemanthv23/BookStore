import express from 'express';
import mongoose from 'mongoose';
import { PORT, MONGODBURL } from './config.js';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/bookRoutes.js';
import cors from 'cors';
const app = express();

// MIDDLEWARE
app.use(express.json());

//MIDDLEWARE FOR HANDLING CORS
app.use(cors());
// app.use(
//   cors({
//     origin: 'http://localhost:3000/',
//     method: ['GET', 'POST', 'PATCH', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

//Routes
app.use('/books', booksRoute);

// Mongoose connection
mongoose
  .connect(MONGODBURL)
  .then(() => {
    console.log('App is connected to the database');
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
