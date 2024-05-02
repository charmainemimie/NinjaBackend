const express = require('express')


//setup express
const app =express()

//requests
app.get('/api',(req,res)=>{
    console.log('GET request')
    res.send({
        name:'Charmie'
    })
})

//listen for requests
app.listen(process.env.port || 4000,()=>{
    console.log('now listening for requests')
})
