const mongoose = require("mongoose")


const PostSchema = new mongoose.Schema({
    name:String,
    title:String,
    image:String
})

module.exports = mongoose.model("Post" , PostSchema)