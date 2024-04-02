import express from "express"
import { TEST } from "../model/testModel.js"

const router = express.Router() 

// route for save a new value 
router.post('/', async (req, res, next) => {
    try {
        if (!req.body.title || !req.body.name || !req.body.age) {
            res.status(400).send({
                message: "send all required: title, name, age"
            })
        }

        const newVAl = {
            title: req.body.title, 
            name: req.body.name, 
            age: req.body.age
        }

        const addVAl = await TEST.create(newVAl)

        res.status(201).send(addVAl)
        
    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: error.message })
    }
})

// router for get all value from database
router.get('/', async (req, res, next) => {
    try {
        const testVAl = await TEST.find({})

        res.status(200).json({
            count: testVAl.length, 
            data: testVAl
        })
        
    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: error.message })
    }
})

export default router