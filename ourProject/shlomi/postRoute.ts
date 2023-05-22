import express from "express";
const router = express.Router();

import {
  
  getPost,

} from "./postControl"

router

  .get("/get-post", getPost)

export default router;