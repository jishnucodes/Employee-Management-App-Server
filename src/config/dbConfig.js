import mongoose from "mongoose"
import 'dotenv/config'

export const connectToDB = async () => {
    try {
       await mongoose.connect(process.env.DB_URL)
       console.log("database connected successfuly")
    } catch (error) {
        console.log("Error in connecting database")
    } 
}