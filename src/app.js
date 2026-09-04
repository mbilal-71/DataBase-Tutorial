const express = require('express')
const noteModel = require('./models/note.model')

const app = express()

app.use(express.json())


app.post('/notes', async (req, res) => {
   const data = req.body // output => object {title,description}
   await noteModel.create({
    title: data.Title,
    description: data.Description
   })
   res.status(201).json({
    message:"Note Created"
   })
})

module.exports = app
