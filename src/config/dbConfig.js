import mongoose from "mongoose"
import 'dotenv/config'
import { seedUsers } from "../utils/utility.js"

export const connectToDB = async () => {
    try {
       await mongoose.connect(process.env.DB_URL)
       console.log("database connected successfuly")
    } catch (error) {
        console.log("Error in connecting database")
    } 
}