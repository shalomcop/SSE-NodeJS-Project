import mongoose, { Schema } from "mongoose";
// import { PostSchema } from "../posts/postModel";
//schema

export interface User {
  name: string;
  password:string;
}

export enum UserType {
  USER = "user",
}

export const UserSchema = new Schema({
  name: {require:true, type:String},
  password:{require:true, type:String},
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
