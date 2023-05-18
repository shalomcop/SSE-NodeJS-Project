"use strict";
exports.__esModule = true;
exports.PostSchema = void 0;
var mongoose_1 = require("mongoose");
exports.PostSchema = new mongoose_1.Schema({
    title: { require: true, type: String },
    description: { require: true, type: String },
    mainPicture: { require: true, type: String },
    mainText: { require: true, type: String },
    metaAuthorId: { require: true, type: String },
    metaDate: { require: true, type: Date }
});
var PostModel = mongoose_1["default"].model("posts", exports.PostSchema);
exports["default"] = PostModel;
