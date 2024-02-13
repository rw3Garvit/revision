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

  

}



module.exports = {register,login}