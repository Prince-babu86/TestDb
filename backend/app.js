const express = require('express')
const app = express()
const db = require("./config/db")
const Post = require('./models/Post')
require("dotenv").config()
const cors = require("cors")
db()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: "https://testdb-1.onrender.com" // Frontend URL
  }));

app.get("/" , async function(req , res){
    let posts = await Post.find()
    res.send(posts)
})

app.post("/Create" , async function(req , res){
    try {
        let {name , title , image} = req.body
        let post = await Post.create({
          name,
         title,
        image,
        })
        res.send(post)
    } catch (error) {
        res.send(error.message)
    }
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

