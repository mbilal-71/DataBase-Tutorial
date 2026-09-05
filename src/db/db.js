const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect("mongodb+srv://backend:a9nM9GwR59C4UIt1@backend.5itllud.mongodb.net/halley")

console.log('Connected to DB')

}

module.exports = connectDB