
export interface Post {
    title: string;
    description:string;
    mainPicture:string;
    mainText:string;
    metaAuthorId:string;
    metaDate:any;
  }

export const getPosts = async (req: any, res: any) => {
    try {
      const { user } = req.cookies;
      console.log(user);
      if (!secret) throw new Error("No secret");
      
      const decoded = jwt.decode(user, secret);
      console.log(decoded);
      
      const { userId, role} = decoded;
  
      if(role === 'admin') console.log("Give all avilable data")
  
      const userDB = await UserModel.findById(userId);
  
      res.send({ ok: true, user: userDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };
  