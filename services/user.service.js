const { userSchema } = require("../models")

const register = (body)=>{

    return userSchema.create(body)

}

module.exports = {register}