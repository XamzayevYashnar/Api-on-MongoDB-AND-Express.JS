import { connect } from "mongoose";
import {obj} from '../utils/env.js'
import { asyncCatch } from "../middleware/asyncCatch.js";

const connectDB = asyncCatch(async ()=>{
    await connect(obj.MONGO_URI)
    console.log('Database is connect!')
})

export default connectDB