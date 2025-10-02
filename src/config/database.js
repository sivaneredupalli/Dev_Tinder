const mongoose=require("mongoose")
const connectDB=async()=>{
await mongoose.connect("mongodb+srv://neredupallisiva3_db_user:6oHatILnnDawGrM2@nodejsprojects.itnrx8e.mongodb.net/devTinder")
}
module.exports=connectDB;
