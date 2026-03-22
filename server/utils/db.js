import mongoose from "mongoose";

export const connectDB=async()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("connected to database")
  }catch(err){
  console.log(err)
}
}