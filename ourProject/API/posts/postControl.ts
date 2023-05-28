import { PostModel } from "./postModel";
import jwt from "jwt-simple";

const secret = process.env.JWT_SECRET;


export const getAllPosts = async (req: any, res: any) => {
    try {
  
      const posts = await PostModel.find({});
  
      res.send({ ok: true, posts });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };
  