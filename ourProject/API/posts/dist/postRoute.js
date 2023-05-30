"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var postControl_1 = require("./postControl");
router
    .post("/add-post", postControl_1.addPost)
    .get("/get-posts", postControl_1.getPosts)["delete"]("/delete-post", postControl_1.deletePost)
    .get("/get-post", postControl_1.getPost);
exports["default"] = router;
