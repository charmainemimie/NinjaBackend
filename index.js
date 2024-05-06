const express = require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

//setup express
const app =express()


//connect to mongodb
mongoose.connect('mongodb+srv://charmainemangorima:7GrjbTMeusWS6r9o@ninjadb.vs5v93r.mongodb.net/?retryWrites=true&w=majority&appName=NinjaDB')
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
app.listen(process.env.port || 4000,()=>{
    console.log('now listening for requests')
})
