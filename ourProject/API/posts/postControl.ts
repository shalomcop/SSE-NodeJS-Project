import { PostModel } from "./postModel";
import jwt from "jwt-simple";

const secret = process.env.JWT_SECRET;

export interface Post {
    title: string;
    description:string;
    mainPicture:string;
    mainText:string;
    metaAuthorId:string;
    metaDate:any;
  }


export const getPost=  async (req:any,res:any) => {
  try {
    const { id } = req.body;

    if (!id) throw new Error("No uid in data");

    const doc = await PostModel.findById(id)
    if (!doc) throw new Error("model");  
    res.send({ok:true,doc})
  } 
  catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export const getPosts = async (req: any, res: any) => {
    try {
  
      const posts = await PostModel.find({});
  
      res.send({ ok: true, posts });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };

  export const addPost = async (req: any, res: any) => {
    try {
  
      const { title, description, mainPicture, mainText, metaAuthorId, metaDate } = req.body;
      console.log(title, description, mainPicture, mainText, metaAuthorId, metaDate);
      console.log(req.body);
      
      //add posts to DB;
      const postDB = await PostModel.create({ title, description, mainPicture, mainText, metaAuthorId, metaDate });
  
      console.log(postDB);
  
      res.status(201).send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };

  export const deletePost = async (req: any, res: any) => {
    try {
      const { _id } = req.body;
  
      const deletePost = await PostModel.deleteOne({ _id });
      const posts = await PostModel.find({});
  
      res.send({ ok: true, posts });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }
