const express = require('express')
const router=express.Router()
const Ninja=require('../models/ninja')

//get a list of ninjas from the db-GET
router.get('/ninjas',(req,res)=>{
    res.send({type:'GET'})
} )

//add a new ninja to the db-POST
router.post('/ninjas',(req,res)=>{
    Ninja.create(req.body)  //returns a promise so use .then
        .then((ninja)=>{
             res.send(ninja)
        }) 
} )

//update a ninja in the db-PUT
router.put('/ninjas/:id',(req,res)=>{
    res.send({type:'PUT'})
} )

//delete a ninja from the db-DELETE
router.delete('/ninjas/:id',(req,res)=>{
    res.send({type:'DELETE'})
} )

module.exports=router;