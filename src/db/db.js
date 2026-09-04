const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect("mongodb+srv://backend:bslnsl5PtqTFfxuK@backend.5itllud.mongodb.net/halley")

console.log('Connected to DB')

}

module.exports = connectDB