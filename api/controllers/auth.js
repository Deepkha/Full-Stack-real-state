const User =require("../model/user");
const bcrypt =require("bcrypt");
const  errorHandler  = require("../utils/error");

const jwt= require('jsonwebtoken');
 const signup =async (req,res,next) => {
    const { username , email, password }= req.body;
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    // const hashedPassword = await bcryptjs.hashSync(password,10);
    const newUser= await User( {username , email, password: hashedPassword });
    try{
    await newUser.save();
    res.status(201).json('User created Successfully');
    }
    catch (error){
     next(errorHandler(550 ,'error from the function'));
        console.log('error');
    }

}
const signin = async (req,res,next) =>{
    const { email, password } =req.body;
    try{
    const validUser = await User.findOne({email});
    if(!validUser) return next(errorHandler(404,'User Not Found'));
    const validPassword = await bcrypt.compareSync(password,validUser.password); 
    if(!validPassword) return next(errorHandler(400,'Wrong Password'));

    const token =jwt.sign({id : validUser._id},process.env.JWT_SECRET);

        res.cookie('access_token',token,{
            httpOnly:true
        }).status(200)
        .json(validUser);
    
    }
    catch(error){
        next(error);
    }
}

module.exports= {signup ,signin};
