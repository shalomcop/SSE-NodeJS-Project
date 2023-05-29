import express from "express";
const app = express();
import mongoose, { Schema } from "mongoose";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import cookieParser from 'cookie-parser';
const uri: string | undefined = process.env.MONGODB_URI;


//static file
app.use(express.static("./public"));

//to be able to get data from client add this line

app.use(cookieParser())


if (uri) { mongoose.connect(uri)
    .then(() => {
      console.log("DB connected!");})
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB");
}

app.use(express.json());

import usersRouter from './API/users/usersRoute';
app.use('/', usersRouter);

// import postsRouter from './API/users/postRoute';
// app.use('/api/posts', postRouter);

// import postRoute from './shlomi/postRoute';
// app.use('/shlomi', postRoute);



app.listen(3000, () => {
  console.log("server listen on port 3000");
});
