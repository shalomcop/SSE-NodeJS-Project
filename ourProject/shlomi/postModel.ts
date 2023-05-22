import mongoose, { Schema } from "mongoose";
// import { UserSchema } from "../users/userModel";

export interface Post {
  title: string;
  description:string;
  mainPicture:string;
  mainText:string;
  metaAuthorId:string;
  metaDate:any;
}

export const PostSchema = new Schema({
  title: {require:true, type:String},
  description:{require:true, type:String},
  mainPicture:{require:true, type:String},
  mainText:{require:true, type:String},
  metaAuthorId:{require:true, type:String},
  metaDate:{require:true, type:Date},
});

export const UserPostSchema = new Schema({
  // user:UserSchema,
  post:PostSchema,
});


export const PostModel = mongoose.model("posts", PostSchema);
export const UserPostModel = mongoose.model("user-post", UserPostSchema);

export default PostModel;