const express =require('express');
const mongoose =require('mongoose');
const dotenv =require('dotenv');

const user =require('../api/routes/user.js');
const auth =require('../api/routes/auth.js');

dotenv.config();

const app=express();

mongoose.connect(process.env.MONGO)
.then(() =>{
    console.log("Connected to Database")
}).catch((err)=>{
    console.log(err);

});
app.use(express.json());

app.use('/api/route',user);
app.use('/api/auth',auth);

app.listen(3000,() =>{
    console.log("Listening on port 3000");
})