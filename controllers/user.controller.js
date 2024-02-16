const { createToken } = require("../middleware/auth")
const { userService } = require("../services");
const { send_mail } = require("../services/email.service");

const register = async(req,res)=>{

    console.log(req.body)
    console.log(req.file);

   

    let body={
        email:req.body.email,
        password:req.body.password,
        imageName:req.file.destination
    }



    const user=await userService.register(body)

    if(user)
    {
      let email = await send_mail(body.email,"Hello Welcome","Welcome mail")
      console.log(email);
    }

    // res.render('./login',{email:user.email})
    // res.redirect('/')

    res.status(201).json({
        message:'user created',
        user
    })

}

const login = async(req,res)=>{

    console.log(req.body)
    let body = req.body

  const user = await userService.findUser(body.email)

  if(!user)
  {
    res.status(400).json({message:"user not found"})
  }
console.log(user);

  if(body.password != user.password)
  {
    res.status(400).json({message:'password invalid'})
  }

let data = {
    _id:user._id,
    role:user.role,
    email:user.email
}
  let token = createToken(data)
  console.log(token);

    res.cookie('token',token)
  res.status(200).json({message:'login success'})

}


const getProfile =(req,res)=>{

    let user = req.user

    res.status(200).json({message:'get profile success',user})
}



module.exports = {register,login,getProfile}