const express = require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const cors =require('cors')
require('dotenv').config()
//setup express
const app =express()


//connect to mongodb
mongoose.connect(process.env.DB_URL)
mongoose.Promise=global.Promise

// cors
app.use(cors('*'))

//body parser middleware
app.use(bodyParser.json())

//initialize routes
app.use('/api',require('./routes/api'))

//error handling middleware
app.use((err,req,res,next)=>{
    //console.log(err)
    res.status(422).send({error:err.message
    
    })
})


//listen for requests
app.listen(process.env.PORT || 4000,()=>{
    console.log('now listening for requests')
})
