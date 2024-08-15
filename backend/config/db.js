import mongoose from "mongoose";

 export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://pagadalahareesh2002:fooddel123@cluster0.ohdm0kq.mongodb.net/food_del').then(()=>
    console.log('DB Connected'))
}