const express = require("express")
const app = express();
const {adminAuth,userAuth}= require("./middlewares/auth.js")
app.use('/admin',adminAuth)
app.use('/user',userAuth)
app.get('/user/getAllData',(req,res,)=>{
    res.send("User all data got successfully")
})
  app.get('/user/deleteUser',(req,res,)=>{
    res.send("User data deleted successfully")
})
app.get('/admin/getAllData',(req,res)=>{
  res.send("adminuser data got successfully");
})
app.get('/admin/deleteUser',(req,res)=>{
  res.send("AdminUser details deleted successfully")
})
app.listen(3333,()=>{
    console.log("Server successfully listening the port 3333 requests")
})
