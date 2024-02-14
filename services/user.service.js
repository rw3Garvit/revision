const { userSchema } = require("../models")

const register = (body)=>{

    return userSchema.create(body)

}


const findUser =(email)=>{


    return userSchema.findOne({email})

}

module.exports = {register,findUser}