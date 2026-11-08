
require('dotenv').config() 
const express = require('express');
const cors = require('cors')

const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes')


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rqjkglm.mongodb.net/`) 
.then(()=>{console.log("DB CONNECTED") })
.catch((err)=>{console.log("DB NOT CONNECTED" , err) })



app.use(express.json()) 
app.use(cors()); 


userRoutes(app);


app.get('/', (req,res)=>{
    return res.send("Welcome to the landing page")
})

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER IS LISTENING AT PORT: ${PORT}`);
})

