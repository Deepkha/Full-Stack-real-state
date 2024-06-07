const User =require("../model/user");

 const signup =async (req,res) => {
    const { username , email, password }= req.body;
    const newUser= await User( {username , email, password});
    console.log('Data added');
    await newUser.save();
    res.status(201).json('User created Successfully');
    }

module.exports= signup;
