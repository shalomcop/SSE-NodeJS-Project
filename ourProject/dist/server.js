"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var dotenv = require("dotenv"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
var cookie_parser_1 = require("cookie-parser");
// const uri: string | undefined = process.env.MONGODB_URI;
//static file
app.use(express_1["default"].static("./public"));
//to be able to get data from client add this line
app.use(cookie_parser_1["default"]());
// if (uri) { mongoose.connect(uri)
//     .then(() => {
//       console.log("DB connected!");})
//     .catch((err) => console.log(err));
// } else {
//   console.log("No URI to DB");
// }
app.use(express_1["default"].json());
var usersRoute_1 = require("./API/users/usersRoute");
app.use('/', usersRoute_1["default"]);
// import postsRouter from './API/users/postRoute';
// app.use('/api/posts', postRouter);
var postRoute_1 = require("./shlomi/postRoute");
app.use('/shlomi', postRoute_1["default"]);
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
