import dbConnect from "../../utils/dbConnect";
import word from '../../models/word';
import cors from 'cors';
// import post
dbConnect();

const corsHeader = cors({
  methods: ['POST', 'GET', 'HEAD'],
})

function runMiddleware(req,res,fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export default async (req,res) => {
    await runMiddleware(req, res, corsHeader);
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