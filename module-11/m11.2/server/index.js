// create server

//commonjs
const express = require('express'); //fn
const app = express() //fn call -> object => appliation instance

//api 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sam' , (req,res)=>{}) //apis - create


const PORT = 8080; // 2000-9000
app.listen(PORT, () => {
  console.log(`SERVER is listening on port ${PORT}`)
})



