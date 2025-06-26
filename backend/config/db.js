import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://shibham:shivam123@cluster0.rqnm9jm.mongodb.net/food-del')
    .then(()=> console.log("DB Connected"))
    .catch((err)=> console.log("Connection Failed:",err))
}