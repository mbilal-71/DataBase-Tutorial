const express = require('express')
const noteModel = require('./models/note.model')

const app = express()

app.use(express.json())

app.post('/notes', async (req,res)=>{
   const data = req.body // output object {title,description}
   await noteModel.create({
      title: data.Title,
      description: data.Description
   })
   res.status(201).json({
      message: 'Note Created'
   })
})

app.get('/notes', async (req,res)=>{
  const notes = await noteModel.find() // returns array []
  res.status(200).json({
   message: 'Notes Fetched Successfully',
   notes: notes
  })
})

// app.get('/notes', async (req,res)=>{
//   const notes = await noteModel.findOne({ // return single object{}
// title: 'Notes_2',
//   }) 
//   res.status(200).json({
//    message: 'Notes Fetched Successfully',
//    notes: notes
//   })
// })

app.delete('/notes/:id',async (req,res)=>{
   const id = req.params.id
   await noteModel.findOneAndDelete({
           _id: id,
   })
   res.status(200).json({
      message: 'Note deleted Successfully'
   })
})

app.patch('/notes/:id',async (req,res)=>{
   const id = req.params.id
   const description = req.body.Description
   await noteModel.findOneAndUpdate({
      _id:id
   },
   {
     description: description
   })
   res.status(200).json({
      message: 'Notes updated Successfully'
   })
})

module.exports = app
