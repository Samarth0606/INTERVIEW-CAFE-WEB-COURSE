// server
require('dotenv').config() //dotenv
const express = require('express');
const cors = require('cors')

const app = express();
const mongoose = require('mongoose');


// mongoose.connect('mongodb://127.0.0.1:27017/codebaithak') //promise localc
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rqjkglm.mongodb.net/`) //promise //cloud
.then(()=>{console.log("DB CONNECTED") })
.catch((err)=>{console.log("DB NOT CONNECTED" , err) })


// MIDDLEWARE
app.use(express.json()) //req.body
app.use(cors()); //cors access



app.get('/sam', (req,res)=>{
    return res.send("hey there sam route is hit")
})

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER IS LISTENING AT PORT: ${PORT}`);
})

// samarthvohraindia_db_user
// DSycXyXqh8emcsTt