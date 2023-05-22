import PostModel from "./postModel"


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