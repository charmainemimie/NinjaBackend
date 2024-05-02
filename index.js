const express = require('express')


//setup express
const app =express()

//requests
app.get('/',(req,res)=>{
    console.log('GET request')
})

//listen for requests
app.listen(process.env.port || 4000,()=>{
    console.log('now listening for requests')
})
