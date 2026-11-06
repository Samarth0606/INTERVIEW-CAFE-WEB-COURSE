// server
const express = require('express');
const cors = require('cors')

const app = express();

// MIDDLEWARE
app.use(express.json()) //req.body
app.use(cors()); //cors access

let password = 12345;
app.use('/sam' , (req,res,next)=>{
    if(password === 12345){
        next();
    }
    else{
        return res.send("Incorrect password")
    }
})

app.get('/sam', (req,res)=>{
    return res.send("hey there sam route is hit")
})

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER IS LISTENING AT PORT: ${PORT}`);
})