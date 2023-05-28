import express from "express";
const router = express.Router();


router
  .get('/getPosts', getAlPosts)

export default router;
