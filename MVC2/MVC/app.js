const express=require('express')
const app=express()
const mongoose=require('mongoose')
const router=require('./Router')   // import from router 
require('dotenv').config();  //for env file

// mongoose connect
mongoose.connect(process.env.database)
.then(()=>{
    console.log("Database is connected Sucessfully");
})
.catch(()=>{
    console.log("Database is not connected");
})

// middleware
app.use(express.json())
app.use(express.urlencoded ({extended:false}))

//
app.use('/api',router)

// listening port number
app.listen(process.env.Port,()=>{
    console.log("Server is running:",process.env.Port);
})