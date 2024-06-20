const express =require('express');
const mongoose =require('mongoose');
const dotenv =require('dotenv');
const user =require('../api/routes/user.js');
const auth =require('../api/routes/auth.js');
const bodyParser =require("body-parser");
const cookieParser =require('cookie-parser');
const cors = require('cors');

dotenv.config();

const app=express();


mongoose.connect(process.env.MONGO)
.then(() =>{
    console.log("Connected to Database")
}).catch((err)=>{
    console.log(err);

});

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
};

app.use(express.json());
app.use(bodyParser.json())

app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/route',user);
app.use('/api/auth',auth);

// Define the CORS options




app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });

  
app.listen(3000,() =>{
    console.log("Listening on port 3000");
})