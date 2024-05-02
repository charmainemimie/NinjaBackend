const express = require('express')
const router=express.Router()


//get a list of ninjas from the db-GET
router.get('/ninjas',(req,res)=>{
    res.send({type:'GET'})
} )

//add a new ninja to the db-POST
router.post('/ninjas',(req,res)=>{
    res.send({type:'POST'})
} )

//update a ninja in the db-PUT
router.put('/ninjas/:id',(req,res)=>{
    res.send({type:'PUT'})
} )

//delete a ninja from the db-DELETE
router.get('/ninjas/:id',(req,res)=>{
    res.send({type:'DELETE'})
} )