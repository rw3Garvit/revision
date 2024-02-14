const jwt = require('jsonwebtoken')


const createToken = (data)=>{
    return jwt.sign(data,process.env.SECRET)
}

const autheticate = (req,res,next)=>{

    const token = req.cookies['token']

    console.log(token,"token");

    if(!token)
    {
        res.status(400).json({message:"you are not login"})
    }

   let user = jwt.verify(token,process.env.SECRET)
   console.log(user);

   req.user = user
   next()

}

module.exports={createToken,autheticate}