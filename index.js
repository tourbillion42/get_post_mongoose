import express from "express"
import mongoose from "mongoose"
import { POST, mongodbURL } from "./config.js"
import { TEST } from "./model/testModel.js"
import testRoutes from "./routes/testRoutes.js"

const app = express() 

app.use(express.json())

app.get('/', (req, res, next) => {
    console.log('Welcome to my world ~ !!');
})

app.use('/test', testRoutes)


// connect database
mongoose
    .connect(mongodbURL)
    .then(() => {
        console.log("Application connected to database");
        app.listen(POST, () => {
            console.log(`Server is running ${POST}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })