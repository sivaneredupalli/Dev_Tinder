const express = require("express")
const connectDB=require("./config/database.js")
const User=require("./models/user")
const app = express();
//Middleware to get the API requests for all calls
app.use(express.json())
app.post("/signup",async (req,res)=>{
  //Creating new instance for User model
const user=new User(req.body)
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

