const express = require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

//setup express
const app =express()


//connect to mongodb
//body parser middleware
app.use(bodyParser.json())

//initialize routes
app.use('/api',require('./routes/api'))


//listen for requests
app.listen(process.env.port || 4000,()=>{
    console.log('now listening for requests')
})
