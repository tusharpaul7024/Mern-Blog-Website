import dontenv from 'dotenv'
import connectDB from './db/index.js'
import app from './app.js'


dontenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.on("Error", (error) =>{
        console.log("Error in conecting db and server", error)
        throw error
    })

    app.listen(process.env.PORT || 8080, () => {
        console.log(`Server is running on PORT : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log('MongoDB connection failed !!!!', error)
})

//

// const server = express()

// let PORT = 3000

// server.listen(PORT , () => {
//     console.log('Listening on port :'+ PORT)
// })