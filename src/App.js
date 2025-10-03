const express = require("express")
const connectDB=require("./config/database.js")
const User=require("./models/user")
const app = express();
//Middleware to get the API requests for all calls
app.use(express.json())
//Signup user API
app.post("/signup",async (req,res)=>{
  //Creating new instance for User model
const user=new User(req.body)
try{await user.save();
res.send("Data inserted successfully...!")}
catch(err){
  res.status(400).send("Error saving the data : "+err.message)
}
})
//Feed API
app.get("/feed",async(req,res)=>{
  const users= await User.find({})
  try{if(users.length===0){
    res.status(400).send("Something went wrong")
  }
  else{
    res.send(users)
  }}
  catch(err){
    res.status(404).send("Something went wrong")
  }
})
//Get User by emailID
app.get("/user", async(req,res)=>{
  const userEmailID = req.body.emailID;
  try{
    console.log(userEmailID)
const foundUser=await User.findOne({emailID:userEmailID})
if(!foundUser){
  
  res.status(404).send("User details are not existed")
}
else{
  res.send(foundUser)
}
  }
  catch{
    res.status(404).send("Something went wrong")
  }
                
})
//Delete user
app.delete("/user",async(req,res)=>{
  const user=req.body.userId;
  try{
const deleteUser=await User.findByIdAndDelete(user)
if(!deleteUser){
  res.status(404).send("User details are not existed")
}
else{
  res.send("User deleted successfully")
}
  }
  catch{
    res.status(404).send("Something went wrong")
  }
})
//
app.patch("/user",async(req,res)=>{
  const userId=req.body.userId;
  const data=req.body;
  try{
    const userUpdated=await User.findByIdAndUpdate(userId,data)
    if(!userUpdated){
  res.status(404).send("User details are not existed")
}
else{
  res.send("User Updated successfully")
}
  }
  catch(err){
    app.status(400).send("Something went wrong");
  }
})

connectDB().then(()=>{
    console.log("DB connection established successfully")
    app.listen(3333,()=>{
    console.log("Server successfully listening the port 3333 requests")
})
}).catch(err=>{
    console.error("Something went wrong while connecting to the DB")
})

