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
app.use(cors('* '))

//body parser middleware
app.use(bodyParser.json())


// Route: Define a simple GET route for the root path
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bookings Project</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #1a1a1a; /* Dark background color */
          text-align: center;
          margin-top: 100px;
          color: #fff; /* White text color */
        }
        h1 {
          font-size: 3em;
          color: #00bfff; /* Deep Sky Blue */
          margin-bottom: 20px; /* Add some space below the heading */
          animation: fadeInDown 1s ease; /* Fade in animation */
        }
        p {
          font-size: 1.2em;
          color: #ccc; /* Light Gray */
          animation: fadeInUp 1s ease; /* Fade in animation */
        }
        .developer-info {
          position: fixed;
          bottom: 10px;
          right: 10px;
          font-size: 0.8em;
          color: #888; /* Light Gray */
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      </style>
    </head>
    <body>
      <h1>Welcome to the Bookings API!</h1>
      <p>We collect a large amount of data from our customers with their consent, see bottom right for contact details</p>
      <div class="developer-info">
        <p>Developed by Joshua J Smith</p>
        <p>Github: <a href="https://github.com/XJ76">XJ76</a></p>
        <p>Phone: +263789956168</p>
      </div>
    </body>
    </html>  
    `);
  });

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
