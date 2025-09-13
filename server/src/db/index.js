import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONOGDB_URI}/${DB_NAME}`,{
            autoIndex: true
        })
        console.log('MongoDB is connected !! HOST : ',connectionInstance.connection.host )
    } catch (error) {
        console.log("Error in Connecting with Database !!", error)
        process.exit(1)
    }
}


export default connectDB