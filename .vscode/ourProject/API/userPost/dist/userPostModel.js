"use strict";
exports.__esModule = true;
exports.UserPostSchema = void 0;
var mongoose_1 = require("mongoose");
var postModel_1 = require("../posts/postModel");
var userModel_1 = require("../users/userModel");
exports.UserPostSchema = new mongoose_1.Schema({
    user: { require: true, type: userModel_1.UserSchema },
    post: { require: true, type: postModel_1.PostSchema }
});
var UserPostModel = mongoose_1["default"].model("userPost", exports.UserPostSchema);
exports["default"] = UserPostModel;
// import mongoose, { Schema } from "mongoose";
// import { TeacherSchema } from "../teachers/teachersModel";
// import { UserSchema } from "../users/usersModel";
// //schema
// export interface Course {
//   // public uid: string = uuid();
//   name: string;
// }
// export const CourseSchema = new Schema({
//   name: String,
//   teacher:UserSchema,
// });
// export const CourseStudentSchema = new Schema({
//   student:UserSchema,
//   course:CourseSchema,
// })
// export const ExamSchema = new Schema({
//   name: String,
//   topic:String,
//   questions:Object,
//   course:CourseSchema,
// });
// export const GradeSchema = new Schema({
//   student:UserSchema,
//   exam:ExamSchema,
//   course:CourseSchema,
//   grade:Number
// })
// export const ExamModel = mongoose.model('exams',ExamSchema)
// export const GradeModel = mongoose.model('grades', GradeSchema);
// export const CourseStudentModel = mongoose.model("course-students", CourseStudentSchema);
// const CourseModel = mongoose.model("courses", CourseSchema);
// export default CourseModel;
