import express from "express";
const router = express.Router();

import {
  addPost,
  getPosts,
  deletePost,
  getPost
} from "./postControl"

router
  .post("/add-post", addPost)
  .get("/get-posts", getPosts)
  .delete("/delete-post", deletePost)
  .get("/get-post", getPost)

export default router;
