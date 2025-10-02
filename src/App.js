const express = require("express")
const connectDB=require("./config/database.js")
const User=require("./models/user")
const app = express();
app.post("/signup",async (req,res)=>{
const user=new User({
  firstName:"Syam",
  lastName:"Neredupalli",
  emailID:"neredupalliSyam3@gmail.com",
  password:"Syam@123"
})
try{await user.save();
res.send("Data inserted successfully...!")}
catch(err){
  res.status(400).send("Error saving the data : "+err.message)
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

