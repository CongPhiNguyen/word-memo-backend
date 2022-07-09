import dbConnect from "../../utils/dbConnect";
import word from '../../models/word';
// import post
dbConnect();

export default async (req,res) => {
    const {method} = req;
    switch(method){
      case 'GET':
        try{
          const words = await word.find();
          res.status(200).send({
            words: words,
            run: true,
            error: ""
          })
        }
        catch(err){
          // let message: string = "";
          // if(err instanceof Error) message = err.message;
          res.status(400).send({
            word: [],
            error: err,
            run: false,
          })
        }
    }
    // console.log(method);
    // res.status(200).json({ name: 'John Doe' })
}