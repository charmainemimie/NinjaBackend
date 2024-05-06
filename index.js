const express = require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
require('dotenv').config()
//setup express
const app =express()


//connect to mongodb
mongoose.connect(process.env.DB_URL)
mongoose.Promise=global.Promise


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
