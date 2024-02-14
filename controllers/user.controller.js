const { createToken } = require("../middleware/auth")
const { userService } = require("../services")

const register = async(req,res)=>{

    console.log(req.body)

    const body = req.body

    const user=await userService.register(body)

    res.render('./login',{email:user.email})
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