const express = require("express")
const app = express();
    // app.use()
app.use("/Siva",(req,res)=>{
    res.send("Hello Siva, Response from server")
})
app.use("/Surya",(req,res)=>{
res.send("Hello Surya, Response from Server")
})
app.use("/Ramu",(req,res)=>{
    res.send("Hello Ramu, Responding from Server")
})
app.listen(3333,()=>{
    console.log("Server successfully listening the port 3333 requests")
})
