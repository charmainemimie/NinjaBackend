const express = require('express')
const bodyParser=require('body-parser')

//setup express
const app =express()

//body parser middleware
app.use(bodyParser.json())

//initialize routes
app.use('/api',require('./routes/api'))


//listen for requests
app.listen(process.env.port || 4000,()=>{
    console.log('now listening for requests')
})
