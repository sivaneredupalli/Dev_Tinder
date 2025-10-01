const express = require("express")
const app = express();


app.get("/getUser",(req,res)=>{
  try{
    throw new Error("some error occured")
    res.send("UserData getting successfully")
  }
  catch(err){
    res.status(500).send("Something went wrong")
  }
})
app.use("/",(err,req,res,next)=>{
  if(err){
    res.status(500).send("Getting Unexpected Error")
  }
  next()
})
app.listen(3333,()=>{
    console.log("Server successfully listening the port 3333 requests")
})
