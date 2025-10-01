const adminAuth=(req,res,next)=>{
  console.log("Admin Authentication Check")
  const token="xyz";
const Authenticated =token==="xyz"
if(!Authenticated){
  res.status(401).send("Unauthorized request")
}else{
  next()
}
}
const userAuth=(req,res,next)=>{
  console.log("User Authentication Check")
  const token="abc";
const Authenticated =token==="abc"
if(!Authenticated){
  res.status(401).send("Unauthorized request")
}else{
  next()
}
}
module.exports={adminAuth,userAuth}